<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Cara Pembelian Section -->
        <v-card class="pa-5 mb-5 elevation-3">
          <v-card-title class="justify-center">
            <div class="d-flex">
              <v-img :src="require('~/assets/images/logo/2tcorner 1.png')" max-width="200" class="mx-auto"></v-img>
              <p class="text-h5 font-weight-bold text-center ml-5 my-auto">How To Buy</p>
            </div>
          </v-card-title>
          <v-card-title class="text-h5 font-weight-bold">
            Cara Pembelian
          </v-card-title>
          <v-card-text>
            <ol>
              <li><p class="text-body-1">Pilih unit yang di inginkan.</p></li>
              <li><p class="text-body-1">Hubungi admin melalui WhatsApp <strong>085772578341</strong>.</p></li>
              <li><p class="text-body-1">Kirim data lengkap beserta alamat untuk pengecekan ongkir.</p></li>
              <li><p class="text-body-1">
                Transfer ke rekening BCA <strong>5720503648</strong> atas nama
                <strong>Dian Novtani</strong>.
              </p></li>
              <li><p class="text-body-1">Admin akan menginfokan resi dan foto packing.</p></li>
              <li><p class="text-body-1">Barang diterima, wajib video testimoni dan video unboxing.</p></li>
            </ol>
          </v-card-text>
          <v-card-title class="text-h5 font-weight-bold">
            Cara Jual dan Titip Jual
          </v-card-title>
          <v-card-text>
            <ol>
              <li><p class="text-body-1">Hubungi admin langsung melalui WhatsApp <strong>085772578341</strong>.</p></li>
              <li><p class="text-body-1">Kirimkan detail berupa foto dan video.</p></li>
              <li><p class="text-body-1">Tunggu proses nego kendaraan.</p></li>
              <li><p class="text-body-1">Unit akan dipickup oleh pengiriman atau penjual kirim ke gerai.</p></li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CaraPembelianJual",
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
