<template>
  <div>
    <v-container id="complete-stat">
      <v-row class="text-center mt-5">
        <v-col cols="12">
          <v-img
            src="@/assets/images/icon-complete.svg"
            max-width="65"
            class="mx-auto"
          />
        </v-col>
        <v-col cols="12">
          <h1 class="thank-you title">THANK YOU!</h1>
          <p class="completed-payment subtitle-2">
            We've add your card details
          </p>
        </v-col>
        <v-col cols="12">
          <v-btn
            id="complete-btn"
            class="white--text"
            color="#21092F"
            block
            @click="$emit('addNewCard')"
          >
            Continue</v-btn
          >
        </v-col>
        <v-col cols="12">
          <p class="contact subtitle-1">
            Need help? <a href="#">Contact us</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Checkout-state",
};
</script>

<style scoped>
.completed-payment {
  color: #8c8990;
}
</style>