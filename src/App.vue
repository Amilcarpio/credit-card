<template>
  <v-app class="app">
    <Card />
  </v-app>
</template>

<script>
import Card from "./components/Card";
export default {
  name: "App",
  components: {
    Card,
  },

  data() {
    return {
      data: {
        number: "",
        month: "",
        year: "",
        cvv: "",
        holder: "",
      },
    };
  },
};
</script>