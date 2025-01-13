<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <p>Tambah Merk</p>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="12">
              <v-text-field label="Merk Kendaraan" outlined hide-details v-model="merk"></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-text-field label="Link Image Kendaraan" outlined hide-details v-model="imgMerk"></v-text-field>
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
          </v-row>
        </v-card-text>
        <v-card-text class="text-end">
          <v-btn class="mr-3" to="/admin/merek">Kembali</v-btn>
          <v-btn color="red" dark @click="submitMerk()">Simpan</v-btn>
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
      merk: "",
      imgMerk: "",
      imgTemp: []
    };
  },
  methods: {
    async submitMerk() {
      try {
        await this.$axios.$post(this.$config.api + "/merk/", {
          name: this.merk,
          url: this.imgMerk,
        });
        this.$router.push({ path: "/admin/merek" });
      } catch (e) {
        console.log(e);
      }
    },
    addImage() {
      this.imgTemp.push(this.imgMerk)
      this.imgMerk = ''
    }
  },
};
</script>