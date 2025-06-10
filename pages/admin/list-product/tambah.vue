<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <p>Tambah Produk</p>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="6">
              <v-select :items="variant" label="Variant" outlined item-text="name" item-value="value" hide-details
                v-model="form.variant"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Code Produk" outlined hide-details v-model="form.code"></v-text-field>
            </v-col>
            <template v-if="form.variant == 'vehicle'">
              <v-col cols="12">
                <v-text-field label="Nama Kendaraan" outlined hide-details v-model="form.vehicle_name"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Kendaraan" outlined hide-details v-model="formattedPrice" prefix="Rp"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Diskon Kendaraan" outlined hide-details v-model="formattedPricePromo"
                  prefix="Rp" @keypress="onlyNumber"></v-text-field>
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
                <v-text-field label="CC Kendaraan" outlined hide-details v-model="form.vehicle_cc"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field label="Tahun Kendaraan" outlined hide-details v-model="form.vehicle_years"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field label="Jumlah KM Kendaraan" outlined hide-details v-model="form.vehicle_kilometers"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select :items="grade" label="Grade Kendaraan" outlined item-text="name" hide-details
                  v-model="form.vehicle_grade"></v-select>
              </v-col>
              <v-col cols="6">
                <v-select :items="locations" label="Lokasi" outlined item-text="kota" item-value="_id" hide-details
                  v-model="form.location"></v-select>
              </v-col>
            </template>
            <!-- Sparepart -->
            <template v-if="form.variant == 'sparepart'">
              <v-col cols="12">
                <v-text-field label="Nama Suku Cadang" outlined hide-details v-model="form.vehicle_name"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Suku Cadang" outlined hide-details v-model="formattedPrice" prefix="Rp"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Diskon Suku Cadang" outlined hide-details v-model="formattedPricePromo"
                  prefix="Rp" @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select :items="merks" label="Merek Suku Cadang" outlined item-text="name" item-value="_id"
                  hide-details v-model="form.merk"></v-select>
              </v-col>
              <v-col cols="4">
                <v-text-field label="Tahun Suku Cadang" outlined hide-details v-model="form.vehicle_years"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select :items="locations" label="Lokasi" outlined item-text="kota" item-value="_id" hide-details
                  v-model="form.location"></v-select>
              </v-col>
            </template>
            <!-- Merchandise -->
            <template v-if="form.variant == 'merchandise'">
              <v-col cols="12">
                <v-text-field label="Nama Merchandise" outlined hide-details v-model="form.vehicle_name"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Merchandise" outlined hide-details v-model="formattedPrice" prefix="Rp"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Harga Diskon Merchandise" outlined hide-details v-model="formattedPricePromo"
                  prefix="Rp" @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select :items="merks" label="Merek Merchandise" outlined item-text="name" item-value="_id"
                  hide-details v-model="form.merk"></v-select>
              </v-col>
              <v-col cols="4">
                <v-text-field label="Tahun Merchandise" outlined hide-details v-model="form.vehicle_years"
                  @keypress="onlyNumber"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select :items="locations" label="Lokasi" outlined item-text="kota" item-value="_id" hide-details
                  v-model="form.location"></v-select>
              </v-col>
            </template>
            <v-col cols="6">
              <v-text-field label="Link Instagram (Optional)" outlined hide-details
                v-model="form.instagram"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Link Youtube (Optional)" outlined hide-details v-model="form.youtube"></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="d-flex">
                <div class="image-card" v-for="img in medias" :key="img.id">
                  <v-img :src="img.image" max-width="150" class="mr-3"></v-img>
                  <v-btn class="delete-btn" icon color="red" @click="deleteImg(img._id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
                <v-card class="upload-card" @click="dialog = true">
                  <v-card-text class="d-flex flex-column align-center justify-center">
                    <v-icon size="48">mdi-image-plus</v-icon>
                    <p class="text-center mb-0">Tambah Gambar</p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12">
              <client-only>
                <p class="caption grey--text text--darken-2">Description</p>
                <VueEditor id="descEditor" v-model="form.description" @image-added="uploadImage" />
              </client-only>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-end">
          <v-btn class="mr-3" to="/admin/list-product">Kembali</v-btn>
          <v-btn color="red" dark @click="submitProduct()">Simpan</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Upload Image</v-card-title>

        <v-card-text>
          <input label="File input" filled accept="image/*" prepend-icon="mdi-camera" type="file" ref="fileInput"
            @change="changeFile" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green" text @click="saveMedia()" :disabled="!imageFile">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      dialog: false,
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
        variant: 'vehicle',
        instagram: '',
        youtube: '',
        code: ''
      },
      imageFile: false,
      medias: [],
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
          name: "Kendaraan",
          value: "vehicle"
        },
        {
          name: "Suku Cadang",
          value: "sparepart"
        },
        {
          name: "Merchandise",
          value: "merchandise"
        },
      ]
    };
  },
  computed: {
    formattedPrice: {
      get() {
        return this.formatToIDR(this.form.price.normal);
      },
      set(value) {
        this.form.price.normal = value.replace(/\D/g, '');
      }
    },
    formattedPricePromo: {
      get() {
        return this.formatToIDR(this.form.price.current);
      },
      set(value) {
        this.form.price.current = value.replace(/\D/g, '');
      }
    }
  },
  methods: {
    changeFile() {
      let file = this.$refs.fileInput.files[0];
      this.imageFile = file
    },
    async uploadImage(file, insertImage) {
      const formData = new FormData();
      try {
        let data = await this.$axios.$post(this.$config.api + "/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.media = data

        insertImage(this.media.image);
      } catch (e) {
        console.log(e)
      }
    },
    async saveMedia() {
      const formData = new FormData();
      if (this.imageFile) {
        formData.append("file", this.imageFile)
      }
      try {
        let data = await this.$axios.$post(this.$config.api + "/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.medias.push(data)
        console.log(this.medias);

        this.dialog = false
      } catch (e) {
        console.log(e)
      }
    },
    async deleteImg(id) {
      try {
        await this.$axios.$delete(this.$config.api + `/upload/${id}`);
        this.medias = this.medias.filter((img) => img.id !== id);
        console.log("Image deleted successfully");
      } catch (error) {
        console.error("Failed to delete image:", error);
      }
    },
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
      } catch (e) {
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
          image: this.medias.map(item => item._id),
          sku_code: this.form.sku_code,
          price: {
            current: this.formattedPricePromo.replaceAll(".", ""),
            normal: this.formattedPrice.replaceAll(".", "")
          },
          cc: this.form.vehicle_cc,
          year: this.form.vehicle_years,
          grade: this.form.vehicle_grade,
          km_of_use: this.form.vehicle_kilometers,
          description: this.form.description,
          variant: this.form.variant,
          instagram: this.form.instagram,
          youtube: this.form.youtube,
          code: this.form.code
        })
        this.$router.push({ path: "/admin/list-product" });
      } catch (e) {
        console.log(e);

      }
    },
    onlyNumber(event) {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },
    formatToIDR(value) {
      if (!value) return "";
      return parseInt(value).toLocaleString("id-ID");
    }
  },
  async fetch() {
    await this.getMerks()
    await this.getTypes()
    await this.getLocation()
  }
};
</script>
<style scoped>
.upload-card {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 2px dashed #ccc;
  background-color: #f9f9f9;
  transition: 0.3s;
}

.upload-card:hover {
  background-color: #e0e0e0;
}

.image-card {
  position: relative;
  width: 150px;
  height: 150px;
}

.delete-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white !important;
  border-radius: 50%;
}
</style>