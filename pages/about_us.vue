<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <v-card class="text-center pa-5 elevation-3">
          <v-card-title class="justify-center">
            <div class="d-flex">
              <v-img :src="require('~/assets/images/logo/2tcorner 1.png')" max-width="200" class="mx-auto"></v-img>
              <p class="text-h5 font-weight-bold text-center ml-5 my-auto">About Us</p>
            </div>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold mb-3 mt-5">
            Selamat Datang di Website Kami
          </v-card-text>
          <v-card-text class="text-body-1">
            Terima kasih sudah percaya dengan platform kami untuk bertransaksi aman
            seluruh Indonesia dan mancanegara. Kami sangat senang dapat memfasilitasi
            para penggemar motor 2 tak, motor klasik, dan motor untuk koleksi.
          </v-card-text>
          <v-card-text class="text-body-1">
            Kami menjunjung tinggi nilai kepercayaan terhadap pelanggan. Bagi kami,
            customer adalah raja yang harus dilayani dengan penuh hati. Semoga kami
            bisa melaju terus dan melakukan yang lebih baik untuk pelayanan pelanggan.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
