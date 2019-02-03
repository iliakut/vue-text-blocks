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
      v-bind:numberOfBlock="index"
      v-on:delete-simple-block="deleteSimpleBlock({ index: index })"
    >
      <template slot>
        <span>{{ simpleBlock.text }}</span>
      </template>
    </SimpleBlock>
    <Block
      v-for="(block, index) in blocks"
      :key="'block' + block.number"
      v-bind:numberOfBlock="index"
      v-on:delete-block="deleteBlock({ index: index })"
    >
      <template slot>
        <span>{{ block.text }}</span>
      </template>
    </Block>
    <v-footer fixed>
      <v-icon>
        note
      </v-icon>
      <span>{{ blocks.length + simpleBlocks.length }}</span>
      <v-icon>
        check_circle
      </v-icon>
      <span>{{ checkedBlocks }}</span>
      <v-icon color="green darken-2">
        check_circle
      </v-icon>
      <span>{{ checkedGreenBlocks }}</span>
      <v-icon color="red darken-3">
        check_circle
      </v-icon>
      <span>{{ checkedRedBlocks }}</span>
    </v-footer>
  </v-container>
</template>

<script>
import SimpleBlock from "../components/SimpleBlock";
import Block from "../components/Block";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  components: {
    SimpleBlock,
    Block
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapState([
      "text_data",
      "simpleBlocks",
      "blocks",
      "checkedBlocks"
    ]),
    ...mapGetters(["checkedBlocks", "checkedRedBlocks", "checkedGreenBlocks"])
  },
  methods: {
    ...mapMutations(["deleteSimpleBlock", "deleteBlock"]),
    ...mapActions(["addSimple", "addBlock"])
  }
};
</script>
