import React from "react";

const thumbWidth = 300;

const ThumbStyle = width => {
	return {
		imageThumb: {
			height: width || thumbWidth,
			width: width || thumbWidth,
			background: "rgba(0,0,0,0.12)"
		},
		image: {
			height: width || thumbWidth,
			width: width || thumbWidth,
			objectFit: "cover"
		}
	};
};

export default props => {
	let computedStyle;
	computedStyle = ThumbStyle(props.width);
	return (
		<div className="image-thumb" style={computedStyle.imageThumb}>
			<img style={computedStyle.image} src={props.imageSource} alt="" />
		</div>
	);
};
