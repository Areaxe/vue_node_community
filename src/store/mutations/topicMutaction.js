const getTopicList = (state,data)=>{
    let oldList = state.topics[data.type] || [];
    state.topics[data.type] = oldList.concat(data.list);
}


const saveTopicPageInfo = (state,data)=>{
    state.topicPageInfo['page_'+data.type] = data.page;
}

const saveTopicDetail = (state,data) =>{
    state.topicDetail[data.id] = data;
}

const collectTopic = (state,data) =>{
    state.topicDetail[data.id].is_collect = true;
}

const deCollectTopic = (state,data) =>{
    state.topicDetail[data.id].is_collect = false;
}



module.exports = {
    getTopicList,
    saveTopicPageInfo,
    saveTopicDetail,
    collectTopic,
    deCollectTopic,
}
