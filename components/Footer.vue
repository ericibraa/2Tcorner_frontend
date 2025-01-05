<template>
  <v-footer padless>
    <v-card class="flex" flat tile color="red">
      <v-card-title :class="$vuetify.breakpoint.smAndDown ? 'teal' : 'teal-desk'">
        <v-row class="pa-5" align="start">
          <!-- Left Section: Contact Information -->
          <v-col cols="12" md="6" class="text-center text-md-left">
            <p class="footer-title text-overline mb-10">2tcorner</p>
            <p class="text-body-1 font-weight-bold mb-2">Address:</p>
            <p class="grey--text text--darken-1 text-body-1 mb-3">
              Gg H Otong Bojong Baru, Bojong Gede, Bogor, West Java 16920, Indonesia
            </p>
            <p class="text-body-1 font-weight-bold mb-2">Whatsapp:</p>
            <p class="grey--text text--darken-1 text-body-1 mb-3">085772578341</p>
            <p class="text-body-1 font-weight-bold mb-2">Email:</p>
            <p class="grey--text text--darken-1 text-body-1 mb-3">corner2t@gmail.com</p>

            <!-- Social Media Icons -->
            <div class="d-flex justify-center mt-4 mb-5">
              <v-btn icon class="mr-5" href="https://www.facebook.com/2tak.corner" target="_blank">
                <v-img :src="require('~/assets/images/logo/facebook.png')" width="40" height="40"></v-img>
              </v-btn>
              <v-btn icon class="mr-5" href="https://www.tiktok.com/tag/2tcorner" target="_blank">
                <v-img :src="require('~/assets/images/logo/tiktok.png')" width="40" height="40"></v-img>
              </v-btn>
              <v-btn icon class="mr-5" href="https://www.instagram.com/2tcorner/?hl=en" target="_blank">
                <v-img :src="require('~/assets/images/logo/instagram.png')" width="40" height="40"></v-img>
              </v-btn>
              <v-btn icon class="mr-5" href="https://www.youtube.com/channel/UCQxTDIS0zZs3vLHU3j40URg" target="_blank">
                <v-img :src="require('~/assets/images/logo/youtube.png')" width="40" height="40"></v-img>
              </v-btn>
            </div>
          </v-col>

          <!-- Right Section: Google Map -->
          <v-col cols="12" md="6" class="text-center">
            <div style="border-radius: 30px; overflow: hidden;">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.304865405196!2d106.81104909999999!3d-6.4830207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3a72727d3f5%3A0x106d706ae62a7424!2s2TCorner.com!5e0!3m2!1sen!2sid!4v1710779702485!5m2!1sen!2sid"
                :width="$vuetify.breakpoint.smAndDown ? 350 : 600" :height="$vuetify.breakpoint.smAndDown ? 350 : 380"
                style="border: 0; border-radius: 20px" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Footer Text: Year and Company Name -->
      <v-card-text class="py-2 white--text text-center">
        <div class="d-flex justify-center align-center">
          <v-icon class="white--text">mdi-copyright</v-icon>
          <p class="my-auto ml-2">{{ new Date().getFullYear() }} - 2TCORNER</p>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-application .teal,
.v-application .teal-desk {
  background-color: rgb(244, 244, 244) !important;
}

.v-application .footer-title {
  font-size: 1.75rem !important;
  font-weight: bold;
}

.v-application .footer-title {
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .v-application .footer-title {
    font-size: 1.25rem;
  }
}
</style>