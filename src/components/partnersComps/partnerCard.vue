<template>
  <div class="partner-card mx-auto">
    <!-- PARTNER IMAGE  -->
    <div class="partner-image rounded-10 mgb-20">
      <img v-lazy="staticImg(partner.image)" alt="" />
    </div>

    <div class="name font-weight-700 brand-navy mgb-1">{{ partner.name }}</div>

    <div class="course color-grey-dark">{{ partner.role }}</div>
  </div>
</template>

<script>
export default {
  name: "partnerCard",

  props: {
    partner: Object,
  },
};
</script>

<style lang="scss" scoped>
.partner-card {
  @include flex-column-center;
  justify-content: flex-start;
  margin-bottom: toRem(40);

  .partner-image {
    position: relative;
    @include square-shape(250);

    @include breakpoint-down(xl) {
      @include square-shape(220);
    }

    @include breakpoint-down(lg) {
      @include square-shape(200);
    }

    @include breakpoint-down(sm) {
      @include square-shape(160);
    }

    @include breakpoint-down(xs) {
      @include square-shape(140);
    }

    img {
      @include background-contain;
    }
  }

  .name,
  .course {
    @include font-height(15.5, 25);

    @include breakpoint-down(xl) {
      @include font-height(14.5, 23);
    }

    @include breakpoint-down(lg) {
      @include font-height(14, 20);
    }

    @include breakpoint-down(sm) {
      @include font-height(12.5, 18);
    }

    @include breakpoint-down(xs) {
      @include font-height(12, 17);
    }
  }
}
</style>
