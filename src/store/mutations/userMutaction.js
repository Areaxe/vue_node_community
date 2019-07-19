const saveUserInfo = (state,data)=>{
    let userInfo = state.userInfo[data.name] || {};
    state.userInfo[data.name] = data.data;
}

const saveUserTopics = (state,data)=>{
    state.userTopic[data.name] = data.list;
}

module.exports = {
    saveUserInfo,
    saveUserTopics,
}
