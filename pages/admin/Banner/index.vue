<template>
    <v-container>
      <div>
        <v-card>
          <v-card-title style="background: #eceff1">
            <v-btn color="light-blue" dark :to="'/admin/banner/tambah'">Tambah Banner</v-btn>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="pa-5">
            <v-data-table :headers="headers" :items="banners" :items-per-page="5">
              <template  v-slot:item.image="{item}">
                <v-img :src="item.image" max-width="600" class="ma-2"></v-img>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon large @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Konfirmasi</v-card-title>
            <v-card-text><p class="mb-0 text-body-1">Kamu yakin ingin menghapus banner ini?</p></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="!dialogDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(deleteId)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </template>
  <script>
  export default {
    layout: "admin",
    middleware: "auth",
    data() {
      return {
        dialogupload: false,
        loading: false,
        headers: [
          { text: "Banner", value: "image", sortable: false },
          { text: "Action", value: "actions" },
        ],
        banners: [],
        dialogDelete: false,
        deleteId: ''
      };
    },
    methods: {
      deleteItem(item) {
        this.dialogDelete = true,
          this.deleteId = item._id
      },
      async deleteItemConfirm(id) {
        try {
          await this.$axios.$delete(this.$config.api + "/banner/" + id)
          this.$nuxt.refresh();
          this.dialogDelete = false
        } catch (e) {
          console.log(e);
  
        }
      }
    },
    async fetch() {
      try {
        var banner = await this.$axios.$get(this.$config.api + "/banner");
        this.banners = banner.data
        console.log(this.banners);
  
      } catch (e) {
        console.log(e);
  
      }
  
    },
  };
  </script>