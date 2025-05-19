<template>
    <v-container>
        <div>
            <v-card>
                <v-card-title style="background: #eceff1">
                    <p>Edit Tipe Kendaraan</p>
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Tipe Kendaraan" outlined hide-details v-model="type"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex">
                                <div class="image-card" v-if="media != ''">
                                    <v-img :src="media" max-width="150" class="mr-3"></v-img>
                                    <v-btn class="delete-btn" icon color="red" @click="deleteImg(medias._id)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <v-card class="upload-card" @click="dialog = true" v-if="media == ''">
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
                    <v-btn class="mr-3" to="/admin/type">Kembali</v-btn>
                    <v-btn color="red" dark @click="submitType()">Simpan</v-btn>
                </v-card-text>
            </v-card>
        </div>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title class="headline">Upload Image</v-card-title>

                <v-card-text>
                    <input label="File input" filled accept="image/*" prepend-icon="mdi-camera" type="file"
                        ref="fileInput" @change="changeFile" />
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
            type: "",
            dialog: false,
            imageFile: false,
            medias: {},
            media: ""
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
                this.media = this.medias.image

                this.dialog = false
            } catch (e) {
                console.log(e)
            }
        },
        async deleteImg(id) {
            try {
                this.media = ""
                console.log("Image deleted successfully");
            } catch (error) {
                console.error("Failed to delete image:", error);
            }
        },
        async submitType() {
            try {
                await this.$axios.$put(this.$config.api + "/type/" + this.$route.params.id, {
                    name: this.type,
                    image: this.media
                });
                this.$router.push({ path: "/admin/type" });
            } catch (e) {
                console.log(e);
            }
        },
        addImage() {
            this.imgTemp.push(this.typeImg)
            this.typeImg = ""
        }
    },
    async fetch() {
        try {
            var typeD = await this.$axios.$get(this.$config.api + "/type/" + this.$route.params.id)
            this.detailType = typeD
            this.type = this.detailType.name
            this.media = this.detailType.image
        } catch (e) {
            console.log(e);

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
    width: 150px;
    height: 150px;
}

.delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: white !important;
    border-radius: 50%;
}
</style>