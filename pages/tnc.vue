<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="py-10">
          <v-card-title class="justify-center">
            <div class="d-flex">
              <v-img :src="require('~/assets/images/logo/2tcorner 1.png')" max-width="200" class="mx-auto"></v-img>
              <p class="text-h5 font-weight-bold text-center ml-5 my-auto">Terms and Conditions</p>
            </div>
          </v-card-title>
          <v-card-text>
            <h3>Ketentuan Seller:</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib mengecek barang sebelum dikirim unit dan mengirim foto serta bukti video saat pengiriman
                  cargo/towing.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib mengirim resi bukti pengiriman/no supir towing.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib memberikan testimonial berupa video kepada 2tcorner.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib memberikan no admin ekspedisi yang bertugas.
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <h3>Ketentuan Seller:</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib DP jika tertarik dengan unit minimal DP Rp1 juta kepada admin.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib melunasi pembayaran setelah keluar no resi/pickup towing.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib cek unit 1x24 jam setelah sampai dan lapor admin kondisi sesuai atau tidaknya.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib komplain jika barang rusak atas pengiriman atau tidak sesuai dengan penjelasan bukti foto dan
                  video kirim ke admin.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Wajib memberikan testimonial berupa video kepada 2tcorner.
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <h3>Pembatalan Pesanan / Refund:</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Jika barang tidak sesuai dengan spesifikasi dan buyer tidak cocok, unit dapat dikembalikan dengan utuh
                  dan dana dapat di refund.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Biaya pengiriman pembatalan ditanggung oleh pembeli.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Jika buyer melakukan cancel order maka DP hangus tidak bisa dikembalikan tetapi bisa dialihkan dengan
                  unit lain.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Dana refund dapat dikembalikan maksimal paling lambat 30 hari kerja.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Dana refund dipotong biaya cancelation fee sebesar 5% dari total harga motor/barang.
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <h3>Kompensasi:</h3>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Jika barang tidak sesuai dengan spesifikasi maka buyer berhak mendapatkan kompensasi dan garansi
                  sesuai dengan spesifikasi.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Kompensasi dapat berupa uang tunai maupun barang yang sesuai.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Kompensasi harus saling menguntungkan kedua pihak.
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "KetentuanPage",
};
</script>

<style>
h3 {
  margin-top: 20px;
  color: #555;
}
</style>
