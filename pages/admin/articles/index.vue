<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <v-btn color="light-blue" dark :to="'/admin/articles/tambah'">Tambah Article</v-btn>
          <v-spacer></v-spacer>
          <v-flex md4 class="ml-5">
            <v-text-field append-icon="mdi-magnify" label="Search"></v-text-field>
          </v-flex>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-data-table :headers="headers" :items="articles" :items-per-page="5">
            <template v-slot:item.status="{ item }">
              <v-chip label>
                <span>{{ statusMapping[item.status] }}</span>
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="!dialogDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm(deleteId)">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      search: "",
      dialogupload: false,
      loading: false,
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Short Desc", value: "short_desc", sortable: false },
        { text: "Author", value: "author", sortable: false },
        { text: "Status", value: "status" },
        { text: "Action", value: "actions", align: 'center' },
      ],
      dataProducts: [],
      articles: [],
      dialogDelete: false,
      deleteId: '',
      statusMapping: {
        0: 'Tidak Tampil',
        1: 'draft',
        10: 'Tampil'
      }
    };
  },
  methods: {
    editItem(item) {
      this.$router.push("/admin/articles/" + item.slug)
    },
    deleteItem(item) {
      this.dialogDelete = true,
        this.deleteId = item._id
    },
    async deleteItemConfirm(id) {
      try {
        await this.$axios.$delete(this.$config.api + "/articles/" + id)
        this.$nuxt.refresh();
        this.dialogDelete = false
      } catch (e) {
        console.log(e);

      }
    }
  },
  async fetch() {
    try {
      var articles = await this.$axios.$get(this.$config.api + "/articles");
      this.articles = articles.data

    } catch (e) {
      console.log(e);

    }

  },
};
</script>