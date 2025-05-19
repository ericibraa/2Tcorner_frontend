<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Master Data</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, to], i) in admins" :key="i" :to="to">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <a href="/admin/dashboard">
          <v-img
            :src="require('~/assets/images/logo/2tcorner 1.png')"
            width="100"
          ></v-img>
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon href="/admin/login">
        <v-avatar
          ><v-img :src="require('~/assets/images/logo/avatar.jpg')"></v-img
        ></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <p class="text-caption my-auto text-center">
        Made with love &copy; {{ new Date().getFullYear() }}
      </p>
    </v-footer>
  </v-app>
</template>
  
  <script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
      ],
      admins: [
        ["Produk", "/admin/list-product"],
        ["Merek", "/admin/merek"],
        ["Tipe", "/admin/type"],
        ["Lokasi", "/admin/location"],
        ["Article", "/admin/articles"],
        ["Main Banner", "/admin/banner"],
      ],
      miniVariant: false,
    };
  },
};
</script>
  