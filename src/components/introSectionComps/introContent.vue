<template>
  <div class="intro-content">
    <!-- INTRO SECTION -->
    <div class="gradely-container px-3 position-relative h-100 my-auto">
      <div class="row">
        <!-- VIDEO INTRO -->
        <div class="col-12 col-md-6">
          <div class="video-intro position-relative">
            <img
              v-lazy="staticImg('girlGrass.png')"
              class="girl-grass"
              alt=""
            />
            <!-- PLAY BUTTON -->
            <img
              v-lazy="staticImg('playBtn.svg')"
              alt=""
              class="index-9 play-btn pointer"
              @click="toggleModal"
            />
          </div>
        </div>

        <!-- TEXT INTRO -->
        <div class="col-12 col-md-5 text-wrapper">
          <div class="text-intro h-100">
            <!-- TITLE TEXT -->
            <div class="title-text brand-navy font-weight-700 mgb-20">
              Keep your child active and watch them grow.
            </div>

            <!-- META TEXT  -->
            <div class="meta-text color-ash mgb-30">
              Replace mindless videogaming and long boring hours with curiosity
              and creativity this summer. Engage your children's interests with
              minimal demand of your time.
            </div>

            <!-- ENROLL BUTTON -->
            <button class="btn btn-accent">Enroll</button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODALS  -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_modal">
        <intro-video-modal @closeTriggered="toggleModal" />
      </transition>
    </portal>
  </div>
</template>

<script>
import introVideoModal from "@/components/modalComps/introVideoModal";

export default {
  name: "introContent",

  components: {
    introVideoModal,
  },

  data() {
    return {
      show_modal: false,
    };
  },

  methods: {
    toggleModal() {
      this.show_modal = !this.show_modal;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-content {
  margin-bottom: toRem(60);

  .video-intro {
    height: toRem(500);

    @include breakpoint-down(xl) {
      height: toRem(400);
    }

    @include breakpoint-down(lg) {
      height: toRem(350);
    }

    @include breakpoint-custom-down(860) {
      height: toRem(310);
    }

    @include breakpoint-down(md) {
      height: toRem(380);
    }

    @include breakpoint-down(sm) {
      height: toRem(320);
    }

    @include breakpoint-down(xs) {
      height: toRem(280);
    }

    .play-btn {
      @include breakpoint-down(xl) {
        @include square-shape(80);
      }

      @include breakpoint-down(lg) {
        @include square-shape(70);
      }

      @include breakpoint-down(sm) {
        @include square-shape(60);
      }

      @include breakpoint-down(xs) {
        @include square-shape(50);
      }
    }

    .girl-grass {
      @include background-cover;
    }

    .play-btn {
      @include center-placement;
    }
  }

  .text-wrapper {
    padding-left: toRem(35);

    @include breakpoint-down(lg) {
      padding-left: toRem(20);
    }

    @include breakpoint-down(md) {
      margin-top: toRem(35);
    }

    @include breakpoint-down(sm) {
      margin-top: toRem(22);
    }

    @include breakpoint-down(xs) {
      margin-top: toRem(24);
    }
  }

  .text-intro {
    @include flex-column-start-start;
    justify-content: center;
    align-items: flex-start;

    .title-text {
      @include font-height(31, 42);

      @include breakpoint-down(xl) {
        @include font-height(28, 38);
      }

      @include breakpoint-down(lg) {
        @include font-height(24, 32);
      }

      @include breakpoint-down(md) {
        @include font-height(25, 30);
      }

      @include breakpoint-down(sm) {
        @include font-height(23, 28);
      }

      @include breakpoint-down(xs) {
        @include font-height(21, 26);
      }
    }

    .meta-text {
      @include font-height(18, 23);

      @include breakpoint-down(xl) {
        @include font-height(15, 22);
      }

      @include breakpoint-down(lg) {
        @include font-height(14, 21);
      }

      @include breakpoint-down(md) {
        @include font-height(15.5, 24);
      }

      @include breakpoint-down(sm) {
        @include font-height(15.25, 25);
      }

      @include breakpoint-down(xs) {
        @include font-height(13, 21.5);
      }
    }

    .btn {
      @include breakpoint-down(lg) {
        padding: toRem(11) toRem(24);
        font-size: toRem(11);
      }
    }
  }
}
</style>
