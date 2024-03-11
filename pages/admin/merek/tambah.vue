<template>
  <v-container>
    <div>
      <v-card>
        <v-card-title style="background: #eceff1">
          <p>Tambah Merek</p>
        </v-card-title>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Merek Kendaraan"
                outlined
                hide-details
                v-model="merek"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="Unggah Merek Kendaraan"
                outlined
                prepend-icon="mdi-camera"
                hide-details="auto"
                v-model="img_merek"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-end">
          <v-btn class="mr-3" to="/admin/merek">Kembali</v-btn>
          <v-btn color="red" dark @click="submitMerek">Simpan</v-btn>
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
      merek: "",
      img_merek: "",
    };
  },
  methods: {
    async submitMerek() {
      try {
        await this.$axios.$post("example.com/orders", {
          merek: this.merek,
          image: this.img_merek,
        });
        this.$router.push({ path: "/admin/merek" });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>