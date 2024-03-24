<template>
  <v-container>
    <v-card flat>
      <v-card-title class="justify-center">
        <p class="text-h4 font-weight-bold text-center">Terms and Conditions</p>
      </v-card-title>
      <div
        :class="$vuetify.breakpoint.smAndDown ? 'judulMobile' : 'judul'"
      ></div>
      <v-card-text class="pt-15">
        <v-row>
          <v-col cols="12" md="6">
            <ol type="1" v-if="!$vuetify.breakpoint.smAndDown">
              <li>Kami memastikan barang aman dan sesuai sebelum dikirim</li>
              <li>
                Kami sudah terkoneksi dengan berbagai jasa pengiriman, cargo,
                towing dan container
              </li>
              <li>
                Kami dapat bantu claim asuransi pengiriman jika terjadi
                kerusakan saat pengiriman
              </li>
              <li>Kami dapat membantu jual Kembali unit</li>
              <li>Kami menerima unit jual cepat khusus yang butuh dana</li>
              <li>Bonus merchandise t-shirt, keychain dan sticker 2tcorner</li>
              <li>
                Kami bisa bantu cek kendaraan dengan tim kami di setiap kota
              </li>
              <li>Kami sudah berdiri sejak 2019</li>
              <li>
                Barang sebelum dikirim dan sesudah diterima wajib video kondisi
                unit untuk proses claim jika terjadi kerusakan
              </li>
              <li>Kami menyediakan rekening Bersama (rekber)</li>
              <li>Kami menyediakan sparepart dan restorasi</li>
              <li>Kami menyediakan biro jasa seluruh Indonesia</li>
              <li>Kami menyediakan transaksi COD khusus jabodetabek</li>
              <li>Memberikan kemudahan dalam jual beli kendaraan kalian</li>
            </ol>
            <v-img
              :src="require('~/assets/images/logo/2tcorner 1.png')"
              max-width="200"
              class="mx-auto"
              v-else
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <ol type="1" v-if="$vuetify.breakpoint.smAndDown">
              <li>Kami memastikan barang aman dan sesuai sebelum dikirim</li>
              <li>
                Kami sudah terkoneksi dengan berbagai jasa pengiriman, cargo,
                towing dan container
              </li>
              <li>
                Kami dapat bantu claim asuransi pengiriman jika terjadi
                kerusakan saat pengiriman
              </li>
              <li>Kami dapat membantu jual Kembali unit</li>
              <li>Kami menerima unit jual cepat khusus yang butuh dana</li>
              <li>Bonus merchandise t-shirt, keychain dan sticker 2tcorner</li>
              <li>
                Kami bisa bantu cek kendaraan dengan tim kami di setiap kota
              </li>
              <li>Kami sudah berdiri sejak 2019</li>
              <li>
                Barang sebelum dikirim dan sesudah diterima wajib video kondisi
                unit untuk proses claim jika terjadi kerusakan
              </li>
              <li>Kami menyediakan rekening Bersama (rekber)</li>
              <li>Kami menyediakan sparepart dan restorasi</li>
              <li>Kami menyediakan biro jasa seluruh Indonesia</li>
              <li>Kami menyediakan transaksi COD khusus jabodetabek</li>
              <li>Memberikan kemudahan dalam jual beli kendaraan kalian</li>
            </ol>
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