<template>
<div>
    <router-view/>
    <navList></navList>
</div>
    
</template>

<script>
import Nav from '../components/Nav.vue';

export default ({
      components: {
        'navList': Nav
    },
    data(){
        return {

        }
    }
})
</script>


<style lang="less" scoped>

</style>