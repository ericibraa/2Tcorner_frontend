<template>
  <v-container class="pt-0">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col md="8">
        <div class="box text-center">
          <v-img :src="detailProduct.images_details[selectedImage].image" contain max-height="370px"
            v-if="detailProduct.image && detailProduct.image.length > 0"></v-img>
        </div>
        <div class="mt-10">
          <v-sheet class="mx-auto">
            <v-slide-group v-model="selectedImage" class="pa-0" center-active show-arrows>
              <v-slide-item v-for="(slide, index) in detailProduct.images_details" :key="index"><v-img
                  class="mb-0 mr-3 agile__slide__smallest" v-bind:class="[
                    index == selectedImage ? 'agile__slide--active' : '',
                  ]" :src="slide.image" contain @click="chooseimage(index)" max-width="70" max-height="70"></v-img>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
        <div class="mt-10">
          <p class="text-body-1 mb-2">Detail Produk</p>
          <p class="text-body-2">{{ detailProduct.description }}</p>
          <iframe width="300" height="500" :src="detailProduct.instagram" frameborder="0" v-if="detailProduct.instagram"></iframe>
          <iframe width="300" height="500" :src="detailProduct.youtube" frameborder="0" v-if="detailProduct.youtube"></iframe>
        </div>
      </v-col>
      <v-col md="4">
        <v-card rounded="xxl" style="position: sticky; top: 85px" class="pa-2">
          <v-card-text>
            <p class="text-body-1 font-weight-medium mb-2">{{ detailProduct.name }}</p>
            <div class="d-flex">
              <v-icon size="14px" class="my-auto mr-2">mdi-map-marker</v-icon>
              <p class="text-caption grey--text mb-0">
                Kota {{ detailProduct.location_details.kota }}
              </p>
            </div>
            <p class="text-h6 red--text font-weight-bold mb-0 mt-3">{{ detailProduct.price.current | currency }}</p>
            <v-divider class="my-3"></v-divider>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-icon class="my-auto mr-2 grey--text">mdi-calendar-month</v-icon>
                <p class="my-auto grey--text text-body-2">Tahun</p>
              </div>
              <p class="my-auto text-body-2">{{ detailProduct.year }}</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-icon class="my-auto mr-2 grey--text">mdi-speedometer</v-icon>
                <p class="my-auto grey--text text-body-2">Kilometer</p>
              </div>
              <p class="my-auto text-body-2">{{ detailProduct.km_of_use }} km</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-icon class="my-auto mr-2 grey--text">mdi-motorbike</v-icon>
                <p class="my-auto grey--text text-body-2">Merk</p>
              </div>
              <p class="my-auto text-body-2">{{ detailProduct.merk_details.name }}</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-icon class="my-auto mr-2 grey--text">mdi-engine-outline</v-icon>
                <p class="my-auto grey--text text-body-2">Kapasitas Mesin</p>
              </div>
              <p class="my-auto text-body-2">{{ detailProduct.cc }} CC</p>
            </div>
            <v-divider class="my-3"></v-divider>
            <p class="text-body-2 text-center">
              Untuk pemesanan langsung hubungi WhatsApp Admin
            </p>
            <v-btn block color="#0FBE55" dark> Hubungi WhatsApp </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectedImage: 0,
      items: [],
      detailProduct: {},
    };
  },
  methods: {
    chooseimage(indexs) {
      this.selectedImage = indexs;
    },
  },
  async fetch() {
    try {
      let details = await this.$axios.$get(this.$config.api + "/products/" + this.$route.params.slug)
      this.detailProduct = details

      this.items = [

        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Motor " + details.type_details.name,
          disabled: false,
          href: "",
        },
        {
          text: details.name,
          disabled: true,
        },

      ]
    } catch (e) {
      console.log(e);

    }
  }
};
</script>
<style>
.agile__slide__smallest {
  border-radius: 10px;
  height: 65px;
  width: auto;
  border: 1px solid rgb(172, 166, 166);
  -o-object-fit: contain;
  object-fit: contain;
}

.agile__slide--active {
  opacity: 1;
  border-radius: 10px;
  border: 2px solid red;
}
</style>