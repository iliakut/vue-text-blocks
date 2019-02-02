<template>
  <v-container>
    <SimpleBlock  v-for="simpleBlock in simpleBlocks" :key="simpleBlock.checked">
      <template slot>
        <span>{{ getRandomText() }}</span>
      </template>
    </SimpleBlock>
    <Block v-for="block in blocks" :key="block.checked">
      <template slot>
        <span>{{ getRandomText() }}</span>
      </template>
    </Block>
  </v-container>
</template>

<script>
import SimpleBlock from "../components/SimpleBlock";
import Block from "../components/Block";
import { mapState } from "vuex";

export default {
  components: {
    SimpleBlock,
    Block
  },
  data: () => {
    return {
      simpleBlock: {checked: false},
      block: {checked: false, isRed: false},
      simpleBlocks: [{checked: false}, {checked: false}],
      blocks: [{checked: false, isRed: false}, {checked: false, isRed: false}]
    };
  },
  computed: {
    ...mapState(["text_data"])
  },
  methods: {
    getRandomInteger: function(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    },
    getRandomText: function() {
      const rand = this.getRandomInteger(0, this.text_data.length);
      return this.text_data[rand];
    }
  }
};
</script>
