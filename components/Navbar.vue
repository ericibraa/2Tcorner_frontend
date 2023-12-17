<template>
  <v-app-bar color="white" app>
    <v-toolbar-title class="pr-10 pl-7" v-if="$vuetify.breakpoint.smAndUp">
      <v-img
        :src="require('~/assets/images/logo/2tcorner 1.png')"
        contain
        max-width="100"
      />
    </v-toolbar-title>
  </v-app-bar>
</template>