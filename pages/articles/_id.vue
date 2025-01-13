<template>
    <v-container class="mt-5">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold text-center mt-10 mb-5">
                    {{ articleDetail.title }}
                </p>
                <div class="d-flex justify-center mb-5">
                    <p class="text-body-2 font-weight-bold">{{ articleDetail.author }}</p>
                    <a href="/"><p class="text-body-2 ml-2">-  2Tcorner</p></a>
                </div>
                <v-img :src="articleDetail.image[0]" max-height="300px" aspect-ratio="1" contain alt="Article Image"></v-img>

                <p class="text-body-1 my-10">{{ articleDetail.description }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "IndexPage",
    data() {
        return {
            articleDetail: {}
        }
    },
    async fetch() {
        try {
            this.articleDetail = await this.$axios.$get(this.$config.api + "/articles/" + this.$route.params.id)
        } catch (e) {
            console.log(e);

        }
    }
}
</script>