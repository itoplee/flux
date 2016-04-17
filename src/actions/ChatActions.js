let ChatDispatcher = require('../dispatcher/ChatDispatcher.js');

module.exports = {
	changeUser (id) {
		ChatDispatcher.dispatch({
			actionType: 'CHANGE_USER',
			id: id
		});
	},
	searchUser(name){
		ChatDispatcher.dispatch({
			actionType: 'SEARCH_USER',
			name: name
		});
	},
	addQues(qid, text, icon){
		ChatDispatcher.dispatch({
			actionType: 'ADD_QUES',
			qid: qid,
			text: text,
			icon: icon
		});
	}
};