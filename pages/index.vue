<template>
  <div>
    <div class="carousel pb-5">
      <v-carousel
        cycle
        hide-delimiter-background
        continuous
        hide-delimiters
        show-arrows-on-hover
        width="100%"
        height="100%"
      >
        <v-carousel-item>
          <v-img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/11/29/a8632885-5592-4948-8dbb-83a7bb45157c.jpg.webp?ect=4g"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card elevation="5">
          <v-card-title>
            <p class="body-1">Merk Motor</p>
          </v-card-title>
          <v-card-text>
            <v-btn max-height="100">
              <v-img
                :src="require('~/assets/images/brandLogo/yamaha.png')"
                max-width="50"
              ></v-img>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <div>
          <p>Mang eak</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.carousel {
  border-radius: 10px;
}
</style>
