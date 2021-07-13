<template>
  <div class="course-card white-text-bg rounded-8 mgb-40">
    <!-- IMAGE BOX  -->
    <div
      class="image-block w-100 brand-inverse-light-bg rounded-8 overflow-hidden"
    >
      <img v-lazy="staticImg(course.image)" alt="" />
    </div>

    <!-- TITLE  -->
    <div class="text-title font-weight-600 brand-navy">{{ course.title }}</div>

    <!-- DESCRIPTION  -->
    <div class="description color-text">
      {{ course.description }}
      <span class="btn-link link-no-underline">read more</span>
    </div>

    <!-- ENROLL BTN  -->
    <button class="btn btn-accent mx-auto mgb-5">Enroll</button>
  </div>
</template>

<script>
export default {
  name: "courseCard",

  props: {
    course: Object,
  },
};
</script>

<style lang="scss" scoped>
.course-card {
  box-shadow: 6px 4px 65px #dbe1e8;
  padding: toRem(15);
  width: 28%;

  @include breakpoint-down(xl) {
    padding: toRem(12);
    width: 30%;
  }

  @include breakpoint-down(lg) {
    padding: toRem(10);
  }

  @include breakpoint-down(md) {
    padding: toRem(12);
    width: 45%;
  }

  @include breakpoint-down(sm) {
    padding: toRem(10);
    width: 46%;
  }

  @include breakpoint-down(xs) {
    padding: toRem(12);
    width: 98%;
  }

  .image-block {
    position: relative;
    height: toRem(300);
    margin-bottom: toRem(25);

    @include breakpoint-down(xl) {
      height: toRem(250);
      margin-bottom: toRem(20);
    }

    @include breakpoint-down(lg) {
      height: toRem(225);
    }

    @include breakpoint-down(md) {
      height: toRem(260);
    }

    @include breakpoint-down(sm) {
      height: toRem(220);
    }

    @include breakpoint-custom-down(490) {
      height: toRem(190);
    }

    @include breakpoint-down(xs) {
      height: toRem(280);
    }

    @include breakpoint-custom-down(370) {
      height: toRem(240);
    }

    img {
      @include background-cover;
    }
  }

  .text-title {
    @include font-height(17.5, 26);
    margin-bottom: toRem(24);

    @include breakpoint-down(xl) {
      @include font-height(16, 24);
      margin-bottom: toRem(18);
    }

    @include breakpoint-down(sm) {
      @include font-height(15, 22);
    }
  }

  .description {
    @include font-height(14, 24.5);
    margin-bottom: toRem(28);

    @include breakpoint-down(xl) {
      @include font-height(13, 21);
      margin-bottom: toRem(25);
    }

    @include breakpoint-down(sm) {
      @include font-height(12.5, 20);
    }
  }

  .btn {
    padding: toRem(14) toRem(48);

    @include breakpoint-down(xl) {
      padding: toRem(12) toRem(38);
      font-size: toRem(11);
    }

    @include breakpoint-down(md) {
      padding: toRem(10) toRem(30);
      font-size: toRem(10.5);
    }
  }
}
</style>
