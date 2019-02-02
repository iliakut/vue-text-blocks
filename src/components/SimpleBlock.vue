<template>
  <v-container>
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
    >
      <v-card-title>
        <v-checkbox
          color="indigo darken-3"
          v-model="checkbox"
        ></v-checkbox>
        <span>Простой блок</span>

        <v-spacer></v-spacer>
        <v-btn icon v-on:click="$emit('delete-simple-block')">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        <slot><span>text</span></slot>
      </v-card-text>

      <v-list-tile class="grow">
        <v-list-tile-content>
          <v-list-tile-title>Атлант расправил плечи (с)</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    checkbox: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data: () => {
    return {
    };
  }
};
</script>
