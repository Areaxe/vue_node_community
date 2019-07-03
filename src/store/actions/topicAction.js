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


export default {
    getTopicList,
    getTopicDetail,
}
