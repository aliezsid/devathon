import React from "react";
import uniqueId from "lodash/fp/uniqueId";
import Button from "./Button";

const thumbWidth = 300;

const ThumbStyle = width => {
	return {
		imageThumb: {
			position: "relative",
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
	const uploadId = uniqueId();
	computedStyle = ThumbStyle(props.width);
	const imageWidth = props.width
		? parseInt(props.width.replace("px", ""))
		: thumbWidth;
	return (
		<div
			className="image-thumb"
			onClick={props.clickHandler}
			style={computedStyle.imageThumb}
		>
			<img style={computedStyle.image} src={props.imageSource} alt="" />
			{props.upload ? (
				<div className="upload-box">
					<input
						id={uploadId}
						type="file"
						onChange={props.changeHandler}
						className="hidden"
						accept="image/*"
					/>
					<label htmlFor={uploadId}>
						<Button transparentsquare label="+" />
						{imageWidth < 300 ? null : (
							<h3 className="primary-text margin-top-8">
								Add More Photos
							</h3>
						)}
						{imageWidth < 300 ? null : (
							<p className="secondary-text margin-top-8">
								Click here
							</p>
						)}
					</label>
				</div>
			) : null}
		</div>
	);
};
