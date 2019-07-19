<template>
    <div class="user-info">
        <img class="user-logo" :src="author.avatar_url" />
        <div class="other-info">
            <router-link :to="'/user/'+author.loginname" class="user-name">{{author.loginname}}</router-link>
            <p class="create-at">发表于:{{createTime}}</p>
        </div>
    </div>

    </div>
</template>

<script>
import router from 'vue-router';
import moment from 'moment';

export default {
    name: 'userInfo',
    data() {
        return {}
    },
    props: ['info'],
    computed: {
        author: vm => vm.info.author || {},
        createTime: vm => {
            let time = vm.info.create_at;
            return moment(time).format('YYYY-MM-DD HH:mm:ss');
        },
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
<style scope lang="less">
.user-logo {
    width: 42px;
    height: 42px;
    border-radius: 50%;
}

.other-info {
    display: inline-block;
    vertical-align: top;
    margin-left: 8px;
    .create-at {
        font-size: 12px;
        color: #aaa;
        margin-top: 5px;
    }
}

.user-name {
    color: #409EFF;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
}

.interaction {
    margin-top: 10px;
    .interaction-item {
        font-size: 14px;
        margin-right: 15px;
        color: #999;
    }
}
</style>
