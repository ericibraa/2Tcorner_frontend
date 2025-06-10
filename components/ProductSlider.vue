<template>
    <v-container class="py-5" v-if="filteredProducts.length">
      <p class="text-h6">{{ title }}</p>
      <v-slide-group :show-arrows="!$vuetify.breakpoint.smAndDown">
        <v-slide-item v-for="product in filteredProducts" :key="product._id">
          <v-card
            :width="$vuetify.breakpoint.smAndDown ? 175 : 320"
            :height="$vuetify.breakpoint.smAndDown ? 335 : 420"
            rounded="xxl"
            class="shadow-box-card ma-4"
            :href="'/product/' + (product.slug || product._id)"
          >
            <v-img :src="product.images_details[0]?.image" max-height="250" aspect-ratio="1"></v-img>
            <v-card-text :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'pa-4'">
              <p
                :class="$vuetify.breakpoint.smAndDown
                  ? 'product-name text-body-2 font-weight-medium mb-1'
                  : 'product-name text-body-1 font-weight-medium mb-2'"
              >
                {{ product.name }}
              </p>
  
              <!-- Price -->
              <div v-if="product.price?.current < product.price?.normal" class="d-flex mb-3">
                <p
                  :class="$vuetify.breakpoint.smAndDown
                    ? 'text-body-1 font-weight-bold primary--text mb-2'
                    : 'text-h6 font-weight-bold primary--text mb-0 mr-2'"
                >
                  {{ product.price.current | currency }}
                </p>
                <p
                  :class="$vuetify.breakpoint.smAndDown
                    ? 'text-caption grey--text mb-2'
                    : 'text-body-1 grey--text my-auto text-decoration-line-through font-weight-thin'"
                >
                  {{ product.price.normal | currency }}
                </p>
              </div>
              <div v-else>
                <p
                  :class="$vuetify.breakpoint.smAndDown
                    ? 'text-body-1 font-weight-bold primary--text mb-2'
                    : 'text-h6 font-weight-bold primary--text mb-3'"
                >
                  {{ product.price?.current | currency }}
                </p>
              </div>
  
              <!-- Location -->
              <div class="d-flex align-center grey--text text-body-2 mb-3">
                <v-icon class="mr-1" :size="$vuetify.breakpoint.smAndDown ? 12 : 18">mdi-map-marker</v-icon>
                <p :class="$vuetify.breakpoint.smAndDown ? 'mb-0 text-caption' : 'text-body-2 mb-0'">
                  {{ product.location_details?.kota }}
                </p>
              </div>
  
              <!-- Chips -->
              <div class="d-flex flex-wrap">
                <v-chip outlined class="mr-1 mb-2" small v-if="product.merk_details && product.merk_details?.name">
                  <p class="text-caption font-weight-medium my-auto">{{ product.merk_details?.name }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small v-if="product.year">
                  <v-icon size="16" class="mr-1 grey--text">mdi-calendar-month</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.year }}</p>
                </v-chip>
                <v-chip outlined class="mr-1 mb-2" small v-if="product.km_of_use">
                  <v-icon size="16" class="mr-1 grey--text">mdi-speedometer</v-icon>
                  <p class="text-caption font-weight-medium my-auto">{{ product.km_of_use }}</p>
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "ProductSlider",
    props: {
      title: String,
      variant: String,
      products: {
        type: Array,
        required: true,
      },
    },
    computed: {
      filteredProducts() {
        return this.products.filter(p => p.variant === this.variant);
      },
    },
  };
  </script>
  