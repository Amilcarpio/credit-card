<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12">
        <v-form id="form-template" v-if="notCompleted">
          <v-row class="form">
            <v-col cols="12" id="cardHolder">
              <p class="title-input caption font-weight-bold">
                CARDHOLDER NAME
              </p>
              <v-text-field
                label="e.g. John Doe"
                color="hsl(278, 94%, 30%)"
                outlined
                required
                dense
                :value="value.holder"
                :rules="rules.holder"
                @input="updateValue('holder', $event)"
                ref="holder"
              />
            </v-col>
            <v-col cols="12" id="cardNumber">
              <p class="title-input caption font-weight-bold">CARD NUMBER</p>
              <v-text-field
                label="e.g. 0000 0000 0000 0000"
                color="hsl(278, 94%, 30%)"
                v-mask="'#### #### #### ####'"
                required
                dense
                outlined
                :value="value.number"
                :rules="rules.number"
                @input="updateNumber($event)"
                ref="number"
              />
            </v-col>
          </v-row>
          <v-row class="exp-cvc-row text-center">
            <v-col cols="3" id="monthCard">
              <p class="title-input caption font-weight-bold">EXP.</p>
              <v-text-field
                label="MM"
                color="hsl(278, 94%, 30%)"
                v-mask="'##'"
                required
                dense
                outlined
                :value="value.month"
                :rules="rules.month"
                @input="updateMonth($event)"
                ref="month"
              />
            </v-col>
            <v-col cols="3" id="yearCard">
              <p class="title-input caption font-weight-bold">(MM/YY)</p>
              <v-text-field
                label="YY"
                color="hsl(278, 94%, 30%)"
                v-mask="'##'"
                required
                dense
                outlined
                :value="value.year"
                :rules="rules.year"
                @input="updateYear($event)"
                ref="year"
              />
            </v-col>
            <v-col cols="6" id="cvv">
              <p class="title-input caption font-weight-bold">CVC</p>
              <v-text-field
                label="e.g. 123"
                color="hsl(278, 94%, 30%)"
                class="text-field"
                v-mask="'###'"
                required
                dense
                outlined
                :value="value.cvv"
                :rules="rules.cvv"
                @input="updateCvv($event)"
                ref="cvv"
              />
            </v-col>
          </v-row>
          <v-row id="confirm-btn" class="text-center">
            <v-col cols="12">
              <v-btn
                id="complete-btn"
                class="white--text"
                color="#21092F"
                large
                block
                @click="validate"
                :disabled="isDisabled"
                >Confirm</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
        <Checkout v-if="isCompleted" @addNewCard="addNewCard" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Checkout from "./Checkout";
export default {
  name: "Form-data",
  props: {
    value: {
      type: Object,
      default: () => ({
        number: null,
        month: null,
        year: null,
        cvv: null,
        holder: "",
      }),
    },
  },
  components: {
    Checkout,
  },

  data() {
    return {
      rules: {
        holder: [
          (v) => !!v || "Card holder is required",
          (v) =>
            (v && v.length <= 20) ||
            "Card holder must be less than 20 characters",
        ],
        number: [
          (v) => !!v || "Card number is required",
          (v) => v.length === 19 || "Card number must be 16 digits",
        ],
        month: [
          (v) => !!v || "Month is required",
          (v) => v.length === 2 || "Month must be 2 digits",
        ],
        year: [
          (v) => !!v || "Year is required",
          (v) => v.length === 2 || "Year must be 2 digits",
        ],
        cvv: [
          (v) => !!v || "CVC is required",
          (v) => v.length === 3 || "CVC must be 3 digits",
        ],
      },
      isCompleted: false,
      notCompleted: true,
    };
  },

  computed: {
    isDisabled() {
      return (
        !this.value.number ||
        !this.value.month ||
        !this.value.year ||
        !this.value.cvv ||
        this.value.cvv.length !== 3
      );
    },
  },

  methods: {
    updateNumber(value) {
      this.$emit("input", {
        ...this.value,
        number: value,
      });
    },
    updateMonth(value) {
      this.$emit("input", {
        ...this.value,
        month: value,
      });
    },
    updateYear(value) {
      this.$emit("input", {
        ...this.value,
        year: value,
      });
    },
    updateCvv(value) {
      this.$emit("input", {
        ...this.value,
        cvv: value,
      });
    },

    updateValue(key, value) {
      this.$emit("input", {
        ...this.value,
        [key]: value,
      });
    },

    validate() {
      this.$refs.number.validate();
      this.$refs.month.validate();
      this.$refs.year.validate();
      this.$refs.cvv.validate();

      this.isCompleted = true;
      this.notCompleted = false;
    },

    addNewCard() {
      this.isCompleted = false;
      this.notCompleted = true;
      this.$emit("input", {
        number: null,
        month: null,
        year: null,
        cvv: null,
        holder: "",
      });
    },
  },
};
</script>

