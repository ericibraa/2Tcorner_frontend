<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <v-btn color="light-blue" dark :to="'/admin/merek/tambah'">Tambah Merek</v-btn>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogupload" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Upload Merek</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <p class="text-h6">Upload file</p>
              </v-card-title>
              <v-card-text>
                <v-text-field label="Select CSV / Excel File..." prepend-icon="mdi-file"></v-text-field>
                <input type="file" style="display: none" ref="fileInput" accept="*/*" />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialogupload = false">close</v-btn>
                <v-btn color="primary" @click.stop="onUploadSelectedFileClick()" :loading="loading">UPLOAD</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-flex md4 class="ml-5">
            <v-text-field append-icon="mdi-magnify" label="Search"></v-text-field>
          </v-flex>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-data-table :headers="headers" :items="merks" :items-per-page="5">
            <template  v-slot:item.url="{item}">
              <v-img :src="item.url" max-width="100"></v-img>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Konfirmasi</v-card-title>
          <v-card-text><p class="mb-0 text-body-1">Kamu yakin ingin menghapus merk ini?</p></v-card-text>
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
          text: "Merek",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Image Merek", value: "url", sortable: false },
        { text: "Action", value: "actions" },
      ],
      dataProducts: [],
      merks: [],
      dialogDelete: false,
      deleteId: ''
    };
  },
  methods: {
    editItem(item) {
      this.$router.push("/admin/merek/" + item._id)
    },
    deleteItem(item) {
      this.dialogDelete = true,
        this.deleteId = item._id
    },
    async deleteItemConfirm(id) {
      try {
        await this.$axios.$delete(this.$config.api + "/merk/" + id)
        this.$nuxt.refresh();
        this.dialogDelete = false
      } catch (e) {
        console.log(e);

      }
    }
  },
  async fetch() {
    try {
      var merk = await this.$axios.$get(this.$config.api + "/merk");
      this.merks = merk.data
      console.log(this.merks);

    } catch (e) {
      console.log(e);

    }

  },
};
</script>