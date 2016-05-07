let React = require('react');
module.exports = (props) => {
	let addQues = (e) => {
		if((e.which == 13) && e.ctrlKey) {
			props.addQues(e.target.value);
			e.target.value = "";
		}
	};
	return (
		<div className="m-text">
			<textarea type="text" placeholder="按 Ctrl + Enter 发送" onKeyDown ={addQues}></textarea>
		</div>
	);
};