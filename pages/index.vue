<template>
  <div class="mt-5">

    <!-- Carousel Section -->
    <div :class="$vuetify.breakpoint.smAndDown ? '' : 'carousel pb-5'">
      <v-carousel
        cycle
        hide-delimiter-background
        continuous
        hide-delimiters
        show-arrows-on-hover
        width="1200"
        height="600"
        class="slider"
      >
        <v-carousel-item>
          <v-img :src="require('~/assets/images/staticImg/MainBannerRev.png')"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Merek Search Section -->
    <div :class="$vuetify.breakpoint.smAndDown ? '' : 'merekSearch'">
      <v-container>
        <div class="shadowSearch">
          <v-card flat rounded="xxl">
            <v-row>
              <!-- Left Section: Search by Brand -->
              <v-col cols="12" md="8" class="py-5">
                <v-card-text>
                  <p class="text-h5 mx-5">Mau cari motor?</p>
                  <v-text-field
                    label="Cari motor berdasarkan brand, model, dll"
                    class="form-radius mb-5 mx-5"
                    outlined
                    hide-details
                  ></v-text-field>
                  <v-img
                    class="mx-5"
                    :src="require('~/assets/images/staticImg/example.png')"
                  ></v-img>
                  <v-slide-group show-arrows="never">
                    <v-slide-item v-for="tipe of tipeKendaraan" :key="tipe.value">
                      <div class="mt-7">
                        <v-img
                          :src="tipe.src ? tipe.src : require('~/assets/images/staticImg/x-image.png')"
                          max-height="60"
                          width="125"
                          contain
                        ></v-img>
                        <p class="text-center text-body-2 my-2">{{ tipe.name }}</p>
                      </div>
                    </v-slide-item>
                  </v-slide-group>
                </v-card-text>
              </v-col>

              <!-- Divider -->
              <v-divider vertical class="my-5"></v-divider>

              <!-- Right Section: Search by Category -->
              <v-col cols="12" md="4" class="py-5 pr-10">
                <v-card-text>
                  <p class="text-h5">Cari motor berdasarkan kategori?</p>
                  <v-select
                    :items="listMesin"
                    label="Mesin"
                    item-text="name"
                    item-value="value"
                    outlined
                    hide-details
                    class="form-radius mb-5"
                  ></v-select>
                  <v-text-field label="CC" outlined hide-details class="mb-5 form-radius"></v-text-field>
                  <v-text-field label="Tahun" outlined hide-details class="mb-5 form-radius"></v-text-field>
                  <v-select
                    :items="listGrade"
                    label="Grade"
                    item-text="name"
                    item-value="value"
                    outlined
                    hide-details
                    class="mb-5 form-radius"
                  ></v-select>
                  <v-btn block color="#F1363D" dark rounded class="py-6">Cari kendaraan</v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </div>

    <!-- Popular Motor Section -->
    <v-container class="py-5">
      <p class="text-h6">Motor Populer</p>
      <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
        <v-slide-item v-for="(product, i) of listMotor" :key="product.name + i">
          <v-card width="320" height="420" rounded="xxl" class="shadow-box-card ma-4" :href="'/product/' + product.slug">
            <v-img :src="product.src" max-height="250"></v-img>
            <v-card-text class="pa-4">
              <p class="product-name text-hbody-1 font-weight-medium mb-2">{{ product.name }}</p>
              <p class="text-h6 font-weight-bold primary--text mb-3">{{ product.price }}</p>
              <div class="d-flex align-center grey--text text-body-2 mb-3">
                <v-icon class="mr-1 text-body-2" size="18">mdi-map-marker</v-icon> {{ product.location }}
              </div>
              <div class="d-flex flex-wrap">
                <v-chip outlined class="mr-1 mb-2" small>
                  <p class="text-caption font-weight-medium my-auto">{{ product.merek }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-speedometer</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.kilometer }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small>
                  <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.tahun }}</p>
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <!-- Sparepart Section -->
    <v-container class="py-5">
      <p class="text-h6">Sparepart</p>
      <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
        <v-slide-item v-for="(sparepart, i) of listSparepart" :key="sparepart.name + i">
          <a>
            <v-card width="320" height="420" rounded="xxl" class="shadow-box-card ma-4" :href="'/sparepart/' + sparepart.slug">
              <v-img :src="sparepart.src" max-height="250"></v-img>
              <v-card-text class="pa-4">
                <p class="product-name text-body-1 font-weight-medium mb-2">{{ sparepart.name }}</p>
                <p class="text-h6 font-weight-bold primary--text mb-3">{{ sparepart.price }}</p>
                <div class="d-flex align-center grey--text text-body-2 mb-3">
                  <v-icon class="mr-1" size="18">mdi-map-marker</v-icon> {{ sparepart.location }}
                </div>
                <div class="d-flex flex-wrap">
                  <v-chip outlined class="mr-1 mb-2" small>
                    <p class="text-caption font-weight-medium my-auto">{{ sparepart.merek }}</p>
                  </v-chip>
                  <v-chip outlined class="mr-1 mb-2" small>
                    <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                    <p class="text-caption font-weight-medium my-auto">{{ sparepart.tahun }}</p>
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </a>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <!-- Berita Otomotif Section -->
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Berita Otomotif</p>
        <div class="mb-4">
          <v-chip v-for="article in articles" :key="article.id"
            :color="selectedArticle.id === article.id ? 'primary' : ''" @click="setArticle(article)"
            :outlined="selectedArticle.id !== article.id" class="text-center mr-2 mb-2">
            <p :class="selectedArticle.id !== article.id ? 'black--text' : 'white--text'"
              class="text-overline mb-0 text-center mx-auto">
              {{ article.name }}
            </p>
          </v-chip>
        </div>
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp" class="mb-4">
          <v-slide-item v-for="(article, i) of listNewarticle" :key="article.title + i">
            <v-card width="400" height="380" rounded="xxl" class="shadow-box-card ma-4 overflow-hidden"
              :href="'/article/' + article.slug" elevation="2">
              <v-img :src="article.src" max-height="200" class="rounded-t-xl"></v-img>
              <v-card-text class="pa-4">
                <p class="text-h6 font-weight-bold mt-2 mb-1" style="max-width: 100%; overflow: hidden;">
                  {{ article.title }}
                </p>
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
           <p class="text-h4">Our Service</p>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <div class="service"></div>
              </v-col>
              <v-col cols="4">
                <div class="service"></div>
              </v-col>
              <v-col cols="4">
                <div class="service"></div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
  </div>
</template>


<script>
export default {
  name: "IndexPage",
  data() {
    return {
      articles: [
        {
          id: "001",
          name: "Trending",
        },
        {
          id: "002",
          name: "Terbaru",
        },
      ],
      merkKendaraan: [
        {
          name: "Yamaha",
          value: "yamaha",
          src: require("~/assets/images/brandLogo/yamaha.jpg"),
          href: "",
        },
        {
          name: "Honda",
          value: "honda",
          src: require("~/assets/images/brandLogo/honda.png"),
          href: "",
        },
        {
          name: "Kawasaki",
          value: "kawasaki",
          src: require("~/assets/images/brandLogo/kawasaki.png"),
          href: "",
        },
      ],
      tipeKendaraan: [
        {
          value: "sport",
          name: "Sport",
          src: require("~/assets/images/logo/icon-touring.png"),
          href: "sport/sport",
        },
        {
          value: "matic",
          name: "Matic",
          src: require("~/assets/images/logo/icon-motor.png"),
          href: "sport",
        },
        {
          value: "bebek",
          name: "Bebek",
          src: require("~/assets/images/logo/icon-scooter.png"),
          href: "sport",
        },
        {
          value: "touring",
          name: "Touring",
          src: require("~/assets/images/logo/icon-touring.png"),
          href: "sport",
        },
        {
          value: "moge",
          name: "Moge",
          src: require("~/assets/images/logo/icon-touring.png"),
          href: "sport",
        },
        {
          value: "scooter",
          name: "Scooter",
          src: require("~/assets/images/logo/icon-scooter.png"),
          href: "sport",
        },
        {
          value: "moped",
          name: "Moped",
          src: require("~/assets/images/logo/icon-motor.png"),
          href: "sport",
        },
        {
          value: "trail",
          name: "Trail",
          src: require("~/assets/images/logo/icon-touring.png"),
          href: "sport",
        },
        {
          value: "listrik",
          name: "Listrik",
          src: require("~/assets/images/logo/icon-scooter.png"),
          href: "sport",
        },
      ],
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
      listSparepart: [
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          merek: "Honda",
          tahun: "2014",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
      ],
      listMotor: [
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 RR Old Tahun 2011",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 20.000.000",
          location: "Jakarta",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor2.jpeg"),
        },
        {
          name: "For Sale Ninja 150 SS Hijau",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000.000",
          location: "Bandung",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor3.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor4.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor2.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor4.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          tahun: "2020",
          kilometer: "45.000 KM",
          merek: "Kawasaki",
          src: require("~/assets/images/staticImg/motor3.jpeg"),
        },
      ],
      listNewarticle: [
        {
          title:
            "Capai Target SDGs dengan Elektrifikasi Kendaraan Listrik Melalui Subsisdi dan Era Konversi di Indonesia",
          body: "Indonesia, sebagai negara berkembang dengan populasi yang besar, memiliki tantangan besar dalam memenuhi kebutuhan energi yang terus meningkat.",
          src: require("~/assets/images/staticImg/article.jpg"),
        },
        {
          title:
            "Capai Target SDGs dengan Elektrifikasi Kendaraan Listrik Melalui Subsisdi dan Era Konversi di Indonesia",
          body: "Indonesia, sebagai negara berkembang dengan populasi yang besar, memiliki tantangan besar dalam memenuhi kebutuhan energi yang terus meningkat.",
          src: require("~/assets/images/staticImg/article.jpg"),
        },
        {
          title:
            "Capai Target SDGs dengan Elektrifikasi Kendaraan Listrik Melalui Subsisdi dan Era Konversi di Indonesia",
          body: "Indonesia, sebagai negara berkembang dengan populasi yang besar, memiliki tantangan besar dalam memenuhi kebutuhan energi yang terus meningkat.",
          src: require("~/assets/images/staticImg/article.jpg"),
        },
        {
          title:
            "Capai Target SDGs dengan Elektrifikasi Kendaraan Listrik Melalui Subsisdi dan Era Konversi di Indonesia",
          body: "Indonesia, sebagai negara berkembang dengan populasi yang besar, memiliki tantangan besar dalam memenuhi kebutuhan energi yang terus meningkat.",
          src: require("~/assets/images/staticImg/article.jpg"),
        },
        {
          title:
            "Capai Target SDGs dengan Elektrifikasi Kendaraan Listrik Melalui Subsisdi dan Era Konversi di Indonesia",
          body: "Indonesia, sebagai negara berkembang dengan populasi yang besar, memiliki tantangan besar dalam memenuhi kebutuhan energi yang terus meningkat.",
          src: require("~/assets/images/staticImg/article.jpg"),
        },
      ],
      selectedArticle: {
        id: "001",
        name: "Trending",
      },
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
  },
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

.product-name {
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
