<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Login/Logout</v-btn>
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
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService'
export default {
  name: 'LoginLogout',
  data () {
    return {
      dialog: false,
      email: 'frontTest@mail.com',
      password: ''
    }
  },
  methods: {
    async login () {
      const loginUser = await AuthenticationService.loginUser(this.email, this.password)
      console.log(loginUser)
      this.email = ''
      this.password = ''
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
