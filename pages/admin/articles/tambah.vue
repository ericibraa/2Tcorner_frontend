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
                            <v-text-field label="Title" outlined hide-details v-model="title"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Short Description" outlined hide-details
                                v-model="short_desc"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="my-auto">
                            <client-only>
                                <p class="caption grey--text text--darken-2">Description</p>
                                <VueEditor id="descEditor" v-model="description" @image-added="uploadImage" />
                            </client-only>
                        </v-col>
                        <v-col cols="12" class="my-auto">
                            <v-text-field label="Author" outlined hide-details v-model="author"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <upload @update-data="handleupdatemedia"></upload>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="text-end">
                    <v-btn class="mr-3" to="/admin/articles">Kembali</v-btn>
                    <v-btn class="mr-3" @click="submitArticle(1)">Draft</v-btn>
                    <v-btn color="red" dark @click="submitArticle()">Simpan & Tampilkan</v-btn>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    layout: "admin",
    middleware: "auth",
    data() {
        return {
            title: "",
            short_desc: "",
            description: "",
            author: "",
            media: {},
            medias: {},
            imgList: []
        };
    },
    methods: {
        handleupdatemedia(value) {
            this.medias = value
            this.imgList.push(this.medias.image)
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
        async submitArticle(status) {
            try {
                await this.$axios.$post(this.$config.api + "/articles/", {
                    title: this.title,
                    short_desc: this.short_desc,
                    description: this.description,
                    author: this.author,
                    image: this.imgList,
                    status: status
                });
                this.$router.push({ path: "/admin/articles" });
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>