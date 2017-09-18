<template>
  <table class="grid">
    <tr>
      <cell name="0"></cell>
      <cell name="1"></cell>
      <cell name="2"></cell>
    </tr>
    <tr>
      <cell name="3"></cell>
      <cell name="4"></cell>
      <cell name="5"></cell>
    </tr>
    <tr>
      <cell name="6"></cell>
      <cell name="7"></cell>
      <cell name="8"></cell>
    </tr>
  </table>
</template>

<script>
  import Cell from './Cell.vue'
  export default {
    components: {
      Cell
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
table, th, td {
   border: 1px solid black;
}

</style>
