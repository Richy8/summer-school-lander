<template>
  <div class="service-section">
    <div class="gradely-container px-3 mx-auto">
      <!-- TITLE TEXT  -->
      <div class="title-text font-weight-700 brand-navy text-center">
        How it works
      </div>

      <!-- SERVICES  -->
      <div class="row d-flex justify-content-center mgb-70">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(service, index) in services"
          :key="index"
        >
          <service-column :service="service" />
        </div>
      </div>

      <!-- COURSE TITLE TEXT  -->
      <div class="title-text text-two font-weight-700 brand-navy text-center">
        Interest-led classes your children will love!
      </div>

      <!-- COURSES  -->
      <div class="course-row w-100 mgb-90">
        <course-card
          v-for="(course, index) in courses"
          :key="index"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script>
import serviceColumn from "@/components/serviceComps/serviceColumn";
import courseCard from "@/components/serviceComps/courseCard";

export default {
  name: "serviceSection",

  components: {
    serviceColumn,
    courseCard,
  },

  data() {
    return {
      services: [
        {
          title: "Find a course",
          description: "Join up to 3 classes based on your child's age group.",
          icon: "Search.svg",
          icon_bg: "brand-red-light-bg",
        },
        {
          title: "Project based lessons",
          description:
            "Your child watches the weekly video lessons and practices the projects",
          icon: "Activity.svg",
          icon_bg: "brand-accent-light-bg",
        },
        {
          title: "Weekly Q&A",
          description:
            "Your child joins the weekly group classes to get support from the facilitators.",
          icon: "Play.svg",
          icon_bg: "light-green-bg",
        },
        {
          title: "Create Project",
          description: "Your child builds their project portfolio.",
          icon: "Work.svg",
          icon_bg: "semi-light-green-bg",
        },
      ],

      courses: [
        {
          title: "Coding",
          description:
            "During these classes, your child will improve their logical thinking, creative thinking, and",
          route: "",
          image: "coding.png",
        },
        {
          title: "Visual Design",
          description:
            "Help your child release their creativity while building valuable communication skill for the",
          route: "",
          image: "digitalDesign.png",
        },
        {
          title: "Culinary",
          description:
            "This is for the enthusiastic food lovers that would like to engage their 5 senses. At the",
          route: "",
          image: "fineDining.png",
        },
        {
          title: "Dance",
          description:
            "Your active and vibrant child will learn fun and enthralling dance styles that will come",
          route: "",
          image: "dance.png",
        },
        {
          title: "Entrepreneurship",
          description:
            "For the creative problem solvers, this 5 week course will help your child understand",
          route: "",
          image: "entrpreneurship.png",
        },
        {
          title: "Video Production",
          description:
            "Your child will learn to produce, create, and edit videos they can use for video adverts",
          route: "",
          image: "videoProduction.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service-section {
  .title-text {
    margin-bottom: toRem(60);
    @include font-height(28, 32);

    @include breakpoint-down(xl) {
      @include font-height(25, 28);
      margin-bottom: toRem(45);
    }

    @include breakpoint-down(lg) {
      @include font-height(22, 24);
    }

    @include breakpoint-down(md) {
      @include font-height(20, 22);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(sm) {
      @include font-height(18, 20);
      margin-bottom: toRem(40);
    }
  }

  .text-two {
    @include font-height(25, 28);
    margin-top: toRem(30);
    margin-bottom: toRem(80);

    @include breakpoint-down(xl) {
      @include font-height(22, 24);
      margin-bottom: toRem(70);
    }

    @include breakpoint-down(lg) {
      @include font-height(20, 24);
    }

    @include breakpoint-down(md) {
      @include font-height(18.5, 24);
      margin-bottom: toRem(60);
    }

    @include breakpoint-down(sm) {
      @include font-height(18, 24);
    }

    @include breakpoint-down(xs) {
      @include font-height(17, 23);
      margin-bottom: toRem(50);
    }
  }

  .course-row {
    @include flex-row-evenly-wrap;
  }
}
</style>
