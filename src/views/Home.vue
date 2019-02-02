<template>
  <v-container>
    <SimpleBlock>
      <template slot>
        <span>{{ getRandomText() }}</span>
      </template>
    </SimpleBlock>
    <Block>
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
    return {};
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
