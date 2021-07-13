<template>
  <div>
    <!-- Renders the top section of the landing page -->
    <hero-banner />

    <!-- INTRO SECTION  -->
    <intro-content />

    <!-- SERVICES  -->
    <service-section />

    <!-- FACILITATORS  -->
    <partner-block />
  </div>
</template>

<script>
import heroBanner from "@/components/heroSectionComps/heroBanner";
import introContent from "@/components/introSectionComps/introContent";
import serviceSection from "@/components/serviceComps/serviceSection";
import partnerBlock from "@/components/partnersComps/partnerBlock";

export default {
  name: "summerschool",

  components: {
    heroBanner,
    introContent,
    serviceSection,
    partnerBlock,
  },
};
</script>

<style lang="scss" scoped></style>
