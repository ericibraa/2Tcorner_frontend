<template>
  <v-container>
    <v-row class="mt-3">
      <v-col md="3">
        <v-card elevation="1">
          <v-card-text>
            <div class="mb-3">
              <p class="text-body-1 font-weight-bold mb-1">Lokasi</p>
              <v-checkbox dense hide-details>
                <template v-slot:label>
                  <p class="text-body-2 mb-0">Jakarta Selatan</p>
                </template>
              </v-checkbox>
              <v-checkbox dense hide-details>
                <template v-slot:label>
                  <p class="text-body-2 mb-0">Depok</p>
                </template>
              </v-checkbox>
              <v-checkbox dense hide-details>
                <template v-slot:label>
                  <p class="text-body-2 mb-0">Tangerang</p>
                </template>
              </v-checkbox>
            </div>
            <div>
                <p class="text-body-1 font-weight-bold mb-1">Merk</p>
                <v-checkbox dense hide-details>
                    <template v-slot:label>
                        <p class="text-body-2 mb-0">Yamaha</p>
                    </template>
                </v-checkbox>
                <v-checkbox dense hide-details>
                    <template v-slot:label>
                        <p class="text-body-2 mb-0">Honda</p>
                    </template>
                </v-checkbox>
                <v-checkbox dense hide-details>
                    <template v-slot:label>
                        <p class="text-body-2 mb-0">Kawasaki</p>
                    </template>
                </v-checkbox>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="9">
        <v-row>
          <v-col
            v-for="product of listProduct"
            :key="product.name"
            lg="4"
            md="4"
            sm="6"
            cols="6"
            class="pa-1 justufy-center"
          >
            <v-card class="ma-2" height="'395px" elevation="7" rounded>
              <v-card-text class="pa-0">
                <v-img :src="product.src" aspect-ratio="1"></v-img>
                <div class="mx-3 mt-2">
                  <p class="text-body-2 mb-1">{{ product.name }}</p>
                  <p class="text-h6 red--text">{{ product.price }}</p>
                  <div class="d-flex">
                    <v-icon size="14px" class="my-auto mr-2"
                      >mdi-map-marker</v-icon
                    >
                    <p class="text-caption mb-0">Kota {{ product.location }}</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      listProduct: [
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
        {
          name: "For Sale Ninja 150 R Convert modif convert SS",
          slug: "for-sale-ninja-150-r-convert-modif-convert-ss",
          price: "Rp 29.500.000",
          location: "Tangerang",
          src: require("~/assets/images/staticImg/motor1.jpeg"),
        },
      ],
    };
  },
};
</script>