import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	return (
		<div>
			<h1>Hello World from Serzh!</h1> My first component.
		</div>
	);
};

createCustomElement("x-523899-hello-world", {
	renderer: { type: snabbdom },
	view,
	styles,
});
