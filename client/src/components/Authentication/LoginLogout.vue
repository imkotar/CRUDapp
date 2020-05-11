<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Login/Logout</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <p>Login:</p>
        <v-text-field
          v-model="username"
          label="User Name"
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
        <v-btn color="green" text @click="dialog = false">LOGIN</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'LoginLogout',
  data () {
    return {
      dialog: false,
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>
