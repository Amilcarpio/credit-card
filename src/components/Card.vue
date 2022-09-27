<template>
    <v-container>
      <v-row>
        <v-col class="mt-lg-16 ml-lg-12">
          <v-row>
            <v-col cols="12" class="d-flex justify-sm-center justify-start order-md-1 order-2">
              <v-img src="@/assets/images/bg-card-front.png" max-width="350">
                <v-img
                  src="@/assets/images/card-logo.svg"
                  max-width="70"
                  id="card-logo"
                  class="mb-n8 ml-4"
                />
                <v-col cols="12" class="card-number ml-13 mt-16" ref="number">
                  <v-input class="card-number-input headline" dark >
                    {{ data.number }}
                  </v-input>
                </v-col>
                <v-col class="d-flex justify-space-between ml-10 mb-n7">
                  <v-input class="holder-name-input overline mr-10 " dark>
                    {{data.holder}}
                  </v-input>
                  <v-input class="date-input overline ml-10" dark>
                    {{data.month}}/{{data.year}}
                  </v-input>
                </v-col>
                
              </v-img>
            </v-col>
            <v-col class="d-flex justify-sm-end justify-end mb-n16 mb-sm-0 order-md-2 order-1">
              <v-img src="@/assets/images/bg-card-back.png" max-width="350">
                <v-row class="d-flex justify-end">
                  <v-col></v-col>
                  <v-col></v-col>
                  <v-col >
                    <v-input class="cvc-input mt-16 ml-8 overline" dark>{{data.cvv}}</v-input>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-lg-16 ml-lg-12">
          <v-row>
            <v-col lg="8" md="10" sm="10" xs="12" class="form">
              <Form v-model="data"  />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Form from "./Form";
export default {
  name: "Card-interface",
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
  components: {
    Form,
  },

};
</script>

<style scoped>
#card-logo {
  position: absolute;
  top: 2vh;
}

.card-number-input{
  position: relative;
  top: 5.5vh;
}

.cvc-input{
  position: absolute;
  top: 2.3vh;
} 
</style>
