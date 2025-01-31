<template>
    <v-container>
        <div>
            <v-card>
                <v-card-title style="background: #eceff1">
                    <p>Tambah Lokasi</p>
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Kota" outlined hide-details v-model="location"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="text-end">
                    <v-btn class="mr-3" to="/admin/merek">Kembali</v-btn>
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
        };
    },
    methods: {
        async submitLocation() {
            try {
                await this.$axios.$post(this.$config.api + "/location/", {
                    kota: this.location,
                });
                this.$router.push({ path: "/admin/location" });
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>