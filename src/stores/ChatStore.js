let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

let getActiveUser = (list) => {
    let user = null;
    list.map((item) => {
        if (item.isActive) {
            user = item;
        }
    });

    return user;
}

let getSessionUser = (list, id) => {
    let user = null;
    list.map((item) => {
        if (item.userId === id) {
            user = item;
        }
    })
    return user;
}

module.exports = assign({}, EventEmitter.prototype, {
    data: {
        users: [
            { id: 1, name: '张三', isActive: true, icon: "3.jpg" },
            { id: 2, name: '李四', isActive: false, icon: "2.png" }
        ],
        searchaKey: '',
        sessionList: [{
            userId: 1,
            messages: [
                { text: 'Hello，这是一个基于Flux + React构建的简单chat示例，聊天记录保存在localStorge。简单演示了Flux的基础特性和webpack配置。', time: "9:34" },
                { text: '项目地址: https://github.com/coffcer/vue-chat', time: "10:9" }
            ],
            ques: []
        }, {
            userId: 2,
            messages: [
                { text: 'Hello，这是一个基于asd。', time: "9:34" },
                { text: 'Hello，这是一个基于asd。', time: "9:34" },
                { text: '项目地址: https://github.com/coffcer/vue-chat', time: "10:9" }
            ],
            ques: []
        }]
    },

    getUsers() {
        if (this.data.searchaKey.length > 0) {
            return this.data.users.filter(item => item.name.indexOf(this.data.searchaKey) > -1);
        }
        return this.data.users;
    },
    getSessionList() {
        let user = getActiveUser(this.data.users);
        let obj = null;
        if (user) {
            obj = getSessionUser(this.data.sessionList, user.id);
            if (obj) {
                obj.user = user;
            }
        }
        return obj;
    },
    changeUserHandler(id) {
        this.data.users.map((user) => {
            user.isActive = (id === user.id);
        });
    },
    searchUserHandler(name) {
        this.data.searchaKey = name;
    },
    addQuesHandler(qid, text, icon) {
        let user = getActiveUser(this.data.users);
        if (user) {
            let session = getSessionUser(this.data.sessionList, user.id);
            if (session) {
                let d = new Date();
                session.ques.push({
                    id: qid,
                    text: text,
                    icon: icon,
                    time: d.getHours() + ":" + d.getMinutes()
                });
            }
        }
    },
    addChangeListener(callback) {
        this.on('change', callback);
    },
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },
    emitChange() {
        this.emit('change');
    }
});
