<template>
    <div class="user-info">
        <div class="name-info">
            <img class="user-logo" :src="userInfo && userInfo.avatar_url" />
            <p>{{userInfo.loginname}}</p>
        </div>
        <div class="topic-info">
            <h4 class="info-title">最近参与的话题</h4>
            <TopicItem v-for="replie in userInfo.recent_replies || []" :key="replie.id" :info="replie" :onclick="()=>toTopicDetail(replie)" />
        </div>
        <div class="topic-info">
            <h4 class="info-title">最近创建的话题</h4>
            <TopicItem v-for="topic in userInfo.recent_topics || []" :key="topic.id" :info="topic" :onclick="()=>toTopicDetail(topic)" />
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import UserInfo from '@/components/userInfo/userInfo';
import TopicItem from '@/components/topicItem/topicItemBrief';
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        UserInfo,
        TopicItem,
    },
    data() {
        // let data = this.getUserInfo() || {};
        return {
            userInfo: {},
        }
    },
    computed: {

    },
    methods: {
        getUserInfo() {
            let username = this.$route.params.username;
            let userInfo = this.$store.state.userInfo[username];
            return userInfo;
        },
        toTopicDetail(topic) {
            this.$router.push('/topics/' + topic.id)
        }
    },
    created() {
        let { state, dispatch } = this.$store;
        let userInfo = this.getUserInfo();

        if (userInfo) {
            this.userInfo = userInfo;
            return;
        }

        const loading = this.$loading({
            lock: true,
            text: 'Loading...',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.1)'
        });

        let username = this.$route.params.username;

        dispatch('getUserInfo', username).then((res) => {
            this.userInfo = this.getUserInfo() || {};
            loading.close();
        })
    }
}
</script>

<style scoped lang="less">
.user-info {
    .name-info {
        padding: 20px;
        background: #fff;
        text-align: center;
        margin-bottom: 20px;
        .user-logo {
            margin-top: 60px;
            width: 50px;
            height: 50px;
            margin: 30px auto 0px auto;
        }
    }
    .topic-info {
        background: #fff;
        margin-top: 20px;
        .info-title {
            margin: 0;
            padding: 0;
            line-height: 54px;
            text-indent: 1em;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: solid 1px #f0f0f0;
        }
        .topic-list {}
    }
}
</style>

<style scoped lang="less">

</style>
