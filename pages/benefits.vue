<template>
  <v-container>
    <v-card flat>
      <v-text-title class="justify-center">
        <p class="text-h4 font-weight-bold text-center">Benefit With Us</p>
        <div
          :class="$vuetify.breakpoint.smAndDown ? 'judulMobile' : 'judul'"
        ></div>
      </v-text-title>
      <v-card-text class="pt-15">
        <v-row>
          <v-col cols="12" md="6">
            <div v-if="!$vuetify.breakpoint.smAndDown">
              <p class="text-body-2">
                Kami memiliki jaringan keseluruh Indonesia, Malaysia, jepang dan
                Thailand sehingga kami dapat memberikan informasi yang lengkap
                yang dapat memenuhi motor Impian kalian tentunya.
              </p>
              <ol type="1">
                <li>
                  <p class="text-body-2 mb-2">
                    Transaksi aman seluruh Indonesia dan luar negeri
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Pilihan tepat dan terpercaya</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Claim jika barang tidak sesuai</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Claim barang jika tidak sesuai</p>
                </li>
                <li><p class="text-body-2 mb-2">After sales</p></li>
                <li>
                  <p class="text-body-2 mb-2">Sparepart baru dan second</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Purna jual yang kompetitif</p>
                </li>
                <li><p class="text-body-2 mb-2">Jual cepat yang aman</p></li>
                <li>
                  <p class="text-body-2 mb-2">Check point unit kendaraan</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Pelayanan professional dan cepat
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Harga terbaik dan sesuai kondisi
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Service kendaraan dan restorasi
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Sudah terkoneksi dengan jasa pengiriman towing , cargo dan
                    container
                  </p>
                </li>
              </ol>
            </div>
            <v-img
              :src="require('~/assets/images/logo/2tcorner 1.png')"
              max-width="200"
              class="mx-auto"
              v-else
            ></v-img>
            <!-- <p>
              We have a network throughout Indonesia, Malaysia, Japan and
              Thailand so we can provide complete information that can fulfill
              your dream motorbike of course.
            </p>
            <ol type="1">
              <li>Secure transactions throughout Indonesia and abroad</li>
              <li>The right and trusted choice</li>
              <li>Claim if the goods do not match</li>
              <li>Claim the goods if they are not suitable</li>
              <li>After sales</li>
              <li>New and second hand spare parts</li>
              <li>Competitive after-sales</li>
              <li>Safe fast selling</li>
              <li>Vehicle unit check point</li>
              <li>Professional and fast service</li>
              <li>Best price and according to condition</li>
              <li>Vehicle service and restoration</li>
              <li>
                Already connected to towing, cargo and container delivery
                services
              </li>
            </ol> -->
          </v-col>
          <v-col cols="12" md="6">
            <div v-if="$vuetify.breakpoint.smAndDown">
              <p class="text-body-2">
                Kami memiliki jaringan keseluruh Indonesia, Malaysia, jepang dan
                Thailand sehingga kami dapat memberikan informasi yang lengkap
                yang dapat memenuhi motor Impian kalian tentunya.
              </p>
              <ol type="1">
                <li>
                  <p class="text-body-2 mb-2">
                    Transaksi aman seluruh Indonesia dan luar negeri
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Pilihan tepat dan terpercaya</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Claim jika barang tidak sesuai</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Claim barang jika tidak sesuai</p>
                </li>
                <li><p class="text-body-2 mb-2">After sales</p></li>
                <li>
                  <p class="text-body-2 mb-2">Sparepart baru dan second</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">Purna jual yang kompetitif</p>
                </li>
                <li><p class="text-body-2 mb-2">Jual cepat yang aman</p></li>
                <li>
                  <p class="text-body-2 mb-2">Check point unit kendaraan</p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Pelayanan professional dan cepat
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Harga terbaik dan sesuai kondisi
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Service kendaraan dan restorasi
                  </p>
                </li>
                <li>
                  <p class="text-body-2 mb-2">
                    Sudah terkoneksi dengan jasa pengiriman towing , cargo dan
                    container
                  </p>
                </li>
              </ol>
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