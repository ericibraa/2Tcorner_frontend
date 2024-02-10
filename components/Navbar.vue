<template>
  <v-app-bar color="white" app>
    <v-toolbar-title class="pr-10 pl-7" v-if="$vuetify.breakpoint.smAndUp">
      <v-img
        :src="require('~/assets/images/logo/2tcorner 1.png')"
        contain
        max-width="100"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-card flat href="/about_us" class="text-center" height="60">
      <v-card-text class="text-center">
        <p class="btnNav">About us</p>
      </v-card-text>
    </v-card>
    <v-card flat href="/contact_us" class="text-center" height="60">
      <v-card-text class="text-center">
        <p class="btnNav">Contact us</p>
      </v-card-text>
    </v-card>
    <v-card flat href="/tnc" class="text-center" height="60">
      <v-card-text class="text-center">
        <p class="btnNav">Terms and conditions</p>
      </v-card-text>
    </v-card>
    <v-card flat href="/how_to_buy" class="text-center" height="60">
      <v-card-text class="text-center">
        <p class="btnNav">How to buy</p>
      </v-card-text>
    </v-card>
  </v-app-bar>
</template>
<style>
.btnNav:hover {
  color: #F1363D;
}
</style>