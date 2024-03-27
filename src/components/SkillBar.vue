<template>
    <div class="col-md-6 animate-box">
        <div class="progress-wrap ftco-animate">
            <h3>{{ skillName }}</h3>
            <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" :aria-valuenow="+percentage"
                     class="progress-bar color-1" role="progressbar" :style="'width:'+percentage +'%;' ">
                    <span>{{ percentage }}%</span>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: "SkillBar",
    props: {
        skillName: {
            type: String,
            required: true,
        },
        percentage: {
            type: Number,
            required: true,
            default: 0,
        }
    }
}
</script>

<style scoped>

</style>