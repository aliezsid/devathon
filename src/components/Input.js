import React from "react";
import _ from "lodash";

export default ({ placeholder, ...props }) => {
	const id = _.uniqueId();
	return (
		<div className="input-wrapper">
			<input id={id} type="text" {...props} placeholder=" " required />
			<label htmlFor={id}>{placeholder}</label>
		</div>
	);
};
