<template>
    <div class="topic-item" v-on:click="onItemClick">
        <img class="user-logo" :src="author.avatar_url" />
        <div class="title">{{info.title}}</div>
    </div>
</template>

<script>
import router from 'vue-router';
import moment from 'moment';

export default {
    data() {
        return {}
    },
    props: ['info', 'onclick'],
    computed: {
        author: vm => vm.info.author || {},
    },
    methods: {
        onItemClick(e) {
            if (this.onclick) {
                this.onclick(e, this.info);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topic-item {
    background-color: #fff;
    padding: 10px 20px;
    border-bottom: solid 1px #f0f0f0;
    display: flex;
    flex-direction: row;
    .user-logo {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 8px;
    }
    .title {
        font-size: 16px;
        margin-top: 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
</style>
