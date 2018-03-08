import React from "react";

const cardWidth = 300;
const textHeights = 40;
const textColor = "#DEDFE2";

const styles = {
	cardWrapper: {
		width: cardWidth,
		display: "flex",
		flexDirection: "column",
		background: "#FFFFFF",
		fontWeight: 600,
		boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.04)"
	},
	cardImage: {
		height: cardWidth,
		width: cardWidth,
		objectFit: "cover",
		background: "rgba(0,0,0,0.12)"
	},
	cardTitle: {
		color: textColor,
		height: textHeights,
		padding: "0px 20px",
		paddingTop: "20px",
		fontSize: 14
	},
	cardPrice: {
		color: textColor,
		height: textHeights,
		padding: "0px 20px",
		paddingTop: "5px",
		fontSize: 14
	}
};

export default props => {
	return (
		<div style={styles.cardWrapper}>
			<div style={styles.cardImage}>
				<img src={props.img} alt="" />
			</div>
			<div style={styles.cardTitle}>
				<p>{props.title}</p>
			</div>
			<div style={styles.cardPrice}>
				<p>&#8377; {props.price}</p>
			</div>
		</div>
	);
};
