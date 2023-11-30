<template>
  <v-app-bar color="white" app>
    <div class="d-flex">
      <v-img
        :src="require('~/assets/images/logo/2tcorner.jpg')"
        height="50px"
        contain
        width="50px"
        position="top left"
      />
    </div>

    <v-spacer></v-spacer>
    <v-app-bar-nav-icon class="hidden-md-and-up" />
  </v-app-bar>
</template>