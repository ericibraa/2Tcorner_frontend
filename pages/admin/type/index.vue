<template>
    <v-container>
      <div>
        <v-card>
          <v-card-title style="background: #eceff1">
            <v-btn color="light-blue" dark :to="'/admin/type/new'">Tambah Type</v-btn>
            <v-spacer></v-spacer>
            <v-flex md4 class="ml-5">
              <v-text-field append-icon="mdi-magnify" label="Search"></v-text-field>
            </v-flex>
          </v-card-title>
          <v-card-text class="pa-5">
            <v-data-table :headers="headers" :items="types" :items-per-page="5">
              <template v-slot:item.image="{ item }">
                <v-img :src="item.image" max-width="100"></v-img>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                  Reset
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
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
        search: "",
        loading: false,
        headers: [
          {
            text: "Type",
            align: "start",
            sortable: false,
            value: "name",
          },
          {
            text: "Image",
            value: "image",
          },
          { text: "Action", value: "actions" },
        ],
        types: [],
        dialogDelete: false,
        deleteId: ''
      };
    },
    methods: {
      editItem(item) {
        this.$router.push("/admin/type/" + item._id)
      },
      deleteItem(item) {
        this.dialogDelete = true,
          this.deleteId = item._id
      },
      async deleteItemConfirm(id) {
        try {
          await this.$axios.$delete(this.$config.api + "/type/" + id)
          this.$nuxt.refresh();
          this.dialogDelete = false
        } catch (e) {
          console.log(e);
  
        }
      }
    },
    async fetch() {
      try {
        var type = await this.$axios.$get(this.$config.api + "/type");
        this.types = type.data
        console.log(this.types);
  
      } catch (e) {
        console.log(e);
  
      }
  
    },
  };
  </script>