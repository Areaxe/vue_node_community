<template>
    <div id="app">
        <el-container>
            <el-header>
                <node-header />
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/header/header';
export default {
    name: 'App',
    computed: {
    },
    components: {
        nodeHeader: Header,
    },
    mounted() {
        // console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(1, 0, false)
    }
}
</script>

<style lang="less">
@import './style/font-awesome/font-awesome.less';
html {
    touch-action: none;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: '雅黑';
    background: #f6f6f6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
}

h1 {
    font-size: 36px;
}

h2 {
    font-size: 30px;
}

h3 {
    font-size: 24px;
}

#app {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
}
</style>

<style scoped lang="less">
.el-header,
.el-main {
    padding: 0px;
}

.el-main{
    max-height: calc(100vh - 60px);
    position: relative;
}

.hide-panel,
.main-panel {
    width: 100vw;
}

.hide-panel {
    height: 100vh;
}

.main-panel {
    background-color: #f0f0f0;
    &.hide {
        margin-left: 100vw;
    }
    .show {
        margin-left: 0;
    }
}
</style>
