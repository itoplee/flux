var React = require('react');

module.exports = (props) => {
	let html = props.sessonList.messages.map((item, i) => {
		return (
			<div key={i} className="m-message-item">
				<img src={"/assets/imgs/" + props.sessonList.user.icon} />
				<p>{item.time}</p>
				<div>{item.text}</div>
			</div>
		);
	});
	let ques = props.sessonList.ques.map((item, i) => {
		return (
			<div key={i} className="m-message-ques">
				<img src={"/assets/imgs/" + item.icon} />
				<p>{item.time}</p>
				<div>{item.text}</div>
			</div>
		);
	});
	return (
		<div className="m-message">{html}{ques}</div>
	);
};