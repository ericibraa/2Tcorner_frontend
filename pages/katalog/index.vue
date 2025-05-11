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
          <v-col v-for="product of products" :key="product.name" lg="4" md="4" sm="6" class="pa-0 justufy-center">
            <v-card :height="$vuetify.breakpoint.smAndDown ? 335 : 420" rounded="xxl" class="shadow-box-card ma-2"
              :href="'/product/' + product._id">
              <v-img :src="product.images_details[0].image" max-height="250" aspect-ratio="1" contain></v-img>
              <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : ''">
                <p
                  :class="$vuetify.breakpoint.smAndDown ? 'product-name text-body-2 font-weight-medium mb-1' : 'product-name text-body-1 font-weight-medium mb-2'">
                  {{ product.name }}</p>
                <p
                  :class="$vuetify.breakpoint.smAndDown ? 'text-body-1 font-weight-bold primary--text mb-2' : 'text-h6 font-weight-bold primary--text mb-3'">
                  {{ product.price.current | currency }}</p>
                <div class="d-flex align-center grey--text text-body-2 mb-3">
                  <v-icon class="mr-1" :size="$vuetify.breakpoint.smAndDown ? 12 : 18">mdi-map-marker</v-icon>
                  <p :class="$vuetify.breakpoint.smAndDown ? 'mb-0 text-caption' : 'text-body-2 mb-0'">{{
                    product.location_details.kota
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
      products: [],
      search: "",
      machine: "",
      cc: "",
      years: "",
      grade: "",
      type: ""
    }
  },
  methods: {
    async getProducts() {
      try {
        let product = await this.$axios.$get(this.$config.api + "/products",
          {
            params: {
              limit: 24,
              search: this.search,
              machine: this.machine,
              cc: this.cc,
              years: this.years,
              grade: this.grade,
              type: this.type
            }
          }
        )
        this.products = product.data
      } catch (e) {
        console.log(e);

      }
    }
  },
  async fetch() {
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
    }
    if (this.$route.query.machine) {
      this.machine = this.$route.query.machine
    }
    if (this.$route.query.cc) {
      this.cc = this.$route.query.cc
    }
    if (this.$route.query.years) {
      this.years = this.$route.query.years
    }
    if (this.$route.query.grade) {
      this.grade = this.$route.query.grade
    }
    if (this.$route.query.type) {
      this.type = this.$route.query.type
    }

    await this.getProducts()
  }
};
</script>
<style>
shadow-box-card {
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