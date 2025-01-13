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
                            <v-textarea label="Description" outlined hide-details v-model="description"></v-textarea>
                        </v-col>
                        <v-col cols="12" class="my-auto">
                            <v-text-field label="Author" outlined hide-details v-model="author"></v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field label="Link Image Article" outlined hide-details
                                v-model="image"></v-text-field>
                        </v-col>
                        <v-col cols="2" class="my-auto">
                            <v-btn @click="addImage()" color="red" dark block>Add Image</v-btn>
                        </v-col>
                        <v-col cols="12" v-if="imgTemp != []">
                            <div class="d-flex">
                                <v-img v-for="img in imgTemp" :key="img" :src="img" aspect-ratio="1" max-height="200"
                                    max-width="200" class="mr-3"></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="text-end">
                    <v-btn class="mr-3" to="/admin/merek">Kembali</v-btn>
                    <v-btn color="red" dark @click="submitArticle()">Simpan</v-btn>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    layout: "admin",
    data() {
        return {
            title: "",
            short_desc: "",
            description: "",
            author: "",
            image: "",
            imgTemp: []
        };
    },
    methods: {
        async submitArticle() {
            try {
                await this.$axios.$put(this.$config.api + '/articles/' + this.$route.params.id, {
                    title: this.title,
                    short_desc: this.short_desc,
                    description: this.description,
                    author: this.author,
                    image: this.imgTemp
                });
                this.$router.push({ path: "/admin/articles" });
            } catch (e) {
                console.log(e);
            }
        },
        addImage() {
            this.imgTemp.push(this.image)
            this.image = ''
        }
    },
    async fetch() {
        try {
            var detailArticle = await this.$axios.$get(this.$config.api + '/articles/' + this.$route.params.id)
            this.title = detailArticle.title,
                this.short_desc = detailArticle.short_desc,
                this.description = detailArticle.description,
                this.author = detailArticle.author,
                this.imgTemp = detailArticle.image
        } catch (e) {
            console.log(e);

        }
    }
};
</script>