<template>
    <div class="topic-item" v-on:click="onItemClick">
        <div>
            <img class="user-logo" :src="author.avatar_url" />
            <div class="other-info">
                <p class="user-name">{{author.loginname}}</p>
                <p class="create-at">发表于:{{createTime}}</p>
            </div>
        </div>
        <div class="title">{{info.title}}</div>
        <div class="content">{{content}}</div>
        <div class="interaction">
            <span class="interaction-item">
                                <i class="el-icon-chat-line-round"></i>
                                {{info.reply_count||0}}
                                条评论
                                </span>
            <span class="interaction-item">
                                <i class="el-icon-view"></i>
                                {{info.visit_count}}
                                次查看
                                </span>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';
import moment from 'moment';

export default {
    name: 'sonkwoheader',
    data() {
        return {}
    },
    props: ['info', 'onclick'],
    computed: {
        author: vm => vm.info.author || {},
        createTime: vm => {
            let time = vm.info.create_at;
            return moment(time).format('YYYY-MM-DD HH:mm:ss');
        },
        content: vm => {
            let content = vm.info.content || '';
            return content.length > 250 ? content.substring(0, 250) + '...' : content
        }
    },
    methods: {
        onItemClick(e) {
            if(this.onclick){
                this.onclick(e,this.info);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topic-item {
    padding: 10px 20px;
    border-bottom: solid 1px #f0f0f0;
}

.user-logo {
    width: 42px;
    height: 42px;
    border-radius: 50%;
}

.content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 10px 0;
}

.title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
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
