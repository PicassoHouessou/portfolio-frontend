<template>
    <a class="smooth-menu" @click="handleClick">
            <IconsIconDark v-show="colorMode.preference==='dark'"/>
            <IconsIconLight v-show="colorMode.preference==='light'"/>
            <IconsIconSystem v-show="colorMode.preference==='system'"/>
          </a>

</template>

<script setup lang="ts">
const colorMode = useColorMode();

const handleClick=()=>{
  if(!colorMode.unknown){
    if( "light" === colorMode.preference|| 'light'===colorMode.value ){
      colorMode.preference = 'dark'
    }else
    {
      colorMode.preference='light'}
}
}
</script>
<style scoped>

.feather {
  position: relative;
  cursor: pointer;

  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.preferred .feather {
  border-color: var(--color-primary);
  top: -3px;
}



</style>