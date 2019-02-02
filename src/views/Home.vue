<template>
  <v-container>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-menu offset-y>
          <v-btn slot="activator" color="#26c6da" dark>
            <v-icon>
              note_add
            </v-icon>
            <span>Добавить блок</span>
          </v-btn>
          <v-list>
            <v-list-tile @click="addSimple">
              <v-list-tile-title>Простой</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="addBlock">
              <v-list-tile-title>Сложный</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <SimpleBlock
      v-for="(simpleBlock, index) in simpleBlocks"
      :key="'simpleBlock' + simpleBlock.number"
      v-on:delete-simple-block="simpleBlocks.splice(index, 1)"
    >
      <template slot>
        <span>{{ simpleBlock.text }}</span>
      </template>
    </SimpleBlock>
    <Block
      v-for="(block, index) in blocks"
      :key="'block' + block.number"
      v-on:delete-block="blocks.splice(index, 1)"
    >
      <template slot>
        <span>{{ block.text }}</span>
      </template>
    </Block>
    <v-footer fixed>
      <v-icon>
        note
      </v-icon>
      <span>{{ this.blocks.length + this.simpleBlocks.length }}</span>
      <v-icon>
        check_circle
      </v-icon>
      <span>1</span>
      <v-icon color="green darken-2">
        check_circle
      </v-icon>
      <span>2</span>
      <v-icon color="red darken-3">
        check_circle
      </v-icon>
      <span>3</span>
    </v-footer>
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
      numberOfSimpleBlocks: 0,
      numberOfBlocks: 0,
      block: {checked: false, isRed: false, number: 0, text: ""},
      simpleBlocks: [],
      blocks: []
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
    },
    addSimple: function() {
      this.numberOfSimpleBlocks++;
      const textData = this.getRandomText();
      const simpleBlock = { checked: false, number: this.numberOfSimpleBlocks, text: textData };
      this.simpleBlocks.push(simpleBlock);
    },
    addBlock: function() {
      this.numberOfBlocks++;
      const textData = this.getRandomText();
      const block = { checked: false, number: this.numberOfBlocks, text: textData };
      this.blocks.push(block);
    }
  }
};
</script>
