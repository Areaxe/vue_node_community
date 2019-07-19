<template>
    <div class="home-page">
        <el-tabs v-model="query.tab" @tab-click="onTabClick">
            <el-tab-pane v-loading="loading" element-loading-text="Loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 0.1)" v-for="item in navs" :key="item.value" :label="item.title" :name="item.value">
                <div class="item-container" v-on:scroll="onItemScroll">
                    <topic-item v-for="info in topics && topics[item.value] ||[]" :info="info" :key="info.id" :onclick="toTopicDetail"></topic-item>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Header from '@/components/header/header';
import TopicItem from '@/components/topicItem/topicItem';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Home',
    components: {
        TopicItem
    },
    data() {
        let { topics, topicPageInfo } = this.$store.state || {};
        return {
            loading: true,
            navs: [
                { title: '精华', value: 'good' },
                { title: '分享', value: 'share' },
                { title: '问答', value: 'ask' },
                { title: '招聘', value: 'job' }
            ],
            topics,
            pageInfo: topicPageInfo || {},
        }
    },
    watch: {
        '$route' (to, from) {
            this.getTopics()
        }
    },
    methods: {
        onTabClick(e) {
            let type = e && e._props.name;
            this.$router.push('/?type=' + type)
        },

        getTopics(isForce) {
            let tab = this.$route.query.type || 'good';
            let pageInfo = this.pageInfo;
            let topics = this.topics || {};
            let store = this.$store;
            if (topics[tab] && !isForce) {
                return;
            }

            let page = pageInfo['page_' + tab] || 0;
            page += 1;

            let params = {
                page,
                tab,
                limit: 10,
            }
            this.loading = true;
            store.dispatch('getTopicList', params).then((state) => {
                store.commit('saveTopicPageInfo', {
                    type: tab,
                    page,
                });
                this.loading = false;
                this.topics = store.state.topics;
                this.pageInfo = store.state.topicPageInfo;


            });
        },

        onItemScroll(e) {
            let target = e && e.target;
            let { scrollTop, clientHeight, scrollHeight } = target;
            if (scrollTop + clientHeight >= scrollHeight) {
                this.getTopics(true)
            }
        },
        toTopicDetail(target, info) {
            this.$router.push('/topics/' + info.id);
        }

    },
    computed: {
        query: (vm) => {
            let { query } = vm.$route;
            return {
                tab: query.type || 'good',
                page: 1,
                per: 10,
            }
        },

    },
    created: function() {
        this.getTopics();
    }
}
</script>


<style lang="less">
@headerHeight: 60px;
@tabHeaderHeight: 52px;
.home-page {
    position: relative;
    .el-tabs__nav-wrap::after {
        height: 1px;
    }
    .el-tab-pane {
        min-height: calc(100vh - @headerHeight - @tabHeaderHeight);
    }
}

.el-tabs__header {
    margin: 0;
    // position: absolute;
    top:0;
}

.el-tabs__nav {
    // margin-left: calc(50vw - 124px);
    text-align: center;
    width: 100%;
}
.el-tabs__active-bar{
    display: none;
}

.el-tabs__item {
    line-height: @tabHeaderHeight;
    height: @tabHeaderHeight;
    font-size: 16px;
    width: 20%;
    max-width: 120px;
    float: none;
    margin: 0 auto;
}
</style>

<style lang="less" scoped>
.home-page {
    background-color: #fff;
    height: 100%;
}

.item-container {
    overflow-y: auto;
    box-sizing: border-box;
    height: calc(100vh - 120px);
    max-height: calc(100vh - 120px);
    padding-top: 8px;
}

.header {
    // position: fixed;
    top: 0;
    width: 100vw;
}
</style>

