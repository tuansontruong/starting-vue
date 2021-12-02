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
        <v-btn color="blue darken-1" text @click="updateInfo"> Save </v-btn>
      </v-card-actions>
    </v-row>

    <v-snackbar v-model="snackbar" timeout="-1" centered>
      {{ newUserUpdatedText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { LOAD_USER_DETAIL, UPDATE_USER } from "@/store/actions.type";
export default {
  name: "EditUser",
  props: {
    userId: {
      type: Number,
    },
  },

  data: () => ({
    snackbar: false,
    newUserUpdatedText: "Successfully update user: ",
    name: "",
    username: "",
    phone: "",
  }),

  methods: {
    ...mapActions({
      loadUser: LOAD_USER_DETAIL,
      updateUser: UPDATE_USER,
    }),
    setDialog(status) {
      this.$emit("setDialogChildren", status);
    },
    updateInfo() {
      this.updateUser({
        id: this.$props.userId,
        name: this.name,
        username: this.username,
        phone: this.phone,
      });
      this.setDialog(false);
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "getUserDetail",
    }),
  },
  created: async function () {
    await this.loadUser(this.$props.userId);
  },
  watch: {
    currentUser: function (value) {
      const { name, username, phone } = value;
      this.username = username;
      this.name = name;
      this.phone = phone;
    },
  },
};
</script>
