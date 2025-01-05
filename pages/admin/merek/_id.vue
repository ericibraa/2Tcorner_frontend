<template>
    <v-container>
        <div>
            <v-card>
                <v-card-title style="background: #eceff1">
                    <p>Tambah Merk</p>
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field label="Merk Kendaraan" outlined hide-details v-model="merk"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Link Image Kendaraan" outlined hide-details
                                v-model="url_merk"></v-text-field>
                            <!-- <v-file-input
                  label="Unggah Merek Kendaraan"
                  outlined
                  prepend-icon="mdi-camera"
                  hide-details="auto"
                  v-model="img_merek"
                ></v-file-input> -->
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="text-end">
                    <v-btn class="mr-3" to="/admin/merek">Kembali</v-btn>
                    <v-btn color="red" dark @click="submitMerk()">Simpan</v-btn>
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
            merk: "",
            url_merk: "",
            detailMerk: {}
        };
    },
    methods: {
        async submitMerk() {
            try {
                await this.$axios.$put(this.$config.api + "/merk/" + this.$route.params.id, {
                    name: this.merk,
                    url: this.url_merk,
                });
                this.$router.push({ path: "/admin/merek" });
            } catch (e) {
                console.log(e);
            }
        },
    },
    async fetch() {
        try {
            var merkD = await this.$axios.$get(this.$config.api + "/merk/" + this.$route.params.id)
            this.detailMerk = merkD
            this.merk = this.detailMerk.name,
            this.url_merk = this.detailMerk.url
        } catch (e) {
            console.log(e);

        }
    },
};
</script>