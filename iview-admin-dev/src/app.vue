<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                theme: this.$store.state.app.themeColor
            };
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    };
</script>

<style>
html,body{
    width: 100%;
    min-width: 1440px;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
    position: relative;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>
