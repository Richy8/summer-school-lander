<template>
  <div
    class="hero-banner position-relative brand-accent-light-bg overflow-hidden"
  >
    <img v-lazy="staticImg('headerPic.svg')" alt="GradelyBanner" />

    <!-- HERO SECTION -->
    <div class="gradely-container px-3 mx-auto position-relative h-100 my-auto">
      <div class="text-content h-100">
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 brand-navy">
          Gradely Online <span class="brand-accent">Summer</span> School
        </div>

        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-500 color-text">
          Help your child explore their curiosity in fun project-based virtual
          classes led by dedicated and passionate professionals.
        </div>

        <button class="btn btn-accent">Enroll</button>
      </div>

      <!-- CHILD IMAGE  -->
      <div class="child-block">
        <img
          v-lazy="staticImg('waving_child.svg')"
          alt=""
          class="child-image index-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heroBanner",
};
</script>

<style lang="scss" scoped>
.hero-banner {
  top: toRem(63);
  height: 80vh;
  margin-bottom: toRem(140);

  @include breakpoint-down(sm) {
    margin-bottom: toRem(100);
  }

  @include breakpoint-down(xs) {
    top: toRem(58);
    margin-bottom: toRem(100);
  }

  img {
    @include background-cover;
  }

  .gradely-container {
    @include flex-row-between-nowrap;
  }

  .text-content {
    @include flex-column-start-start;
    justify-content: center;
    width: 42%;

    @include breakpoint-down(xl) {
      width: 46%;
    }

    @include breakpoint-down(lg) {
      width: 50%;
    }

    @include breakpoint-down(md) {
      width: 85%;
    }

    @include breakpoint-down(sm) {
      width: 100%;
    }

    .title-text {
      @include font-height(42, 57);
      font-weight: 700;

      @include breakpoint-down(xl) {
        @include font-height(37, 48);
      }

      @include breakpoint-down(md) {
        @include font-height(35, 45);
      }

      @include breakpoint-down(sm) {
        @include font-height(32, 42);
      }

      @include breakpoint-down(xs) {
        @include font-height(30, 40);
      }

      @include breakpoint-custom-down(380) {
        @include font-height(28, 38);
      }

      @include breakpoint-custom-down(350) {
        @include font-height(25, 34);
      }
    }

    .meta-text {
      @include font-height(21, 32);

      @include breakpoint-down(xl) {
        @include font-height(18, 27);
      }

      @include breakpoint-down(sm) {
        @include font-height(17, 27);
      }

      @include breakpoint-down(xs) {
        @include font-height(14, 25);
      }
    }

    .btn {
      padding: toRem(15) toRem(36);
      font-size: toRem(14);
      font-weight: 700;

      @include breakpoint-down(sm) {
        padding: toRem(12) toRem(26);
        font-size: toRem(12);
      }

      @include breakpoint-custom-down(380) {
        padding: toRem(11) toRem(22);
        font-size: toRem(11);
      }
    }
  }

  .child-block {
    position: relative;
    height: 100%;
    width: 45%;
    top: toRem(17);

    @include breakpoint-down(xl) {
      top: toRem(45);
      height: 130%;
      width: 48%;
      right: toRem(-15);
    }

    @include breakpoint-down(lg) {
      top: toRem(48);
      height: 135%;
      width: 50%;
    }

    @include breakpoint-custom-down(850) {
      top: toRem(70);
    }

    @include breakpoint-down(md) {
      display: none;
    }

    .child-image {
      @include background-contain;
    }
  }
}
</style>
