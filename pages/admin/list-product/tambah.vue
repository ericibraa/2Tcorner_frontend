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
              <v-text-field label="Nama Kendaraan" outlined hide-details v-model="form.vehicle_name"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Harga Kendaraan" outlined hide-details v-model="form.price.normal"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Harga Diskon Kendaraan" outlined hide-details
                v-model="form.price.current"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select :items="merks" label="Merek Kendaraan" outlined item-text="name" item-value="_id" hide-details
                v-model="form.merk"></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="types" label="Tipe Kendaraan" outlined item-text="name" item-value="_id" hide-details
                v-model="form.type"></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="mechine" label="Kategori Kendaraan" outlined item-text="name" item-value="value"
                hide-details v-model="form.vehicle_category"></v-select>
            </v-col>
            <v-col cols="4">
              <v-text-field label="CC Kendaraan" outlined hide-details v-model="form.vehicle_cc"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Tahun Kendaraan" outlined hide-details v-model="form.vehicle_years"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Jumlah KM Kendaraan" outlined hide-details
                v-model="form.vehicle_kilometers"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select :items="grade" label="Grade Kendaraan" outlined item-text="name" hide-details
                v-model="form.vehicle_grade"></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="locations" label="Lokasi" outlined item-text="kota" item-value="_id" hide-details
                v-model="form.location"></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="variant" label="Variant" outlined item-text="name" item-value="value"
                hide-details v-model="form.variant"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Link Instagram (Optional)" outlined hide-details
                v-model="form.instagram"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Link Youtube (Optional)" outlined hide-details
                v-model="form.youtube"></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-text-field label="Link Image Kendaraan" outlined hide-details v-model="form.image"></v-text-field>
            </v-col>
            <v-col cols="2" class="my-auto">
              <v-btn @click="addImage()" color="red" dark block>Add Image</v-btn>
            </v-col>
            <v-col cols="12" v-if="imgTemp != []">
              <div class="d-flex">
                <v-img v-for="img in imgTemp" :key="img" :src="img" aspect-ratio="1" max-height="200" max-width="200"
                  class="mr-3"></v-img>
              </div>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="form.description" label="Deskripsi" full-width></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-end">
          <v-btn class="mr-3" to="/admin/list-product">Kembali</v-btn>
          <v-btn color="red" dark @click="submitProduct()">Simpan</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      merks: [],
      types: [],
      locations: [],
      form: {
        vehicle_name: '',
        sku_code: '',
        price: {
          normal: '',
          current: ''
        },
        merk: '',
        type: '',
        vehicle_category: '',
        vehicle_cc: '',
        vehicle_years: '',
        vehicle_kilometers: '',
        vehicle_grade: '',
        location: '',
        image: '',
        description: '',
        variant: '',
        instagram: '',
        youtube: ''
      },
      imgTemp: [],
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
      variant: [
        {
          name: "Vehicle",
          value: "vehicle"
        },
        {
          name: "Sparepart",
          value: "sparepart"
        },
        {
          name: "Merchandise",
          value: "merchandise"
        },
      ]
    };
  },
  methods: {
    async getMerks() {
      try {
        var merk = await this.$axios.$get(this.$config.api + "/merk")
        this.merks = merk.data
      } catch (e) {
        console.log(e);

      }
    },
    async getTypes() {
      try {
        var type = await this.$axios.$get(this.$config.api + "/type")
        this.types = type.data
      } catch (e) {
        console.log(e);
      }
    },
    async getLocation() {
      try {
        var location = await this.$axios.$get(this.$config.api + "/location")
        this.locations = location.data
      } catch(e) {
        console.log(e);
        
      }
    },
    async submitProduct() {
      try {
        await this.$axios.$post(this.$config.api + "/products", {
          name: this.form.vehicle_name,
          merk: this.form.merk,
          type: this.form.type,
          category: this.form.vehicle_category,
          location: this.form.location,
          image: this.imgTemp,
          sku_code: this.form.sku_code,
          price: {
            current: this.form.price.current,
            normal: this.form.price.normal
          },
          cc: this.form.vehicle_cc,
          year: this.form.vehicle_years,
          grade: this.form.vehicle_grade,
          km_of_use: this.form.vehicle_kilometers,
          description: this.form.description,
          variant: this.form.variant,
          instagram: this.form.instagram,
          youtube: this.form.youtube
        })
        this.$router.push({ path: "/admin/list-product" });
      } catch (e) {
        console.log(e);

      }
    },
    addImage() {
      this.imgTemp.push(this.form.image);
      this.form.image = ''
    }
  },
  async fetch() {
    await this.getMerks()
    await this.getTypes()
    await this.getLocation()
  }
};
</script>