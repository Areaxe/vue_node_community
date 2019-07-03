<template>
    <div class="home-page">
        <el-tabs class="header" v-model="query.tab" @tab-click="onTabClick">
            <el-tab-pane v-loading="loading" element-loading-text="数据加载中..." element-loading-spinner="el-icon-loading" v-for="item in navs" :key="item.value" :label="item.title" :name="item.value">
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
            loading: false,
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
            // 刷新参数放到这里里面去触发就可以刷新相同界面了
            this.getTopics()
        }
    },
    methods: {
        onTabClick(e) {
            let type = e && e._props.name;
            this.$router.push('/?type=' + type)
        },

        getTopics(isForce) {
            let tab = this.$route.query.type;
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
            store.dispatch('getTopicList', params).then(() => {
                this.loading = false;
                this.topics = store.state.topics;
                this.pageInfo = store.state.topicPageInfo;

                this.$store.commit('saveTopicPageInfo', {
                    type: tab,
                    page,
                });
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
.home-page {
    .el-loading-mask {
        font-size: 36px;
    }
    .el-tabs__nav-wrap::after {
        height: 1px;
    }
    .el-tab-pane {
        min-height: calc(100vh - 60px);
    }
}

.el-tabs__nav {
    margin-left: 60px;
}

.el-tabs__item {
    line-height: 60px;
    height: 60px;
}

.el-tabs__header {
    margin: 0;
}
</style>

<style lang="less" scoped>
.home-page {
    background-color: #fff;
    height: 100%;
}

.item-container {
    overflow-y: auto;
    max-height: calc(100vh - 60px);
    padding-top: 8px;
}

.header {
    position: fixed;
    top: 0;
    width: 100vw;
}
</style>

