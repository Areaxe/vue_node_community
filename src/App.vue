<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="less">
@import './style/font-awesome/font-awesome.less';
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
