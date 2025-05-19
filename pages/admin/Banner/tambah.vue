<template>
    <v-container>
      <div>
        <v-card>
          <v-card-title style="background: #eceff1">
            <p>Tambah Banner</p>
          </v-card-title>
          <v-card-text class="pa-5">
            <v-row>
              <v-col cols="12">
                <div class="d-flex">
                  <div class="image-card" v-if="Object.keys(medias).length > 0">
                    <v-img :src="medias.image" class="mr-3" max-width="600"></v-img>
                    <v-btn class="delete-btn" icon color="red" @click="deleteImg(medias._id)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                  <v-card class="upload-card" @click="dialog = true" v-if="Object.keys(medias).length < 1">
                    <v-card-text class="d-flex flex-column align-center justify-center">
                      <v-icon size="48">mdi-image-plus</v-icon>
                      <p class="text-center mb-0">Tambah Gambar</p>
                    </v-card-text>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="text-end">
            <v-btn class="mr-3" to="/admin/banner">Kembali</v-btn>
            <v-btn color="red" dark @click="submitBanner()">Simpan</v-btn>
          </v-card-text>
        </v-card>
      </div>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="headline">Upload Image</v-card-title>
  
          <v-card-text>
            <input label="File input" filled accept="image/*" prepend-icon="mdi-camera" type="file" ref="fileInput"
              @change="changeFile" />
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="green" text @click="saveMedia()" :disabled="!imageFile">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  <script>
  export default {
    layout: "admin",
    middleware: "auth",
    data() {
      return {
        banner: "",
        dialog: false,
        imageFile: false,
        medias: {},
      };
    },
    methods: {
      changeFile() {
        let file = this.$refs.fileInput.files[0];
        this.imageFile = file
      },
      async saveMedia() {
        const formData = new FormData();
        if (this.imageFile) {
          formData.append("file", this.imageFile)
        }
        try {
          let data = await this.$axios.$post(this.$config.api + "/upload", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          this.medias = data
          console.log(this.medias);
  
          this.dialog = false
        } catch (e) {
          console.log(e)
        }
      },
      async deleteImg(id) {
        try {
          await this.$axios.$delete(this.$config.api + `/upload/${id}`);
          if (this.medias._id === id) {
            this.medias = {};
          }
          console.log("Image deleted successfully");
        } catch (error) {
          console.error("Failed to delete image:", error);
        }
      },
      async submitBanner() {
        try {
          await this.$axios.$post(this.$config.api + "/banner/", {
            image: this.medias.image,
          });
          this.$router.push({ path: "/admin/banner" });
        } catch (e) {
          console.log(e);
        }
      },
      addImage() {
        this.imgTemp.push(this.imgMerk)
        this.imgMerk = ''
      }
    },
  };
  </script>
  <style scoped>
  .upload-card {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border: 2px dashed #ccc;
    background-color: #f9f9f9;
    transition: 0.3s;
  }
  
  .upload-card:hover {
    background-color: #e0e0e0;
  }
  
  .image-card {
    position: relative;
  }
  
  .delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: white !important;
    border-radius: 50%;
  }
  </style>