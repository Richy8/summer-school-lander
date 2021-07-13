<template>
  <div class="partner-block mgb-80">
    <div class="gradely-container px-3 mx-auto">
      <div class="title-text font-weight-700 brand-navy text-center">
        Meet our facilitators
      </div>

      <div class="partner-row d-flex justify-content-around mx-auto">
        <div
          class="col-6 col-md-4 col-lg-3"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <partner-card :partner="partner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partnerCard from "@/components/partnersComps/partnerCard";

export default {
  name: "partnerBlock",

  components: {
    partnerCard,
  },

  data() {
    return {
      partners: [
        {
          image: "facilitatorOne.png",
          name: "Victor Ugbede Anawo",
          role: "Mobile app developer",
        },
        {
          image: "facilitatorTwo.png",
          name: "Jemima Talatu Angulu",
          role: "Dancer",
        },
        {
          image: "facilitatorThree.png",
          name: "Damilola Aleyemi",
          role: "Visual designer",
        },
        {
          image: "facilitatorFour.png",
          name: "Victor Ugbede Anawo",
          role: "Mobile app developer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partner-block {
  .title-text {
    @include font-height(25, 28);
    margin-top: toRem(30);
    margin-bottom: toRem(58);

    @include breakpoint-down(xl) {
      @include font-height(22, 24);
      margin-bottom: toRem(50);
    }

    @include breakpoint-down(lg) {
      @include font-height(20, 24);
    }

    @include breakpoint-down(md) {
      @include font-height(18.5, 24);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(sm) {
      @include font-height(18, 24);
    }

    @include breakpoint-down(xs) {
      @include font-height(17, 23);
      margin-bottom: toRem(35);
    }
  }

  .partner-row {
    @include flex-row-evenly-wrap;
  }
}
</style>
