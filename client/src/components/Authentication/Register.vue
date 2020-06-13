<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Register</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <p>Register: //add errors display!</p>
        <v-text-field
          v-model="name"
          label="User Name"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          type="password"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="password2"
          label="repeat password"
          type="password"
          outlined
        >
        </v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="dialog = false">CLOSE</v-btn>
        <v-btn color="green" text @click="register">REGISTER</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RegistrationService from '../../services/RegistrationService'
export default {
  name: 'Register',
  data () {
    return {
      dialog: false,
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async register () {
      const registerUser = await RegistrationService.registerUser(this.name, this.email, this.password, this.password2)
      console.log(registerUser)
      this.name = ''
      this.email = ''
      this.password = ''
      this.password2 = ''
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
