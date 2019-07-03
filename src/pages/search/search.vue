<template>
    <div id="app">
        <sonkwo-header></sonkwo-header>
        Search
        <router-view/>
    </div>
</template>

<script>
    import Header from '@/components/header/header';
    export default {
        components: {
            sonkwoHeader: Header
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    body {
        background: #202539;
    }
</style>
