import React, {useContext} from "react";
import {ContentExplorer} from "box-ui-elements";
import {IntlProvider} from "react-intl";
import BoxContext from "../context/BoxContext";

export default () => {
	const {state} = useContext(BoxContext);

	return state.token ?
		<div className="ui-element">
			<IntlProvider locale="en">
				<ContentExplorer token={state.token}/>
			</IntlProvider>
		</div>
			:
		<div>
			Fetching token...
		</div>;
}
