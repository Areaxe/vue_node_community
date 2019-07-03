<template>
    <div class="topic-detail">
        <div class="content">
            <user-info :info="topic" />
            <h2 class="title">{{topic.title}}</h2>
            <div v-html="topic.content"></div>
        </div>
        <div class="reply-panel">
            <p class="reply-length">{{replies.length}}条评论</p>
            <div class="reply-list">
                <div class="reply-item" v-for="reply in replies" :key="reply.id">
                    <div class="replyer-info">
                        <user-info :info="reply" class="user-info" />
                        <span class="thumb-up"><i class="thumbs-o-up" /> {{reply.ups.length}}</span>
                    </div>
                    <div v-html="reply.content"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import moment from 'moment';
import UserInfo from '@/components/userInfo/userInfo';
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        UserInfo,
    },
    data() {
        let id = this.$route.params.id;
        let data = this.topicDetail && this.topicDetail[id] || {};
        return {
            topic: {},
            replies: []
        }
    },
    computed: {

    },
    created() {
        let id = this.$route.params.id;
        this.loading = true;
        const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        this.$store.dispatch('getTopicDetail', { id }).then((res) => {
            let topic = this.$store.state.topicDetail[id] || {};
            this.topic = topic;
            this.replies = topic.replies || [];
            loading.close();
        })
    }
}
</script>

<style lang="less">
@import '../../style/markdown.less';
</style>

<style scoped lang="less">
.topic-detail {
    max-width: 1100px;
    margin: 0 auto;
    .replyer-info {
        margin-bottom: 10px;
    }
    .user-info {
        display: inline-block;
    }
    .thumb-up {
        color: #888;
        float: right;
    }
}

.title {
    margin: 10px 0;
}

.content {
    overflow: hidden;
    box-shadow: 0 0 5px 0px #f0f0f0;
    padding: 20px;
}

.content,
.reply-panel {
    background: #fff;
}

.reply-panel {
    background-color: #fff;
    margin-top: 20px;
}

.reply-list {
    padding: 20px;
}

.reply-length {
    border-bottom: solid 1px #f0f0f0;
    line-height: 42px;
    text-indent: 2em;
}

.reply-list {
    margin-top: 20px;
}

.reply-item {
    padding: 10px 0px;
    border-bottom: solid 1px #f0f0f0;
}
</style>
