<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <v-btn color="light-blue" dark :to="'/admin/list-product/tambah'">Tambah Produk</v-btn>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogupload" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Upload Produk</v-btn>
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
          <v-data-table :headers="headers" :items="products" :items-per-page="5">
            <template v-slot:item.action="{ item }">
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
  data() {
    return {
      search: "",
      dialogupload: false,
      loading: false,
      headers: [
        {
          text: "Kode SKU",
          align: "start",
          sortable: false,
          value: "sku_code",
        },
        { text: "Nama Produk", value: "name" },
        { text: "Harga", value: "price.current" },
        { text: "Merek", value: "merk_details.name" },
        { text: "Kategori Mesin", value: "category" },
        { text: "Tipe Motor", value: "type_details.name" },
        { text: "CC", value: "cc" },
        { text: "Tahun Motor", value: "year" },
        { text: "Jumlah KM", value: "km_of_use" },
        { text: "Grade", value: "grade" },
        { text: "Lokasi", value: "location" },
        { text: "Action", value: "action" }
      ],
      products: [],
      deleteId: '',
      dialogDelete: false
    };
  },
  methods: {
    async getProducts() {
      try {
        var products = await this.$axios.$get(this.$config.api + '/products')
        this.products = products.data
      } catch (e) {
        console.log(e);
      }
    },
    editItem(item) {
      this.$router.push("/admin/list-product/" + item._id)
    },
    deleteItem(item) {
      this.dialogDelete = true,
        this.deleteId = item._id
    },
    async deleteItemConfirm(id) {
      try {
        await this.$axios.$delete(this.$config.api + '/products/' + id)
        this.$nuxt.refresh();
        this.dialogDelete = false
      } catch (e) {
        console.log(e);

      }
    }
  },
  async fetch() {
    await this.getProducts()
  }
};
</script>