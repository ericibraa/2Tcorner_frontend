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
                                <VueEditor id="descEditor" v-model="description" useCustomImageHandler />
                            </client-only>
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
    middleware: "auth",
    data() {
        return {
            title: "",
            short_desc: "",
            description: "",
            author: "",
            image: "",
            imgTemp: [],
            editorOptions: {
                theme: "snow", // Snow is the default theme
                placeholder: "Write the description...",
                modules: {
                    toolbar: [
                        ["bold", "italic", "underline"], // Basic formatting
                        ["blockquote", "code-block"],
                        [{ header: 1 }, { header: 2 }], // Header levels
                        [{ list: "ordered" }, { list: "bullet" }], // Lists
                        ["link", "image"], // Links and images
                        ["clean"], // Remove formatting
                    ],
                },
            },
        };
    },
    methods: {
        // async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        //     console.log("add image");
        // },
        async submitArticle() {
            try {
                await this.$axios.$post(this.$config.api + "/articles/", {
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
};
</script>