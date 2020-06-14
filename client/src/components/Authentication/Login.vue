<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Login</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <p>Login:</p>
        <v-text-field
          v-model="email"
          label="E-mail"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          outlined
        >
        </v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="dialog = false">CLOSE</v-btn>
        <v-btn color="green" text @click="login">LOGIN</v-btn>
        <v-btn color="black" text @click="testLogin">TEST LOGIN</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      dialog: false,
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    testLogin () {
      this.email = 'frontTest@mail.com'
      this.password = '123456'
      this.login()
    },
    login () {
      this.$store.dispatch('getToken', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          if (!response.error) {
            this.email = ''
            this.password = ''
            this.dialog = false
            this.$router.push('/admin')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
