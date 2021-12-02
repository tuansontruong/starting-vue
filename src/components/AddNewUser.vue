<template>
  <v-container>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Full Name*"
            required
            v-model="name"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Username*"
            required
            v-model="username"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Phone" v-model="phone"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-row justify="center">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="setDialog(false)">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="saveInfo"> Save </v-btn>
      </v-card-actions>
    </v-row>

    <v-snackbar v-model="snackbar" timeout="-1" centered>
      {{ newUserAddedText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { ADD_NEW_USER } from "@/store/actions.type";
export default {
  name: "AddNewUser",
  props: {},

  data: () => ({
    snackbar: false,
    newUserAddedText: "Successfully added one new user: ",
    name: "",
    username: "",
    phone: "",
  }),

  methods: {
    ...mapActions({
      addUser: ADD_NEW_USER,
    }),
    setDialog(status) {
      this.$emit("setDialogChildren", status);
    },
    saveInfo() {
      this.addUser({
        name: this.name,
        username: this.username,
        phone: this.phone,
      });
      this.setDialog(false);
      this.name = "";
      this.username = "";
      this.phone = "";
    },
  },
  computed: {},
};
</script>
