<template>
    <div class="col-md-4 text-center d-flex ftco-animate">
        <a href="#" class="services-1 shadow">
							<span class="icon">
								<i :class="icon"></i>
							</span>
            <div class="desc">
                <h3 class="mb-5">{{ cName }}</h3>
                <p>{{  description }}</p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'ServiceCard',
    props : {
        cName: {
            required: true,
            type: String
        },
        description:{
            required: false,
            default: '',
            type: String

        },
        icon : {
            required: false,
            default: 'flaticon-analysis',
            type: String
        }
    }
}
</script>
