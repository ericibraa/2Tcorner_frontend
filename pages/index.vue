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
    <v-row class="pb-5">
      <v-col cols="12" lg="8">
        <v-card elevation="2">
          <v-card-text class="pb-0">
            <p class="text-body-1 mb-0">Merk kendaraan</p>
          </v-card-text>
          <v-card-text class="d-flex pt-2 pb-5">
            <div
              class="merk-button mr-3"
              v-for="merk of merkKendaraan"
              :key="merk.value"
            >
              <v-img :src="merk.src" contain class="mx-1 my-5"></v-img>
            </div>
          </v-card-text>
          <v-card-text class="pb-0">
            <p class="text-body-1 mb-0">Tipe motor yang ingin dicari</p>
          </v-card-text>
          <v-card-text class="d-flex flex-wrap pt-2">
            <div
              class="tipe-kendaraan d-flex"
              v-for="tipe of tipeKendaraan"
              :key="tipe.value"
            >
              <v-img
                :src="
                  tipe.src
                    ? tipe.src
                    : require('~/assets/images/staticImg/x-image.png')
                "
                max-height="40"
                max-width="40"
                contain
                class="my-auto ml-2 mr-4"
              ></v-img>
              <p class="my-auto mr-2">{{ tipe.name }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card elevation="2">
          <v-card-text>
            <v-text-field
              label="Cari kendaraan"
              class="mb-5"
              outlined
              hide-details
              dense
            ></v-text-field>
            <div class="d-flex mb-5">
              <v-text-field
                label="Merk"
                class="mr-1"
                outlined
                hide-details
                dense
              ></v-text-field>
              <v-text-field
                label="Tipe"
                class="ml-1"
                outlined
                hide-details
                dense
              ></v-text-field>
            </div>
            <v-row class="">
              <v-col class="pr-1">
                <v-select
                  :items="listMesin"
                  label="Mesin"
                  item-text="name"
                  item-value="value"
                  outlined
                  dense
                  hide-details
                ></v-select>
              </v-col>
              <v-col class="pl-1">
                <v-text-field
                  label="CC"
                  outlined
                  hide-details
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex my-5">
              <v-text-field
                label="Tahun"
                class="mr-1"
                outlined
                hide-details
                dense
              ></v-text-field>
              <v-text-field
                label="Jumlah KM"
                class="ml-1"
                outlined
                hide-details
                dense
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-select
                :items="listGrade"
                label="Grade"
                item-text="name"
                item-value="value"
                outlined
                dense
                hide-details
              ></v-select>
            </div>
          </v-card-text>
          <v-card-text>
            <v-btn block color="#F1363D" dark rounded>Cari kendaraan</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card elevation="2">
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Rekomendasi Motor</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="product of listMotor" :key="product.name">
              <v-card
                width="172"
                height="275"
                rounded="lg"
                style="overflow: hidden"
                class="ma-3"
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
      </v-card-text>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Rekomendasi Sparepart</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="product of listSparepart" :key="product.name">
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
      </v-card-text>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Rekomendasi Merchandise</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="product of listMerchandise" :key="product.name">
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
      </v-card-text>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Rekomendasi Accessories</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="product of listAccessories" :key="product.name">
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
      </v-card-text>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Artikel Terbaru</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="article of listNewarticle" :key="article.title">
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
      </v-card-text>
      <v-card-text class="pb-5">
        <p class="text-body-1 mb-0">Artikel Trending</p>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="article of listNewarticle" :key="article.title">
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
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      merkKendaraan: [
        {
          value: "yamaha",
          src: require("~/assets/images/brandLogo/yamaha.png"),
          href: "",
        },
        {
          value: "honda",
          src: require("~/assets/images/brandLogo/yamaha.png"),
          href: "",
        },
        {
          value: "kawasaki",
          src: require("~/assets/images/brandLogo/yamaha.png"),
          href: "",
        },
        {
          value: "suzuki",
          src: require("~/assets/images/brandLogo/yamaha.png"),
          href: "",
        },
      ],
      tipeKendaraan: [
        {
          value: "sport",
          name: "Sport",
          src: "",
          href: "",
        },
        {
          value: "matic",
          name: "Matic",
          src: require("~/assets/images/logo/icon-motor.png"),
          href: "",
        },
        {
          value: "bebek",
          name: "Bebek",
          src: "",
          href: "",
        },
        {
          value: "touring",
          name: "Touring",
          src: require("~/assets/images/logo/icon-touring.png"),
          href: "",
        },
        {
          value: "moge",
          name: "Moge",
          src: "",
          href: "",
        },
        {
          value: "scooter",
          name: "Scooter",
          src: require("~/assets/images/logo/icon-scooter.png"),
          href: "",
        },
        {
          value: "moped",
          name: "Moped",
          src: "",
          href: "",
        },
        {
          value: "trail",
          name: "Trail",
          src: "",
          href: "",
        },
        {
          value: "listrik",
          name: "Listrik",
          src: "",
          href: "",
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
      listMerchandise: [
        {
          name: "Baju 2TCorner",
          price: "Rp 120.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch1.jpg"),
        },
        {
          name: "Topi 2TCorner",
          price: "Rp 199.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch2.jpg"),
        },
        {
          name: "Tote Bag 2TCorner",
          price: "Rp 29.000",
          location: "Bandung",
          src: require("~/assets/images/staticImg/merch3.jpeg"),
        },
        {
          name: "Baju 2TCorner",
          price: "Rp 120.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch1.jpg"),
        },
        {
          name: "Tote Bag 2TCorner",
          price: "Rp 29.000",
          location: "Bandung",
          src: require("~/assets/images/staticImg/merch3.jpeg"),
        },
        {
          name: "Topi 2TCorner",
          price: "Rp 199.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch2.jpg"),
        },
        {
          name: "Topi 2TCorner",
          price: "Rp 199.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch2.jpg"),
        },
        {
          name: "Baju 2TCorner",
          price: "Rp 120.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/merch1.jpg"),
        },
      ],
      listAccessories: [
        {
          name: "Bracket spion bracket HP",
          price: "Rp 25.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access2.jpg"),
        },
        {
          name: "Motorcycle Handle Bar Ends Plug Grips",
          price: "Rp 40.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access1.jpg"),
        },
        {
          name: "Bracket spion bracket HP",
          price: "Rp 25.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access2.jpg"),
        },
        {
          name: "Motorcycle Handle Bar Ends Plug Grips",
          price: "Rp 40.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access1.jpg"),
        },
        {
          name: "Bracket spion bracket HP",
          price: "Rp 25.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access2.jpg"),
        },
        {
          name: "Motorcycle Handle Bar Ends Plug Grips",
          price: "Rp 40.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access1.jpg"),
        },
        {
          name: "Bracket spion bracket HP",
          price: "Rp 25.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access2.jpg"),
        },
        {
          name: "Motorcycle Handle Bar Ends Plug Grips",
          price: "Rp 40.000",
          location: "Jakarta",
          src: require("~/assets/images/staticImg/access1.jpg"),
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
    };
  },
};
</script>

<style scoped>
.carousel {
  border-radius: 10px;
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
</style>
