<template>
  <v-container>
    <v-card
      @dblclick="isRed = !isRed"
      class="mx-auto"
      :color=color
      dark
    >
      <v-card-title>
        <v-checkbox color="indigo darken-3" v-model="check"></v-checkbox>
        <span>Сложный блок</span>
        <v-spacer></v-spacer>
        <v-btn icon v-on:click="$emit('delete-block')">
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
import { mapMutations, mapState } from "vuex";
export default {
  data: () => {
    return {
      check: false,
      isRed: false,
      color: "green darken-2"
    };
  },
  props: {
    numberOfBlock: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations(["changeBlock", "changeBlockColor"])
  },
  watch: {
    check: function(val) {
      this.changeBlock({ number: this.numberOfBlock, checked: val });
    },
    isRed: function(val) {
      if (val) {
        this.color = "red darken-3";
        this.changeBlockColor({ number: this.numberOfBlock, isRed: true });
      } else {
        this.color = "green darken-2";
        this.changeBlockColor({ number: this.numberOfBlock, isRed: false });
      }
    }
  },
  computed: {
    ...mapState(["blocks"])
  }
};
</script>
