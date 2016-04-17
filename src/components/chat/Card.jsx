let React = require('react');

module.exports = (props) => {
	let search = (e) => {
		props.searchUser(e.target.value);
		e.preventDefault();
	};

	return (
		<div className="s-header">
			<header>
				<img src="/assets/imgs/1.jpg"/>
				<p>王五</p>
			</header>
			<footer>
				<input type="text" placeholder="用户检索" onChange={search} />
			</footer>
		</div>
	);
};