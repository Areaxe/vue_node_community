<template>
    <div class="sonkwo-header">
    <div class="logo"></div>
        <el-menu :default-active="activeIndex2" class="menu-list" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">游戏</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="community">社区</el-menu-item>
            <el-submenu index="2-3">
                <template slot="title">周边</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>

            <el-submenu index="2-4">
                <template slot="title">头条</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="community">客户端</el-menu-item>
        </el-menu>

    <div class="info-right">
            <el-input placeholder="请输入关键词" v-model="searchWord" @keyup.13.native="toSearch" class="input-with-select">
            <el-select value="1" v-model="select" slot="prepend">
                <el-option v-for="item in searchTypes" :label="item.label" :value="item.value" :key="item.value"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <div class="user-info">
            <span class="info-text-left">登录</span>
             |
            <span class="info-text-right">注册</span>
        </div>
    </div>


    </div>

</template>

<script>
import router from 'vue-router';

export default {
    name: 'sonkwoheader',
    data() {
        return {
            searchWord: '',
            searchTypes: [
                { label: '商城', value: '1' },
                { label: '社区', value: '2' },
                { label: '周边', value: '3' },
            ]
        }
    },
    methods: {
        toSearch: function(e){
            let value = e.target.value;
            this.$router.push({path: '/store/search?keyword=' + value});
            console.log(e)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.sonkwo-header {
    height: 70px;
    background-color: #292e41;
    color: #7a80a2;
    overflow: hidden;
    .logo{
        width: 110px;
        float: left;
        height: 70px;
    }
    .info-right{
        float: right;
        margin-right: 40px;
        .info-text-left{
            cursor: default;
            margin-right: 10px;
        }
        .info-text-right{
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
    .el-input-group--append{
        .el-input__inner{
            padding: 0 10px;
            height: auto;
            line-height: 34px;
            box-sizing: border-box;
            border: none;
        }
        .el-input-group__prepend{
            background-color: transparent;
            padding: 0px 20px;
            width: 70px;
            box-sizing: border-box;
            text-align: center;
            height: 34px;
        }
    }
    .el-input-group__append{
        width: 36px;
        padding: 0;
        box-sizing: border-box;
        background-color: #dcdcdc;
        .el-button{
            margin: -10px;
        }
        .el-icon-search{
            font-weight: bold;
            font-size: 18px;
            color: #313131;
        }
    }
    .user-info{
        float: right;
        line-height: 70px;
    }
}

.el-menu--horizontal {
    .el-submenu {
        .el-submenu__title {
            line-height: 70px;
            height: 70px;
            border-bottom: none;
            color: inherit;
            &:hover {
                background: transparent;
            }
        }
        &.is-active{
           .el-submenu__title{
               border-bottom: none;
            color: inherit;
           }
        }
    }
    .el-menu-item {
        line-height: 70px;
        height: 70px;
        border-bottom: none;
        color: inherit;
        &:not(.is-disabled):hover {
            color: #b9c0ef;
            background-color: transparent;
        }
    }
    .el-menu {
        background-color: #292e41;
        .el-menu-item {
            background-color: transparent;
            color: #7a80a2;
        }
        &--popup {
            width: 160px;
            line-height: 40px;
            background: #292e42;
            border: 1px solid 2px;
            box-shadow: 0 0 10px 0 #1d2133;
        }
    }
}

.menu-list {
    float: left;
    margin-left: 100px;
    border-bottom: none;
    background-color: #292e41;
    &.el-menu--horizontal {
        border-bottom: none;
    }
    .el-menu-item {
        line-height: 70px;
        height: 70px;
        color: inherit;
        &:hover {
            color: #b9c0ef;
            background-color: transparent;
        }
    }
    .el-menu-item,
    .el-submenu,
    .el-submenu__title {
        background-color: transparent;
    }
    .el-submenu {
        line-height: 70px;
        height: 70px;
        &:hover {
            .el-submenu__title {
                color: #b9c0ef;
            }
        }
    }
    .el-menu--popup {
        box-shadow: 0 0 0 0 #000;
    }
    .el-menu {
        background-color: #292e41;
        border: solid 1px #666;
    }
}
</style>
