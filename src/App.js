import React from "react";
import { render } from "react-dom";

import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";

const styles = {
	appRoot: {
		background: "#F5F5F5"
	}
};

const App = () => {
	return <div style={styles.appRoot} />;
};

render(<App />, document.getElementById("root"));
