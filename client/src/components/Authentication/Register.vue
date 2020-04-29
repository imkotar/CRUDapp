<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Register</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <p>Register:</p>
        <v-text-field
          label="User Name"
          outlined
        >
        </v-text-field>
        <v-text-field
          label="password"
          type="password"
          outlined
        >
        </v-text-field>
        <v-text-field
          label="repeat password"
          type="password"
          outlined
        >
        </v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="dialog = false">CLOSE</v-btn>
        <v-btn color="green" text @click="dialog = false">REGISTER</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
