import React from "react";
import uniqueId from "lodash/fp/uniqueId";

export default ({ label, prefix, className, ...props }) => {
	const id = uniqueId();
	return (
		<div className={"input-wrapper flex flex-align-center " + className}>
			<div>{prefix}</div>
			<input id={id} type="text" {...props} required />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
