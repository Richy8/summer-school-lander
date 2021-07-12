<template>
  <div class="app-layout">
  <!-- BASE NAVBAR -->
    <baseNavbar />

     <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import baseNavbar from "@/layout/baseNavbar";

export default {
  name: "AppLayout",

  components: {
    baseNavbar,
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
}
</style>
