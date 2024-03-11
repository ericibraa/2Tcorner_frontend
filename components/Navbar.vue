<template>
  <v-app-bar color="white" app>
    <v-toolbar-title class="pr-10 pl-7" v-if="$vuetify.breakpoint.smAndUp">
      <a href="/">
        <v-img
          :src="require('~/assets/images/logo/2tcorner 1.png')"
          contain
          max-width="100"
        />
      </a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-card
      v-for="button of Navbutton"
      :key="button.name"
      flat
      :href="button.href"
      class="text-center"
      height="60"
    >
      <v-card-text class="text-center">
        <p class="btnNav">{{ button.name }}</p>
      </v-card-text>
    </v-card>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      Navbutton: [
        {
          name: "About Us",
          href: "/about_us",
        },
        {
          name: "Contact Us",
          href: "/contact_us",
        },
        {
          name: "Terms and Conditions",
          href: "/tnc",
        },
        {
          name: "How To Buy",
          href: "/how_to_buy",
        },
        {
          name: "Benefits",
          href: "/benefits",
        },
      ],
    };
  },
};
</script>
<style>
.btnNav:hover {
  color: #f1363d;
}
</style>