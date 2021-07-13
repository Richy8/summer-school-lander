<template>
  <div class="service-column">
    <div class="avatar" :class="service.icon_bg">
      <img v-lazy="staticImg(service.icon)" alt="" class="avatar-img" />
    </div>

    <!-- TEXT  -->
    <div class="text-title mgb-18 font-weight-700 color-text text-center">
      {{ service.title }}
    </div>

    <!-- DESCRIPTION  -->
    <div class="description text-center color-ash">
      {{ service.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceColumn",

  props: {
    service: Object,
  },
};
</script>

<style lang="scss" scoped>
.service-column {
  @include flex-column-center;
  justify-content: flex-start;
  margin-bottom: toRem(30);

  .avatar {
    @include square-shape(72);
    margin-bottom: toRem(25);

    @include breakpoint-down(xl) {
      @include square-shape(65);
      margin-bottom: toRem(20);
    }

    @include breakpoint-down(md) {
      @include square-shape(55);
      margin-bottom: toRem(18);
    }

    img {
      @include square-shape(40);

      @include breakpoint-down(xl) {
        @include square-shape(32);
      }

      @include breakpoint-down(md) {
        @include square-shape(28);
      }
    }
  }

  .text-title {
    @include font-height(18, 22);

    @include breakpoint-down(xl) {
      @include font-height(15, 19);
    }

    @include breakpoint-down(md) {
      @include font-height(15.5, 19);
      margin-bottom: toRem(15) !important;
    }

    @include breakpoint-down(xs) {
      @include font-height(14, 18);
    }
  }

  .description {
    @include font-height(14.75, 24);

    @include breakpoint-down(xl) {
      @include font-height(13, 22);
    }

    @include breakpoint-down(md) {
      width: 70%;
    }

    @include breakpoint-down(sm) {
      width: 55%;
    }

    @include breakpoint-down(xs) {
      width: 90%;
    }
  }
}

.light-green-bg {
  background: #c8fbec;
}

.semi-light-green-bg {
  background: #d7f4eb;
}
</style>
