<template>
  <v-container>
    <v-card flat>
      <v-text-title class="justify-center">
        <p class="text-h4 font-weight-bold text-center">HOW TO BUY / SELL</p>
        <div
          :class="$vuetify.breakpoint.smAndDown ? 'judulMobile' : 'judul'"
        ></div>
      </v-text-title>
      <v-card-text class="pt-15">
        <v-row>
          <v-col v-if="$vuetify.breakpoint.smAndDown">
            <v-img
              :src="require('~/assets/images/logo/2tcorner 1.png')"
              max-width="200"
              class="image"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-h6 font-weight-bold">Cara pembelian</p>
            <ol type="1">
              <li>
                <p class="text-body-2 mb-2">Pilih unit yang di ingikan</p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Hubungi admin melalui whatsapp 085772578341
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Kirim data lengkap beserta Alamat untuk pengecekan ongkir
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Transfer ke rek bca 5720503648 an dian novtani
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Admin akan menginfokan resi dan foto packing
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Barang diterima wajib video testimony dan video unboxing
                </p>
              </li>
            </ol>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-h6 font-weight-bold">Cara jual dan titip jual</p>
            <ol type="1">
              <li>
                <p class="text-body-2 mb-2">
                  Hubungi admin langsung melalui whatsapp 085772578341
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Kirimkan detail berupa foto dan video
                </p>
              </li>
              <li>
                <p class="text-body-2 mb-2">Tunggu proses nego kendaraan</p>
              </li>
              <li>
                <p class="text-body-2 mb-2">
                  Unit akan dipickup oleh pengiriman atau penjual kirim ke gerai
                </p>
              </li>
            </ol>
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