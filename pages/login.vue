<template>
  <v-container fluid fill-height>
    <div class="boxShadow mx-auto">
      <v-card width="400" rounded="xxl" flat>
        <v-card-text class="text-center">
          <v-img :src="require('~/assets/images/logo/2tcorner 1.png')" width="100" class="mx-auto"></v-img>
          <p class="text-h6 mt-3">Login to your account</p>
        </v-card-text>
        <v-card-text>
          <v-form @submit="login">
            <v-text-field label="Email" type="email" outlined dense append-icon="mdi-account" v-model="form.email"></v-text-field>
            <v-text-field label="Password" :type="typeInputPassword" outlined dense
              :append-icon="password ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              @click:append="togglePassword" v-model="form.password"></v-text-field>
            <v-btn block color="primary" type="submit">Login</v-btn>
          </v-form>
          <v-alert dismissible outlined text dense type="error" v-if="error">{{ error }}</v-alert>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      password: true,
      typeInputPassword: "password",
      error: '',
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    togglePassword() {
      if (this.typeInputPassword == "password") {
        this.typeInputPassword = "text";
        this.password = false;
      } else {
        this.typeInputPassword = "password";
        this.password = true;
      }
    },
    async login(e) {
      console.log("tetsttt");
      e.preventDefault();
      try {
        let resp = await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        });
      } catch (err) {
        console.log(err);
        if (err.response.status == 401) {
          this.error = err.response.data.message;
        }

      }
    },
  },
};
</script>

<style scoped>
.boxShadow {
  box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -webkit-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  -moz-box-shadow: 0 2px 20px 0 rgba(40, 51, 63, 0.12);
  margin-bottom: 16px;
  position: relative;
  border-radius: 30px;
}
</style>