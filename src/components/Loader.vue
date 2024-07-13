
<template>
  <div  v-if="isLoading">
    <div id="ambrox-preloader" class="ambrox-preloader" :class="{'loaded':isLoading}">
      <div class="animation-preloader">
        <div class="spinner"/>
        <div class="txt-loading">
                    <span data-text-preloader="P" class="letters-loading">
                        P
                    </span>
          <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
          <span data-text-preloader="C" class="letters-loading">
                        C
                    </span>
          <span data-text-preloader="A" class="letters-loading"/>
          <span data-text-preloader="S" class="letters-loading">
                        S
                    </span>
          <span data-text-preloader="S" class="letters-loading">
                        S
                    </span>
          <span data-text-preloader="O" class="letters-loading">
                        O
                    </span>
        </div>
      </div>
      <div class="loader">
        <div class="row">
          <div class="col-3 loader-section section-left">
            <div class="bg"/>
          </div>
          <div class="col-3 loader-section section-left">
            <div class="bg"/>
          </div>
          <div class="col-3 loader-section section-right">
            <div class="bg"/>
          </div>
          <div class="col-3 loader-section section-right">
            <div class="bg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  throttle: {
    type: Number,
    default: 200
  },
  duration: {
    type: Number,
    default: 2000
  },
  height: {
    type: Number,
    default: 3
  },
  color: {
    type: [String, Boolean],
    default: 'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)'
  },
  estimatedProgress: {
    type: Function as unknown as () => (duration: number, elapsed: number) => number,
    required: false
  }
})

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: props.duration,
  throttle: props.throttle,
  estimatedProgress: props.estimatedProgress
})

</script>

<style lang="scss" scoped>
.loaded #loading {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>