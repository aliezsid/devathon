import React from "react";

const styles = {
	btn: {
		padding: "9px",
		display: "inline-block",
		cursor: "pointer"
	},
	btnPrimary: {
		background: "#56C9E9",
		color: "white"
	},
	btnSecondary: {
		paddingLeft: "16px",
		paddingRight: "16px",
		background: "#56C9E9",
		borderRadius: "1000px",
		color: "white"
	},
	btnPrimarySquare: {
		height: 25,
		width: 25,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "white",
		background: "#56C9E9",
		fontSize: 25
	},
	btnTransSquare: {
		height: 25,
		width: 25,
		background: "rgba(0,0,0,0)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "rgba(0,0,0,0.4)",
		border: "1px solid rgba(0,0,0,0.4)",
		fontSize: 25
	}
};

const returnStyleObject = buttonType => {
	let btnStyle;

	const assign = btnType => Object.assign({}, styles.btn, btnType);

	if (buttonType.primary) {
		btnStyle = assign(styles.btnPrimary);
	} else if (buttonType.secondary) {
		btnStyle = assign(styles.btnSecondary);
	} else if (buttonType.transparentsquare) {
		btnStyle = assign(styles.btnTransSquare);
	} else if (buttonType.square) {
		btnStyle = assign(styles.btnPrimarySquare);
	}

	return btnStyle;
};

export default props => {
	let btnStyle = returnStyleObject(props);
	return (
		<div
			className="btn"
			id={props.styleId}
			style={btnStyle}
			onClick={props.clickHandler}
		>
			{props.label}
		</div>
	);
};
