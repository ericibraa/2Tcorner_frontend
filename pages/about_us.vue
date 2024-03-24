<template>
  <v-container>
    <v-card flat>
      <v-card-title class="justify-center">
        <p class="text-h4 font-weight-bold text-center mb-0">About Us</p>
      </v-card-title>
      <div
        :class="$vuetify.breakpoint.smAndDown ? 'judulMobile' : 'judul'"
      ></div>
      <v-card-text class="pt-15">
        <v-row>
          <v-col cols="12" md="6">
            <div v-if="!$vuetify.breakpoint.smAndDown">
              <p class="text-h6 font-weight-bold">
                Selamat datang di website kami
              </p>
              <p class="text-body-1">
                Terima kasih sudah percaya dengan platform kami untuk
                bertransaksi aman seluruh Indonesia dan mancanegara. Kami sangat
                senang dapat memfasilitasi para penggemar motor 2 tak, motor
                klasik dan motor untuk koleksi. Kami menjunjung tinggi nilai
                kepercayaan terhadap pelanggan, bagi kami customer adalah raja
                yang harus dilayani dengan penuh hati. Semoga kami bisa melaju
                terus dan melalukan yang lebih baik untuk pelayanan pelanggan.
              </p>
            </div>
            <v-img
              :src="require('~/assets/images/logo/2tcorner 1.png')"
              max-width="200"
              class="mx-auto"
              v-else
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <div v-if="$vuetify.breakpoint.smAndDown">
              <p class="text-h6 font-weight-bold">
                Selamat datang di website kami
              </p>
              <p class="text-body-1">
                Terima kasih sudah percaya dengan platform kami untuk
                bertransaksi aman seluruh Indonesia dan mancanegara. Kami sangat
                senang dapat memfasilitasi para penggemar motor 2 tak, motor
                klasik dan motor untuk koleksi. Kami menjunjung tinggi nilai
                kepercayaan terhadap pelanggan, bagi kami customer adalah raja
                yang harus dilayani dengan penuh hati. Semoga kami bisa melaju
                terus dan melalukan yang lebih baik untuk pelayanan pelanggan.
              </p>
            </div>
            <v-img
              :src="require('~/assets/images/logo/2tcorner 1.png')"
              max-width="200"
              class="mx-auto"
              v-else
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<style>
.about-us {
  position: relative;
}
.content {
  position: absolute;
  top: 160px;
  right: 0;
  max-width: 450px;
}
.judul {
  border-bottom: solid 4px red;
  margin: 0 530px;
}
.judulMobile {
  border-bottom: solid 4px red;
  margin: 0 130px;
}
</style>