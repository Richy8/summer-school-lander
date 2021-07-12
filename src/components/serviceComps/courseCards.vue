<template>
  <div class="course-cards position-relative white-text-bg overflow-hidden">
    <!-- HERO SECTION -->
    <div class="gradely-container position-relative h-100 my-auto">
      <div class="text-content h-100">
        <!-- CHILD IMAGE  -->
        <div class="child-block">
          <img
            v-lazy="staticImg('magnifier.png')"
            alt=""
            class="child-image index-9"
          />
        </div>
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 brand-navy">
          Find a course
        </div>

        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-500 color-text">
          Join up to 3 classes based on your child's age group.
        </div>
      </div>
      <div class="text-content h-100">
        <!-- CHILD IMAGE  -->
        <div class="child-block">
          <img
            v-lazy="staticImg('learningGraph.png')"
            alt=""
            class="child-image index-9"
          />
        </div>
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 brand-navy">
          Project based lessons
        </div>

        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-500 color-text">
          Your child watches the weekly video lessons and practices the projects
        </div>
      </div>
      <div class="text-content h-100">
        <!-- CHILD IMAGE  -->
        <div class="child-block">
          <img
            v-lazy="staticImg('playVideo.png')"
            alt=""
            class="child-image index-9"
          />
        </div>
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 brand-navy">
         Weekly Q&A
        </div>

        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-500 color-text">
         Your child joins the weekly group classes to get support from the facilitators.
        </div>
      </div>
      <div class="text-content h-100">
        <!-- CHILD IMAGE  -->
        <div class="child-block">
          <img
            v-lazy="staticImg('createProject.png')"
            alt=""
            class="child-image index-9"
          />
        </div>
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 brand-navy">
          Create project
        </div>

        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-500 color-text">
          Your child builds their project portfolio.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseCards",
};
</script>

<style lang="scss" scoped>
.course-cards {
  @include flex-row-between-wrap;
  top: toRem(90);
  height: 50vh;
  @include breakpoint-down(md) {

        height: 250vh;
    }

   .gradely-container {
    @include flex-row-between-nowrap;
    width: 100%;
    @include breakpoint-down(lg) {
        @include flex-row-evenly-wrap;
        width: 100%;
    }
  }

  .text-content {
    @include flex-column-center;
    justify-content: center;
    width: 22%;

    .title-text {
      @include font-height(21, 32);
      font-weight: 700;
      justify-content: center;
      text-align: center;
    }

    .meta-text {
      @include font-height(16, 22);
      text-align: center;
    }

    .child-block {
       
      
       
      

  .child-image {
    
  }
}
  }
}
</style>
