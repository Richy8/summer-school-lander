<template>
  <div>
    <!-- Renders the top section of the landing page -->
    <hero-banner/>

    <!-- INTRO SECTION  -->
    <intro-content/>
  </div>
</template>


<script>
import heroBanner from '@/components/heroSectionComps/heroBanner'
import introContent from '@/components/introSectionComps/introContent'
// import courseCards from '@/components/serviceComps/courseCards'

export default {
  name: 'summerschool',

  components: {
    heroBanner,
    introContent,
    // courseCards
  }
}

</script>

<style lang="scss" scoped>
</style>
