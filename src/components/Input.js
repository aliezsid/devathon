import React from "react";
import uniqueId from "lodash/fp/uniqueId";

export default ({ className, placeholder, ...props }) => {
	const id = uniqueId();
	return (
		<div className={"input-wrapper " + className}>
			<input id={id} type="text" {...props} placeholder=" " required />
			<label htmlFor={id}>{placeholder}</label>
		</div>
	);
};
