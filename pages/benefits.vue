<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Main Section -->
        <v-card class="pa-5 elevation-3">
          <v-card-title class="justify-center">
            <div class="d-flex">
              <v-img :src="require('~/assets/images/logo/2tcorner 1.png')" max-width="200" class="mx-auto"></v-img>
              <p class="text-h5 font-weight-bold text-center ml-5 my-auto">Benefit</p>
            </div>
          </v-card-title>
          <v-card-title class="text-h6 font-weight-bold">
            Kenapa Memilih Kami?
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              Kami memiliki jaringan ke seluruh Indonesia, Malaysia, Jepang, dan
              Thailand sehingga kami dapat memberikan informasi yang lengkap untuk
              memenuhi motor impian kalian tentunya.
            </p>
            <p class="text-body-1">
              <strong>Keunggulan Kami:</strong>
            </p>
            <ul>
              <li><p class="text-body-1">Transaksi aman seluruh Indonesia dan luar negeri.</p></li>
              <li><p class="text-body-1">Pilihan tepat dan terpercaya.</p></li>
              <li><p class="text-body-1">Claim jika barang tidak sesuai.</p></li>
              <li><p class="text-body-1">After sales yang memuaskan.</p></li>
              <li><p class="text-body-1">Sparepart baru dan second.</p></li>
              <li><p class="text-body-1">Purna jual yang kompetitif.</p></li>
              <li><p class="text-body-1">Jual cepat yang aman.</p></li>
              <li><p class="text-body-1">Check point unit kendaraan.</p></li>
              <li><p class="text-body-1">Pelayanan profesional dan cepat.</p></li>
              <li><p class="text-body-1">Harga terbaik dan sesuai kondisi.</p></li>
              <li><p class="text-body-1">Service kendaraan dan restorasi.</p></li>
              <li><p class="text-body-1">
                Sudah terkoneksi dengan jasa pengiriman towing, cargo, dan container.
              </p></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WhyChooseUs",
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
