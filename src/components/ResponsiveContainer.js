import React from "react";
import "../styles/ResponsiveContainer.css";

/**
 * A component that represents a responsive container
 * Adapted from SaurabhTotey
 */
class ResponsiveContainer extends React.Component {

	constructor(props) {
		console.assert(props.responsiveWidths && React.Children.count(props.children) === props.responsiveWidths.length && props.responsiveWidths.reduce((acc, val) => acc + val, 0) === 12);
		super(props);
	}

	render() {
		return (
			<div className={"responsiveContainer"}>{
				this.props.children.map((child, index) => <div className={"responsiveContainerItem"} style={{"--responsive-width": this.props.responsiveWidths[index]}} key={index}>{child}</div>)
			}</div>
		)
	}

}

export default ResponsiveContainer