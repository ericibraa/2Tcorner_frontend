<template>
  <div class="mt-5">

    <!-- Carousel Section -->
    <div :class="$vuetify.breakpoint.smAndDown ? '' : 'carousel pb-5'">
      <v-carousel cycle hide-delimiter-background continuous hide-delimiters show-arrows-on-hover width="1200"
        height="auto" class="slider">
        <v-carousel-item>
          <v-img :src="require('~/assets/images/staticImg/MainBannerRev.png')"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Merek Search Section -->
    <div :class="$vuetify.breakpoint.smAndDown ? '' : 'merekSearch'">
      <v-container>
        <div :class="$vuetify.breakpoint.smAndDown ? '' : 'shadowSearch'">
          <v-card flat rounded="xxl" :elevation="$vuetify.breakpoint.smAndDown ? 0 : ''">
            <v-row>
              <!-- Left Section: Search by Brand -->
              <v-col cols="12" md="8" :class="$vuetify.breakpoint.smAndDown ? '' : 'py-5'">
                <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : ''">
                  <p :class="$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h6 mx-5'">Mau cari motor?</p>
                  <v-text-field label="Cari motor berdasarkan brand, model, dll"
                    :class="$vuetify.breakpoint.smAndDown ? 'form-radius mb-3' : 'form-radius mb-5 mx-5'" outlined hide-details v-model="search"
                    v-on:keyup.enter="search_products"></v-text-field>
                  <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-5'"
                    :src="require('~/assets/images/staticImg/example.png')"></v-img>
                  <v-slide-group show-arrows="never">
                    <v-slide-item v-for="tipe of typeVehicle" :key="tipe._id">
                        <div class="shadow-box-type mt-7" @click="search_by_type(tipe._id)">
                          <v-img :src="tipe.image" max-height="70" max-width="125" contain></v-img>
                          <p class="text-center text-body-2 my-2">{{ tipe.name }}</p>
                        </div>
                    </v-slide-item>
                  </v-slide-group>
                </v-card-text>
              </v-col>

              <!-- Divider -->
              <v-divider vertical class="my-5" v-if="!$vuetify.breakpoint.smAndDown"></v-divider>

              <!-- Right Section: Search by Category -->
              <v-col cols="12" md="4" :class="$vuetify.breakpoint.smAndDown ? '' : 'py-5 pr-10'">
                <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : ''">
                  <p class="text-h6">Cari motor berdasarkan kategori?</p>
                  <v-select :items="listMesin" label="Mesin" item-text="name" item-value="value" outlined hide-details
                    class="form-radius mb-5" v-model="machine"></v-select>
                  <v-text-field label="CC" outlined hide-details class="mb-5 form-radius" v-model=cc></v-text-field>
                  <v-text-field label="Tahun" outlined hide-details class="mb-5 form-radius"
                    v-model="years"></v-text-field>
                  <v-select :items="listGrade" label="Grade" item-text="name" item-value="value" outlined hide-details
                    class="mb-5 form-radius" v-model="grade"></v-select>
                  <v-btn block color="#F1363D" dark rounded class="py-6" @click="search_by_category">Cari
                    kendaraan</v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </div>

    <!-- Popular Motor Section -->
    <v-container class="py-5" v-if="products.some(product => product.variant === 'vehicle')">
      <p class="text-h6">Motor Populer</p>
      <v-slide-group :show-arrows="!$vuetify.breakpoint.smAndDown">
        <v-slide-item v-for="product in products" :key="product._id" v-show="product.variant == 'vehicle'">
          <v-card :width="$vuetify.breakpoint.smAndDown ? 175 : 320" :height="$vuetify.breakpoint.smAndDown ? 335 : 420"
            rounded="xxl" class="shadow-box-card ma-4" :href="'/product/' + product.slug">
            <v-img :src="product.images_details[0].image" max-height="250" aspect-ratio="1"></v-img>
            <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'pa-4'">
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'product-name text-body-2 font-weight-medium mb-1' : 'product-name text-body-1 font-weight-medium mb-2'">
                {{ product.name }}</p>
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'text-body-1 font-weight-bold primary--text mb-2' : 'text-h6 font-weight-bold primary--text mb-3'">
                {{ product.price.current | currency }}</p>
              <div class="d-flex align-center grey--text text-body-2 mb-3">
                <v-icon class="mr-1" :size="$vuetify.breakpoint.smAndDown ? 12 : 18">mdi-map-marker</v-icon>
                <p :class="$vuetify.breakpoint.smAndDown ? 'mb-0 text-caption' : 'text-body-2 mb-0'">{{ product.location_details.kota
                  }}</p>
              </div>
              <div class="d-flex flex-wrap">
                <v-chip outlined class="mr-1 mb-2" small>
                  <p class="text-caption font-weight-medium my-auto">{{ product.merk_details.name }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.year }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-speedometer</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.km_of_use }}</p>
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <!-- Sparepart Section -->
    <v-container class="py-5" v-if="products.some(product => product.variant === 'sparepart')">
      <p class="text-h6">Sparepart</p>
      <v-slide-group :show-arrows="!$vuetify.breakpoint.smAndDown">
        <v-slide-item v-for="product in products" :key="product._id" v-show="product.variant == 'sparepart'">
          <v-card :width="$vuetify.breakpoint.smAndDown ? 175 : 320" :height="$vuetify.breakpoint.smAndDown ? 335 : 420"
            rounded="xxl" class="shadow-box-card ma-4" :href="'/product/' + product._id">
            <v-img :src="product.images_details[0].image" max-height="250" aspect-ratio="1"></v-img>
            <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'pa-4'">
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'product-name text-body-2 font-weight-medium mb-1' : 'product-name text-body-1 font-weight-medium mb-2'">
                {{ product.name }}</p>
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'text-body-1 font-weight-bold primary--text mb-2' : 'text-h6 font-weight-bold primary--text mb-3'">
                {{ product.price.current | currency }}</p>
              <div class="d-flex align-center grey--text text-body-2 mb-3">
                <v-icon class="mr-1" :size="$vuetify.breakpoint.smAndDown ? 12 : 18">mdi-map-marker</v-icon>
                <p :class="$vuetify.breakpoint.smAndDown ? 'mb-0 text-caption' : 'text-body-2 mb-0'">{{ product.location_details.kota
                  }}</p>
              </div>
              <div class="d-flex flex-wrap">
                <v-chip outlined class="mr-1 mb-2" small>
                  <p class="text-caption font-weight-medium my-auto">{{ product.merk_details.name }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.year }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-speedometer</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.km_of_use }}</p>
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

     <!-- Merch Section -->
     <v-container class="py-5" v-if="products.some(product => product.variant === 'merchandise')">
      <p class="text-h6">Sparepart</p>
      <v-slide-group :show-arrows="!$vuetify.breakpoint.smAndDown">
        <v-slide-item v-for="product in products" :key="product._id" v-show="product.variant == 'merchandise'">
          <v-card :width="$vuetify.breakpoint.smAndDown ? 175 : 320" :height="$vuetify.breakpoint.smAndDown ? 335 : 420"
            rounded="xxl" class="shadow-box-card ma-4" :href="'/product/' + product._id">
            <v-img :src="product.images_details[0].image" max-height="250" aspect-ratio="1"></v-img>
            <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'pa-4'">
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'product-name text-body-2 font-weight-medium mb-1' : 'product-name text-body-1 font-weight-medium mb-2'">
                {{ product.name }}</p>
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'text-body-1 font-weight-bold primary--text mb-2' : 'text-h6 font-weight-bold primary--text mb-3'">
                {{ product.price.current | currency }}</p>
              <div class="d-flex align-center grey--text text-body-2 mb-3">
                <v-icon class="mr-1" :size="$vuetify.breakpoint.smAndDown ? 12 : 18">mdi-map-marker</v-icon>
                <p :class="$vuetify.breakpoint.smAndDown ? 'mb-0 text-caption' : 'text-body-2 mb-0'">{{ product.location_details.kota
                  }}</p>
              </div>
              <div class="d-flex flex-wrap">
                <v-chip outlined class="mr-1 mb-2" small>
                  <p class="text-caption font-weight-medium my-auto">{{ product.merk_details.name }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.year }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-speedometer</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.km_of_use }}</p>
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <!-- Berita Otomotif Section -->
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Berita Otomotif</p>
        <!-- <div class="mb-4">
          <v-chip v-for="article in articles" :key="article.id"
            :color="selectedArticle.id === article.id ? 'primary' : ''" @click="setArticle(article)"
            :outlined="selectedArticle.id !== article.id" class="text-center mr-2 mb-2">
            <p :class="selectedArticle.id !== article.id ? 'black--text' : 'white--text'"
              class="text-overline mb-0 text-center mx-auto">
              {{ article.name }}
            </p>
          </v-chip>
        </div> -->
        <v-slide-group :show-arrows="!$vuetify.breakpoint.smAndDown" class="mb-4">
          <v-slide-item v-for="(article, i) of articles" :key="article.title + i">
            <v-card :width="$vuetify.breakpoint.smAndDown ? 300 : 350"
              :height="$vuetify.breakpoint.smAndDown ? 340 : 360" rounded="xxl"
              class="shadow-box-card ma-4 overflow-hidden" :href="'/articles/' + article.slug" elevation="2">
              <v-img :src="article.image[0]" max-height="200" aspect-ratio="1" class="rounded-t-xl"></v-img>
              <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2 pt-0' : 'pa-4 pt-0'">
                <div :style="$vuetify.breakpoint.smAndDown ? 'height: 80px' : 'height:100px;'">
                  <p :class="$vuetify.breakpoint.smAndDown ? 'text-body-2 font-weight-bold mt-2 mb-1' : 'text-bodi-1 font-weight-bold mt-2 mb-1'"
                    style="max-width: 100%; overflow: hidden;">
                    {{ article.title }}
                  </p>
                  <p :class="$vuetify.breakpoint.smAndDown ? 'text-caption article-truncate' : 'text-body-2'">{{
                    article.short_desc
                  }}</p>
                </div>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between mt-2">
                  <v-btn text class="text-caption grey--text">Read more</v-btn>
                  <v-icon size="20" class="grey--text">mdi-arrow-right</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </div>

    <!-- Service Section -->
    <v-container>
      <v-card flat class="my-10">
        <v-card-title class="justify-center">
          <p :class="$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h4'">Our Service</p>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6" md="3" lg="3" v-for="img in ourService" :key="img">
              <v-img :src="img"></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Service Section -->
    <!-- <v-container>
      <v-card flat class="my-10 py-6 px-8">
        <v-card-title class="justify-center">
          <p class="text-h4">Kenapa harus pilih 2tcorner?</p>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="3" lg="3" sm="6" xs="12" v-for="(benefit, index) in ourService" :key="index"
              class="text-center py-4">
              <v-card outlined class="pa-4 hover-card">
                <v-img :src="benefit" contain max-height="100" class="mb-3"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container> -->
  </div>
</template>


<script>
import { TriggerOpTypes } from 'vue';

export default {
  name: "IndexPage",
  data() {
    return {
      ourService: [
        require("~/assets/images/staticImg/our-service/towing.jpeg"),
        require("~/assets/images/staticImg/our-service/inspection.jpeg"),
        require("~/assets/images/staticImg/our-service/consigment.jpeg"),
        require("~/assets/images/staticImg/our-service/biro jasa.jpeg"),
        require("~/assets/images/staticImg/our-service/rekber.jpeg"),
        require("~/assets/images/staticImg/our-service/meida online.jpeg"),
        require("~/assets/images/staticImg/our-service/jual beli.jpeg"),
        require("~/assets/images/staticImg/our-service/forwarder.jpeg"),
      ],
      typeVehicle: [],
      search: "",
      machine: "",
      cc: "",
      years: "",
      grade: "",
      type: "",
      listMesin: [
        {
          value: "2t",
          name: "2T",
        },
        {
          value: "4t",
          name: "4T",
        },
        {
          value: "electic",
          name: "Electric",
        },
      ],
      listGrade: [
        {
          value: "a",
          name: "A",
        },
        {
          value: "b",
          name: "B",
        },
        {
          value: "c",
          name: "C",
        },
        {
          value: "d",
          name: "D",
        },
      ],
      selectedArticle: {
        id: "001",
        name: "Trending",
      },
      articles: [],
      products: []
    };
  },
  methods: {
    tipekend(href) {
      this.$router.push("/katalog/" + href);
    },
    setArticle(data) {
      if (this.selectedArticle.id != data.id) {
        this.selectedArticle = data;
        console.log(this.selectedArticle);
      } else {
        this.selectedArticle = {};
      }
    },
    async getArticles() {
      var articles = await this.$axios.$get(this.$config.api + "/articles");
      this.articles = articles.data
    },
    async getProducts() {
      var product = await this.$axios.$get(this.$config.api + "/products");
      this.products = product.data
    },
    async getTypevehicle() {
      var type = await this.$axios.$get(this.$config.api + "/type");
      this.typeVehicle = type.data
    },
    search_products() {
      this.$router
        .replace({ path: "/katalog", query: { search: this.search } })
        .then(() => this.$nuxt.refresh());
    },
    search_by_category() {
      this.$router.replace({ path: "/katalog", query: { machine: this.machine, cc: this.cc, years: this.years, grade: this.grade } }).then(() => this.$nuxt.refresh())
    },
    search_by_type(type) {
      this.$router
        .replace({ path: "/katalog", query: { type: type } })
        .then(() => this.$nuxt.refresh());
    }
  },
  async fetch() {
    await this.getArticles();
    await this.getProducts();
    await this.getTypevehicle();
  }
};
</script>

<style scoped>
.shadow-box-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for modern look */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shadow-box-card:hover {
  transform: translateY(-4px);
  /* Lift effect on hover */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  /* Enhanced shadow on hover */
}

.shadow-box-type {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.shadow-box-type:hover {
  transform: translateY(-4px);
}


.product-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.primary--text {
  color: #1976d2;
  /* Vuetify primary color or customize as needed */
}

.form-radius {
  border-radius: 20px;
}

.carousel {
  display: block;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.merk-button {
  border: solid 1px darkgray !important;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  cursor: pointer;
}

.merk-button:hover {
  background-color: rgb(247, 247, 247);
}

.tipe-kendaraan {
  border: solid 1px darkgray !important;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.tipe-kendaraan:hover {
  background-color: rgb(247, 247, 247);
}

.shadow-box {
  box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -webkit-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -moz-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  margin-bottom: 16px;
  position: relative;
}

.merekSearch {
  margin-top: 500px;
}

.shadowSearch {
  box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.30);
  -webkit-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -moz-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  margin-bottom: 16px;
  position: relative;
  border-radius: 30px;
}

.service {
  height: 300px;
  background-color: rgb(226, 226, 226);
  border-radius: 10px;
}
</style>
