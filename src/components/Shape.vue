<template>
    <heart v-if="name=='Heart'" :color="color"></heart>
    <diamond v-if="name=='Diamond'" :color="color"></diamond>
    <star v-if="name=='Star'" :color="color"></star>
    <traingle v-if="name=='Traingle'" :color="color"></traingle>
    <hexagone v-if="name=='Hexagone'" :color="color"></hexagone>
    
</template>
<script>
export default {
    name:'Shape',
    props:['name','color']
}
</script>
<style scoped>

</style>