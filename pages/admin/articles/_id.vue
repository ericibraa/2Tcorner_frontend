<template>
    <v-container>
        <div>
            <v-card>
                <v-card-title style="background: #eceff1">
                    <p>Tambah Article</p>
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Title" outlined hide-details
                                v-model="detailArticle.title"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Short Description" outlined hide-details
                                v-model="detailArticle.short_desc"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="my-auto">
                            <client-only>
                                <p class="caption grey--text text--darken-2">Description</p>
                                <VueEditor id="descEditor" v-model="detailArticle.description"
                                    @image-added="uploadImage" />
                            </client-only>
                        </v-col>
                        <v-col cols="12" class="my-auto">
                            <v-text-field label="Author" outlined hide-details
                                v-model="detailArticle.author"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex">
                                <div class="image-card" v-for="img in medias" :key="img">
                                    <v-img :src="img" max-width="150" class="mr-3"></v-img>
                                    <v-btn class="delete-btn" icon color="red" @click="deleteImg(img)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <v-card class="upload-card" @click="dialog = true">
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
                    <v-btn class="mr-3" to="/admin/articles">Kembali</v-btn>
                    <v-btn class="mr-3" @click="submitArticle(detailArticle._id, 1)">Draft</v-btn>
                    <v-btn color="red" dark @click="submitArticle(detailArticle._id, 10)">Simpan & Tampilkan</v-btn>
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
            id: "",
            title: "",
            short_desc: "",
            description: "",
            author: "",
            image: "",
            imgTemp: [],
            media: {},
            medias: [],
            detailArticle: {},
            imageFile: false,
            dialog: false
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
                this.medias.push(data.image)

                this.dialog = false
            } catch (e) {
                console.log(e)
            }
        },
        async deleteImg(id) {
            try {
                // await this.$axios.$delete(this.$config.api + `/upload/${id}`);
                // if (this.medias._id === id) {
                //     this.medias = {};
                // }
                this.medias = this.medias.filter((img) => img !== id);
                console.log("Image deleted successfully");
            } catch (error) {
                console.error("Failed to delete image:", error);
            }
        },
        async uploadImage(file, insertImage) {
            const formData = new FormData();
            try {
                let data = await this.$axios.$post(this.$config.api + "/upload", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.media = data

                insertImage(this.media.image);
            } catch (e) {
                console.log(e)
            }
        },
        async submitArticle(id, status) {
            try {
                await this.$axios.$put(this.$config.api + '/articles/' + id, {
                    title: this.detailArticle.title,
                    short_desc: this.detailArticle.short_desc,
                    description: this.detailArticle.description,
                    author: this.detailArticle.author,
                    image: this.medias,
                    status: status
                });
                this.$router.push({ path: "/admin/articles" });
            } catch (e) {
                console.log(e);
            }
        },
    },
    async fetch() {
        try {
            let detile = await this.$axios.$get(this.$config.api + '/articles/' + this.$route.params.id)

            this.detailArticle = detile

            this.medias = detile.image
            console.log(this.detailArticle.image);
            
            
        } catch (e) {
            console.log(e);

        }
    }
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