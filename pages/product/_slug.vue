<template>
  <v-container class="pt-0">
    <v-breadcrumbs :items="items" class="pt-0">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col md="8">
        <div class="box text-center">
          <v-img
            :src="require('~/assets/images/staticImg/motor1.jpeg')"
            max-height="400"
            contain
            class="mb-3"
          ></v-img>
        </div>
        <div>
          <div>
            <v-sheet class="mx-auto">
              <v-slide-group
                v-model="selectedImage"
                class="pa-0"
                center-active
                show-arrows
              >
                <v-slide-item v-for="(slide, index) in sliderImg" :key="index"
                  ><v-img
                    class="mb-0 mr-3 agile__slide__smallest"
                    v-bind:class="[
                      index == selectedImage ? 'agile__slide--active' : '',
                    ]"
                    :src="slide"
                    contain
                    @click="chooseimage(index)"
                    max-width="50px"
                    max-height="50px"
                  ></v-img>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </div>
        <div class="mt-10">
          <p class="text-body-1 mb-2">Detail Produk</p>
          <p class="text-body-2">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
        </div>
      </v-col>
      <v-col md="4">
        <v-card rounded="md" style="position: sticky; top: 85px">
          <v-card-text>
            <p class="text-body-2 font-weight-bold mb-2">{{ product.name }}</p>
            <div class="d-flex">
              <v-icon size="14px" class="my-auto mr-2">mdi-map-marker</v-icon>
              <p class="text-caption grey--text mb-0">
                Kota {{ product.location }}
              </p>
            </div>
            <p class="text-body-1 mb-0 mt-3">{{ product.price }}</p>
            <v-divider class="my-3"></v-divider>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-img
                  :src="require('~/assets/images/staticImg/x-image.png')"
                  max-height="30"
                  max-width="30"
                  contain
                  class="my-auto mr-2"
                ></v-img>
                <p class="my-auto grey--text text-body-2">Tahun</p>
              </div>
              <p class="my-auto text-body-2">2023</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-img
                  :src="require('~/assets/images/staticImg/x-image.png')"
                  max-height="30"
                  max-width="30"
                  contain
                  class="my-auto mr-2"
                ></v-img>
                <p class="my-auto grey--text text-body-2">Kilometer</p>
              </div>
              <p class="my-auto text-body-2">25.467km</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-img
                  :src="require('~/assets/images/staticImg/x-image.png')"
                  max-height="30"
                  max-width="30"
                  contain
                  class="my-auto mr-2"
                ></v-img>
                <p class="my-auto grey--text text-body-2">Transmisi</p>
              </div>
              <p class="my-auto text-body-2">Otomatis</p>
            </div>
            <div class="d-flex justify-space-between pb-3">
              <div class="d-flex">
                <v-img
                  :src="require('~/assets/images/staticImg/x-image.png')"
                  max-height="30"
                  max-width="30"
                  contain
                  class="my-auto mr-2"
                ></v-img>
                <p class="my-auto grey--text text-body-2">Kapasitas Mesin</p>
              </div>
              <p class="my-auto text-body-2">155 CC</p>
            </div>
            <v-divider class="my-3"></v-divider>
            <p align="center" class="text-body-2">
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
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Motor Sport",
          disabled: false,
          href: "",
        },
        {
          text: "For Sale Ninja 150 R Convert modif convert SS",
          disabled: true,
        },
      ],
      product: {
        name: "For Sale Ninja 150 R Convert modif convert SS",
        slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
        price: "Rp 29.500.000",
        location: "Tangerang",
        src: require("~/assets/images/staticImg/motor1.jpeg"),
      },
      sliderImg: [
        {
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
      ],
    };
  },
  methods: {
    chooseimage(indexs) {
      this.selectedImage = indexs;
    },
  },
};
</script>