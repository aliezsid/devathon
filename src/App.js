import React from "react";
import { render } from "react-dom";

import mockData from "./mockdata";

import ProductCards from "./containers/ProductCards";

const styles = {
	appRoot: {
		background: "#F5F5F5",
		minHeight: "100vh",
		width: "100%"
	}
};

const App = () => {
	return (
		<div style={styles.appRoot}>
			<ProductCards data={mockData} />
		</div>
	);
};

render(<App />, document.getElementById("root"));
