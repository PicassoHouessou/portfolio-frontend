<template>
  <div class="col-lg-4 mb-4">
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="h5 font-weight-bold text-center mb-4">{{ skillName }}</h2>

      <!-- Progress bar 1 -->
      <div class="progress mx-auto" :data-value="+percentage"><span class="progress-left">
                        <span class="progress-bar border-primary"/></span>
        <span class="progress-right">
                        <span class="progress-bar border-primary"/></span>
        <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
          <div class="h2 font-weight-bold">{{ +percentage }}<sup class="small">%</sup></div>
        </div>
      </div>
      <!-- END -->

      <!-- Demo info -->
      <!--
      <div class="row text-center mt-4">
        <div class="col-6 border-right">
          <div class="h4 font-weight-bold mb-0">28%</div>
          <span class="small text-gray">Last week</span>
        </div>
        <div class="col-6">
          <div class="h4 font-weight-bold mb-0">60%</div>
          <span class="small text-gray">Last month</span>
        </div>
      </div>
      -->
      <!-- END -->

    </div>
  </div>

</template>

<script>

import jQuery from "jquery";

const $ = jQuery;
export default {
  name: "Skill",
  props:{
    skillName: {
      type: String,
      required: true,
    } ,
    percentage: {
      type: Number,
      required: true,
      default: 0,
    }
  }, mounted() {
      loadPercentage();
    }
}


const loadPercentage = function () {

    $(".progress").each(function () {
        const value = $(this).attr('data-value');
        const left = $(this).find('.progress-left .progress-bar');
        const right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

};
</script>

<style scoped>

</style>