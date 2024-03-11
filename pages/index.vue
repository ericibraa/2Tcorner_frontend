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
        class="slider"
      >
        <v-carousel-item>
          <v-img
            :src="require('~/assets/images/staticImg/MainBannerRev.png')"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="merekSearch">
      <v-container>
        <div class="shadowSearch">
          <v-card flat rounded="xxl">
            <v-row>
              <v-col cols="8">
                <v-card-text>
                  <p class="text-h6 font-weight-bold black--text">
                    Mau cari motor?
                  </p>
                  <v-text-field
                    label="Cari motor berdasarkan brand, model, dll"
                    class="mb-5"
                    outlined
                    hide-details
                    dense
                  ></v-text-field>
                  <v-img
                    :src="require('~/assets/images/staticImg/example.png')"
                  ></v-img>
                  <v-slide-group show-arrows="never" class="mt-5">
                    <v-slide-item
                      v-for="merk of merkKendaraan"
                      :key="merk.value"
                    >
                      <div>
                        <v-img
                          :src="merk.src"
                          max-height="40"
                          width="95"
                          contain
                        ></v-img>
                        <p class="text-center text-caption mt-2">
                          {{ merk.name }}
                        </p>
                      </div>
                    </v-slide-item>
                  </v-slide-group>
                  <v-slide-group show-arrows="never">
                    <v-slide-item
                      v-for="tipe of tipeKendaraan"
                      :key="tipe.value"
                    >
                      <div>
                        <v-img
                          :src="
                            tipe.src
                              ? tipe.src
                              : require('~/assets/images/staticImg/x-image.png')
                          "
                          max-height="40"
                          width="95"
                          contain
                        ></v-img>
                        <p class="text-center text-caption mt-2">
                          {{ tipe.name }}
                        </p>
                      </div>
                    </v-slide-item>
                  </v-slide-group>
                </v-card-text>
              </v-col>
              <v-divider vertical inset class="my-10"></v-divider>
              <v-col cols="4">
                <v-card-text>
                  <p class="text-h6 font-weight-bold black--text">
                    Cari motor berdasarkan kategori
                  </p>
                  <v-select
                    :items="listMesin"
                    label="Mesin"
                    item-text="name"
                    item-value="value"
                    outlined
                    dense
                    hide-details
                    class="mb-5"
                  ></v-select>
                  <v-text-field
                    label="CC"
                    outlined
                    hide-details
                    dense
                    class="mb-5"
                  ></v-text-field>
                  <v-text-field
                    label="Tahun"
                    outlined
                    hide-details
                    dense
                    class="mb-5"
                  ></v-text-field>
                  <v-select
                    :items="listGrade"
                    label="Grade"
                    item-text="name"
                    item-value="value"
                    outlined
                    dense
                    hide-details
                    class="mb-5"
                  ></v-select>
                  <v-btn block color="#F1363D" dark rounded
                    >Cari kendaraan</v-btn
                  >
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </div>
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Motor Populer</p>
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item
            v-for="(product, i) of listMotor"
            :key="product.name + i"
          >
            <v-card
              width="172"
              height="275"
              rounded="lg"
              style="overflow: hidden"
              class="ma-3 mt-0"
              :href="'/product/' + product.slug"
            >
              <v-card-text class="box pa-0" style="overflow: hidden">
                <v-img :src="product.src" aspect-ratio="1"></v-img>
                <p class="product-name text-caption mt-1 mx-2 mb-0">
                  {{ product.name }}
                </p>
                <p class="text-body-2 mx-2 mb-2 mt-1 red--text">
                  {{ product.price }}
                </p>
                <div class="d-flex mx-2">
                  <v-icon size="14px">mdi-map-marker</v-icon>
                  <p class="text-caption font-weight-light mt-auto mb-0 ml-2">
                    {{ product.location }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </div>
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Sparepart</p>
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item
            v-for="(product, i) of listSparepart"
            :key="product.name + i"
          >
            <a>
              <v-card
                width="172"
                height="275"
                rounded="lg"
                style="overflow: hidden"
                class="ma-3"
              >
                <v-card-text class="box pa-0" style="overflow: hidden">
                  <v-img :src="product.src" aspect-ratio="1"></v-img>
                  <p class="product-name text-caption mt-1 mx-2 mb-0">
                    {{ product.name }}
                  </p>
                  <p class="text-body-2 mx-2 mb-2 mt-1 red--text">
                    {{ product.price }}
                  </p>
                  <div class="d-flex mx-2">
                    <v-icon size="14px">mdi-map-marker</v-icon>
                    <p class="text-caption font-weight-light mt-auto mb-0 ml-2">
                      {{ product.location }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </a>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </div>
    <div class="shadow-box my-5">
      <v-container class="py-5">
        <p class="text-h6">Berita Otomotif</p>
        <v-chip
          v-for="article in articles"
          :key="article.id"
          :color="selectedArticle.id == article.id ? 'light' : ''"
          @click="setArticle(article)"
          :outlined="selectedArticle.id != article.id"
          class="text-center mr-2"
        >
          <p
            :class="
              selectedArticle.id != article.id ? 'black--text' : 'primary--text'
            "
            style="min-width: 100px"
            class="text-overline mb-0 text-center mx-auto"
          >
            {{ article.name }}
          </p>
        </v-chip>
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item
            v-for="(article, i) of listNewarticle"
            :key="article.title + i"
          >
            <a>
              <v-card
                width="327"
                height="300"
                rounded="lg"
                style="overflow: hidden"
                class="ma-3"
              >
                <v-card-text class="box pa-0" style="overflow: hidden">
                  <v-img :src="article.src" aspect-ratio="2"></v-img>
                  <p class="text-body-2 font-weight-bold mt-1 mx-2 mb-0">
                    {{ article.title }}
                  </p>
                  <p class="text-caption mx-2 mb-2 mt-1">
                    {{ article.body }}
                  </p>
                </v-card-text>
              </v-card>
            </a>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </div>
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
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/sparepart-body-vario.jpg"),
        },
      ],
      listMotor: [
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 RR Old Tahun 2011",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 20.000.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/motor2.jpeg"),
        },
        {
          name: "For Sale Ninja 150 SS Hijau",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000.000",
          location: "Bandung",
          src: require("~/assets/images/staticImg/motor3.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/motor4.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/motor2.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
          src: require("~/assets/images/staticImg/motor4.jpeg"),
        },
        {
          name: "Sparepart body Vario 125 CC 2019",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 50.000",
          location: "Depok",
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
.product-name {
  height: 40px;
}
.shadow-box {
  box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -webkit-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -moz-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  margin-bottom: 16px;
  position: relative;
}
.merekSearch {
  margin-top: 360px;
}
.shadowSearch {
  box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -webkit-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -moz-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  margin-bottom: 16px;
  position: relative;
  border-radius: 30px;
}
</style>
