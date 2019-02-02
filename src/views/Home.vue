<template>
  <v-container>
    <SimpleBlock />
    <Block />
  </v-container>
</template>

<script>
import SimpleBlock from "../components/SimpleBlock";
import Block from "../components/Block";

export default {
  components: {
    SimpleBlock,
    Block
  }
};
</script>
