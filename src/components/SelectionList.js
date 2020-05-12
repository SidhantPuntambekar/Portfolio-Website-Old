import React from "react";
import "../styles/SelectionList.css"

class SelectionList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: this.props.items,
			selectedItemIndex: this.props.selectedItemIndex | 0
		};
	}

	onSelection() {
		this.props.onSelection(this.state.items[this.state.selectedItemIndex]);
	}

	componentDidMount() {
		this.onSelection();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.selectedItemIndex === this.state.selectedItemIndex) {
			return;
		}
		this.onSelection();
	}

	render() {
		return <nav role={"menu"} aria-label={this.props.ariaLabel} aria-controls={this.props.ariaControls}>
			<ul className={"selectionList"}>{
				this.state.items.map((item, index) => <li className={"selectionListItem"} key={item} role={"menuitemradio"} aria-checked={index === this.state.selectedItemIndex}><button className={`selectionItem ${index === this.state.selectedItemIndex? "active" : ""}`} onClick={() => this.setState({ ...this.state, selectedItemIndex: index })}>{item}</button></li>)
			}</ul>
		</nav>
	}

}

export default SelectionList