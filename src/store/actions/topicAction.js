import axios from '@/util/axios';

const getTopicList = ({commit,state},params,callback)=>{
    return axios.get('/api/topics',{
        params: {
            ...params,
            mdrender: false,
        },
    }).then(res=>{
        commit('getTopicList',{ type: params.tab, list: res.data.data});
    })
}

const getTopicDetail = ({commit,state},params)=>{
    return axios.get('/api/topic/'+params.id).then(res=>{
        commit('saveTopicDetail',res.data.data);
    })
}

const collectTopic = ({commit},params)=>{
    return axios.post('/api/topic_collect/collect',{
        params,
    }).then(res=>{
        commit('collectTopic',res.data.data);
    })
}

const deCollextTopic = ({commit},params)=>{
    return axios.post('/api/topic_collect/de_collect ',{
        params,
    }).then(res=>{
        commit('deCollextTopic',res.data.data);
    })
}


export default {
    getTopicList,
    getTopicDetail,
    collectTopic,
    deCollextTopic,
}
