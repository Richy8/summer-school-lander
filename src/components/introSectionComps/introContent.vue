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
            <img v-lazy="staticImg('playBtn.svg')" alt="" class="index-9 play-btn pointer">
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

    <!-- <div class="child-block">
        <iframe
          src="https://www.youtube.com/embed/6NMxADANn8k"
          title="YouTube video player"
          frameborder="0"
          class="child-image index-9"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "introContent",
};
</script>

<style lang="scss" scoped>
.text-wrapper {
  padding-left: toRem(35);
}

.video-intro {
  height: toRem(500);

  .girl-grass {
    @include background-cover;
  }

  .play-btn {
    @include center-placement;
  }
}

.intro-content {
  margin-bottom: toRem(100);

  .text-intro {
    @include flex-column-start-start;
    justify-content: center;
    align-items: flex-start;

    .title-text {
      @include font-height(31, 42);
    }

    .meta-text {
      @include font-height(18, 29);
    }
  }
}
</style>
