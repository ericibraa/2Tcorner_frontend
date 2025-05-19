<template>
  <div class="mt-5">

    <!-- Carousel Section -->
    <div :class="$vuetify.breakpoint.smAndDown ? '' : 'carousel pb-5'">
      <v-carousel cycle hide-delimiter-background continuous hide-delimiters show-arrows-on-hover width="1200"
        height="auto" class="slider">
        <v-carousel-item v-for="banner in banners" :key="banner._id">
          <!-- <v-img :src="require('~/assets/images/staticImg/MainBannerRev.png')"></v-img> -->
          <v-img :src="banner.image"></v-img>
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
                    :class="$vuetify.breakpoint.smAndDown ? 'form-radius mb-3' : 'form-radius mb-5 mx-5'" outlined
                    hide-details v-model="search" v-on:keyup.enter="search_products"></v-text-field>
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

    <ProductSlider :products="products" title="Motor Populer" variant="vehicle" />

    <ProductSlider :products="products" title="Sparepart" variant="sparepart" />

    <ProductSlider :products="products" title="Merchandise" variant="merchandise" />

    <!-- Berita Otomotif Section -->
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Berita Otomotif</p>
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
  </div>
</template>


<script>
import ProductSlider from '../components/ProductSlider.vue';

export default {
  name: "IndexPage",
  head() {
    return {
      title: "2TCorner No. 1 Titip Jual dan Beli Motor 2 Tak Pertama di Indonesia Paling Aman dan Terpercaya"
    }
  },
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
      products: [],
      banners: []
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
    },
    async getBanner() {
      try {
        let banner = await this.$axios.$get(this.$config.api + "/banner");
        this.banners = banner.data
      } catch (e) {
        console.log(e);

      }
    }
  },
  async fetch() {
    await this.getArticles();
    await this.getProducts();
    await this.getTypevehicle();
    await this.getBanner()
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
