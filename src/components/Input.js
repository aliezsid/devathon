import React from "react";

export default ({ placeholder, ...props }) => {
	return (
		<div className="input-wrapper">
			<input type="text" {...props} placeholder=" " required />
			<label>{placeholder}</label>
		</div>
	);
};
