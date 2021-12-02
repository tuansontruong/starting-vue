<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>

        <slot></slot>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "UserDialog",
  props: {
    dialog: {
      type: Boolean,
    },
    dialogTitle: {
      type: String,
    },
  },
};
</script>
