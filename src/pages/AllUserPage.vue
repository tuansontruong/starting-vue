<template>
  <div class="container">
    <h3>User List</h3>
    <v-btn class="btnAdd" color="primary" dark @click="dialog = true">
      New User
    </v-btn>
    <!-- <button :class="{greenBackground: beGreen, 'red-outline': beRed}">Colorful</button>
    <button :class="classObject">Colorful</button>
    <button :class="[beGreen ? 'greenBackground' : 'red-outline']">Colorful</button> -->

    <UserList />
    <UserDialog :dialog="dialog" dialogTitle="Add New User">
      <AddNewUser @setDialogChildren="(status) => (dialog = status)" />
    </UserDialog>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import AddNewUser from "@/components/AddNewUser";
import UserDialog from "@/components/UserDialog";
export default {
  name: "AllUserPage",
  components: {
    UserList,
    AddNewUser,
    UserDialog,
  },
  data: () => ({
    // beGreen: true,
    // beRed: true,
    dialog: false,
  }),

  computed: {
    classObject: function () {
      return {
        greenBackground: this.beGreen,
        "red-outline": this.beRed,
      };
    },
  },
  // computed: {
  //   classObject: () => {
  //     return {
  //       greenBackground: this.beGreen,
  //       'red-outline': this.beRed,
  //     }
  //   },
  // },
  methods: {
    setDialogParent(status) {
      this.dialog = status;
    },
  },
};
</script>

<style lang="scss">
.greenBackground {
  background-color: green;
  &.red-outline {
    outline: 1px solid red;
  }
  &.orange {
    color: orange;
  }
}
.error-border {
  outline: 1px solid red;
}
.btn-edit {
  margin-left: 15px;
  &.editUser {
    outline: 2px solid green;
  }
}

.container {
  margin: 15px auto;
  max-width: 800px;
}
.btnAdd {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
