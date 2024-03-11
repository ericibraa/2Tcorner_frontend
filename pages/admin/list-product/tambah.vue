<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <p>Tambah Produk</p>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Nama Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Kode SKU"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Harga Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                :items="merek"
                label="Merek Kendaraan"
                outlined
                item-text="name"
                item-value="value"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-select
                :items="type"
                label="Tipe Kendaraan"
                outlined
                item-text="name"
                item-value="value"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-select
                :items="mechine"
                label="Kategori Kendaraan"
                outlined
                item-text="name"
                item-value="value"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="CC Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Tahun Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Jumlah KM Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="grade"
                label="Grade Kendaraan"
                outlined
                item-text="name"
                item-value="value"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Lokasi Kendaraan"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-file-input
                label="Unggah Foto Kendaraan"
                outlined
                prepend-icon="mdi-camera"
                hide-details="auto"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <p class="text-caption">Deskripsi</p>
              <client-only>
                <VueEditor />
              </client-only>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-end">
          <v-btn class="mr-3" to="/admin/list-product">Kembali</v-btn>
          <v-btn color="red" dark>Simpan</v-btn>
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
      merek: [
        {
          name: "Yamaha",
          value: "yamaha",
        },
        {
          name: "Honda",
          value: "honda",
        },
        {
          name: "Suzuki",
          value: "suzuki",
        },
      ],
      type: [
        {
          name: "Matic",
          value: "matic",
        },
        {
          name: "Sport",
          value: "sport",
        },
        {
          name: "Bebek",
          value: "bebek",
        },
      ],
      mechine: [
        {
          name: "2Tak",
          value: "2tak",
        },
        {
          name: "4Tak",
          value: "4tak",
        },
        {
          name: "Electric",
          value: "electric",
        },
      ],
      grade: [
        {
          name: "A",
          value: "a",
        },
        {
          name: "B",
          value: "b",
        },
        {
          name: "C",
          value: "c",
        },
        {
          name: "D",
          value: "d",
        },
      ],
    };
  },
};
</script>