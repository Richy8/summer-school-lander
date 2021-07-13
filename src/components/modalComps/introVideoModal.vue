<template>
  <modal-cover
    @closeModal="$emit('closeTriggered')"
    :show_close_btn="true"
    :modal_style="modal_style"
  >
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header"> </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <div class="video-block w-100 h-100">
          <iframe
            src="https://www.youtube.com/embed/6NMxADANn8k"
            title="Gradely Summer School"
            frameborder="0"
            class="w-100 h-100"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer"> </template>
  </modal-cover>
</template>

<script>
import modalCover from "@/components/modalComps/modalCover";

export default {
  name: "introVideoModal",

  components: {
    modalCover,
  },

  data() {
    return {
      modal_style: {
        shape: "rounded-7",
        size: "modal-md-lg",
        background: "black-text-bg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-cover-body {
  height: 70vh;
  max-height: 70vh;

  @include breakpoint-down(xs) {
    height: 55vh;
    max-height: 55vh;
  }
}
</style>
