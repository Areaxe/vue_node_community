<template>
    <div class="node-header">
        <div class="logo"><img src="@/assets/cnodejs_light.svg" /></div>
        <el-dropdown class="menu-list">
            <span class="el-dropdown-link">
            <i class="fa fa-navicon menu-list-icon"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'sonkwoheader',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@headerHeight: 60px;
.node-header {
    height: @headerHeight;
    background-color: #292e41;
    color: #7a80a2;
    overflow: hidden;
    position: relative;
    .logo {
        width: 120px;
        height: @headerHeight;
        margin: 0 auto;
        >img {
            margin-top: 12px;
        }
    }
    .menu-list {
        position: absolute;
        right: 10px;
        top: 15px;
        color: #f8f8f8;
        &-icon{
            font-size: 18px;
        }
    }
    .info-right {
        float: right;
        margin-right: 40px;
        .info-text-left {
            cursor: default;
            margin-right: 10px;
        }
        .info-text-right {
            cursor: default;
            margin-left: 10px;
        }
    }
    .input-with-select {
        height: 32px;
        background-color: #ffffff;
        width: 260px;
        position: relative;
        font-size: 14px;
        border-radius: 3px 3px 3px 3px;
        margin: 18px 50px 18px 0;
    }
}
</style>
