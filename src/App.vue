<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

     <!-- GRADELY PORTAL TARGET -->
    <portal-target name="gradely-modals"> </portal-target>
  </div>
</template>

<script>
export default {
  name: "App",

  metaInfo: {
    title: "Summer School",
    titleTemplate: "%s - Gradely.Ng",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
}
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in;
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
