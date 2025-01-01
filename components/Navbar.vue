<template>
  <div>
    <v-app-bar color="white" app flat elevation="1" class="px-15">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <a href="/">
          <v-img
            :src="require('~/assets/images/logo/2tcorner 1.png')"
            contain
            max-width="100"
          />
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex">
        <div v-for="button of Navbutton" :key="button.name" class="mr-5">
          <a :href="button.href">
            <p class="text-body-1  my-auto">{{ button.name }}</p>
          </a>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <a href="/">
                <p class="text-body-1 font-weight-bold my-auto">2Tcorner</p></a
              ></v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="button of Navbutton" :key="button.name">
            <v-list-item-title>
              <a :href="button.href">
                <p class="text-body-2 my-auto">
                  {{ button.name }}
                </p>
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      Navbutton: [
        {
          name: "About Us",
          href: "/about_us",
        },
        // {
        //   name: "Contact Us",
        //   href: "/contact_us",
        // },
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
a {
  text-decoration: none;
}

a:link,
a:visited {
  color: #424242;
}

a:hover {
  color: red;
}
</style>