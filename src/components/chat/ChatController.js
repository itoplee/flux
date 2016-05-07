let React = require('react');
let Card = require('./Card');
let List = require('./List');
let Message = require ('./Message');
let Text = require('./Text');
let ChatStore = require('../../stores/ChatStore');
let ChatActions = require('../../actions/ChatActions');

module.exports = React.createClass({
	getInitialState () {
		return {
			users: ChatStore.getUsers(),
			sessonList: ChatStore.getSessionList()
		};
	},
	componentDidMount () {
		ChatStore.addChangeListener(this._onChange);
	},
	componentWillMount () {
		ChatStore.removeChangeListener(this._onChange);
	},
 	_onChange () {
	    this.setState({
	      users: ChatStore.getUsers(),
			sessonList: ChatStore.getSessionList()
	    });
  	},
  	chooseUser(userId) {
  		ChatActions.changeUser(userId);
  	},
  	searchUser(name){
  		ChatActions.searchUser(name);
  	},
  	addQues(text) {
  		ChatActions.addQues(3, text, '1.jpg');
  	},
	render () {
		return (
			<div style={{height: '100%'}}>
				<div className="sidebar">
					<Card searchUser={this.searchUser}/>
					<List list={this.state.users} chooseUser={this.chooseUser}/>
				</div>
				<div className="main">
					<Message sessonList={this.state.sessonList}/>
					<Text addQues={this.addQues}/>
				</div>
			</div>
		);
	}
});