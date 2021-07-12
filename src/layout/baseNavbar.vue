<template>
  <div class="base-navbar h-auto white-text-bg box-shadow-effect">
    <div class="gradely-container px-3 mx-auto pdy-10">
      <!-- IMAGE BLOCK  -->
      <div class="image-block">
        <img v-lazy="staticImg('Gradely.svg')" alt="Gradely" />
      </div>

      <!-- NAVIGATION BLOCK  -->
      <div class="navigation-block">
        <div class="nav-items">
          <a href="#" class="nav">For Parents</a>
          <a href="#" class="nav">For Schools</a>
          <div class="nav pdr-26">
            More <span class="icon icon-caret-down"></span>
          </div>
          <a href="#" class="nav pdl-26">Sign Up</a>
        </div>

        <!-- LOGIN BUTTON -->
        <button class="btn btn-accent">Log In</button>

        <!-- HAMBURGER -->
        <div
          class="menu-icon icon-align-justify border-grey-dark pointer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseNavbar",
};
</script>

<style lang="scss" scoped>
.base-navbar {
  @include fixed-display-area;
  z-index: 999;

  .gradely-container {
    @include flex-row-between-nowrap;

    .image-block {
      img {
        @include rectangle-shape(115, 42);
      
        @include breakpoint-down(xs) {
          @include rectangle-shape(100, 38);
        }
      } 
    }

    .navigation-block {
      @include flex-row-end-nowrap;
      .nav-items {
        @include flex-row-end-nowrap;

        @include breakpoint-down(md) {
          display: none;
        }

        .nav {
          position: relative;
          @include font-height(13, 18);
          cursor: pointer;
          color: $color_ash;
          font-weight: 700;
          padding: 0 toRem(20);

          .icon {
            @include center-y;
            font-weight: 600;
            margin-top: toRem(1);
            font-size: toRem(10);
            right: toRem(3);
          }
        }
      }

      .btn {
        margin-left: toRem(20);
        padding: toRem(12) toRem(22) !important;
        font-size: toRem(11.75);

        @include breakpoint-down(md) {
          margin-left: 0;
        }

        @include breakpoint-down(xs) {
        font-size: toRem(11);
        padding: toRem(10) toRem(18) !important;
        }
      }

      .menu-icon {
        font-size: toRem(35);
        margin-left: toRem(20);
        display: none;

        @include breakpoint-down(md) {
          display: unset;
        }

        @include breakpoint-down(sm) {
        margin-left: toRem(10);
        }
      }
    }
  }
}
</style>
