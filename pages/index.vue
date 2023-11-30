<template>
  <div>
    <v-carousel
      v-model="model"
      cycle
      hide-delimiter-background
      continuous
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card elevation="5">
          <v-card-title>
            <p class="body-1">Merk Motor</p>
          </v-card-title>
          <v-card-text>
            <v-btn max-height="100">
              <v-img
                :src="require('~/assets/images/brandLogo/yamaha.png')" max-width="50"
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
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
};
</script>
