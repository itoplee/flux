let React = require('react');

module.exports = (props) => {
	let users = props.list;
	let chooseUser = (user) => {
		return () => {
			props.chooseUser(user.id);
		};
	};
	let html = props.list.map((user) => {		
		return (
			<li key={user.id} className={user.isActive ? 'active' : ''} onClick={chooseUser(user)}>
				<img src={"/assets/imgs/" + user.icon}/>
				<p>{user.name}</p>
			</li>
		);
	});

	return <ul className="s-list">{html}</ul>
};