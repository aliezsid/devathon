import React from "react";

const thumbWidth = 300;

const styles = {
	cardImage: {
		height: thumbWidth,
		width: thumbWidth,
		background: "rgba(0,0,0,0.12)"
	},
	image: {
		height: thumbWidth,
		width: thumbWidth,
		objectFit: "cover"
	}
};

export default props => {
	return (
		<div style={styles.cardImage}>
			<img style={styles.image} src={props.imageSource} alt="" />
		</div>
	);
};
