<template>
    <v-container>
        <div>
            <v-card>
                <v-card-title style="background: #eceff1">
                    <p>Edit Location</p>
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Kota" outlined hide-details v-model="location"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="text-end">
                    <v-btn class="mr-3" to="/admin/location">Kembali</v-btn>
                    <v-btn color="red" dark @click="submitLocation()">Simpan</v-btn>
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
            location: "",
            detailLoc: {}
        };
    },
    methods: {
        async submitLocation() {
            try {
                await this.$axios.$put(this.$config.api + "/location/" + this.$route.params.id, {
                    kota: this.location,
                });
                this.$router.push({ path: "/admin/location" });
            } catch (e) {
                console.log(e);
            }
        },
    },
    async fetch() {
        try {
            var locationD = await this.$axios.$get(this.$config.api + "/location/" + this.$route.params.id)
            this.detailLoc = locationD
            this.location = this.detailLoc.kota
        } catch (e) {
            console.log(e);

        }
    },
};
</script>