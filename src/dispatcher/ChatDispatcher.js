let Dispatcher = require('flux').Dispatcher;
let ChatStore = require('../stores/ChatStore.js');
let ChatDispatcher = new Dispatcher();

ChatDispatcher.register((action) => {
	switch(action.actionType){
		case "CHANGE_USER":
			ChatStore.changeUserHandler(action.id);
			ChatStore.emitChange();
		break;
		case "SEARCH_USER":
			ChatStore.searchUserHandler(action.name);
			ChatStore.emitChange();
		break;
		case "ADD_QUES":
			ChatStore.addQuesHandler(action.qid, action.text, action.icon);
			ChatStore.emitChange();
			break;
	}
});
module.exports = ChatDispatcher;