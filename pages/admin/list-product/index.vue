<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <v-btn color="light-blue" dark :to="'/admin/list-product/tambah'"
            >Tambah Produk</v-btn
          >
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
                <v-text-field
                  label="Select CSV / Excel File..."
                  prepend-icon="mdi-file"
                ></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="fileInput"
                  accept="*/*"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialogupload = false">close</v-btn>
                <v-btn
                  color="primary"
                  @click.stop="onUploadSelectedFileClick()"
                  :loading="loading"
                  >UPLOAD</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-flex md4 class="ml-5">
            <v-text-field
              append-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-flex>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-data-table
            :headers="headers"
            :items="dataProducts"
            :items-per-page="5"
          ></v-data-table>
        </v-card-text>
      </v-card>
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
          value: "name",
        },
        { text: "Nama Produk", value: "product_name" },
        { text: "Harga", value: "price" },
        { text: "Merek", value: "merek" },
        { text: "Kategori", value: "category" },
        { text: "Tipe Motor", value: "motor_type" },
        { text: "Mesin", value: "mechine" },
        { text: "CC", value: "cc" },
        { text: "Tahun Motor", value: "motor_year" },
        { text: "Jumlah KM", value: "total_km" },
        { text: "Grade", value: "grade" },
        { text: "Lokasi", value: "location" },
      ],
      dataProducts: [],
    };
  },
};
</script>