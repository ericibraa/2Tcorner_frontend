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
      <v-col cols="12" lg="7">
        <v-card elevation="5">
          <v-card-text class="pb-0">
            <p class="text-body-1 mb-0">Merk kendaraan</p>
          </v-card-text>
          <v-card-text class="d-flex">
            <div
              class="merk-button mr-3"
              v-for="merk of merkKendaraan"
              :key="merk.value"
            >
              <v-img :src="merk.src" contain class="mx-1 my-5"></v-img>
            </div>
          </v-card-text>
          <v-card-text class="pb-0">
            <p class="text-body-1 mb-0">Kategori motor yang ingin dicari</p>
          </v-card-text>
          <v-card-text class="d-flex">
            <v-row>
              <v-col v-for="tipe of tipeKendaraan" :key="tipe.value">
                <div class="tipe-kendaraan">
                  <v-img></v-img>
                  <p>{{ tipe.name }}</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card elevation="5">
          <v-card-title>
            <p class="body-1 mb-0">Merk Kendaraan</p>
          </v-card-title>
          <v-card-text class="d-flex">
            <div
              class="merk-button mr-3"
              v-for="merk of merkKendaraan"
              :key="merk.value"
            >
              <v-img :src="merk.src" contain class="mx-1 my-5"></v-img>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
          src: "",
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
          src: "",
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
          src: "",
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
  background-color: rgb(224, 224, 224);
}
.tipe-kendaraan {
  border: solid 1px darkgray !important;
  width: 160px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
