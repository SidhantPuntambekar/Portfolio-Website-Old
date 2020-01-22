import React from "react";
import "../styles/Carousel.css";

class Carousel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentItemIndex: 0
        };
        this.oldItemIndex = null;
    }

    movePosition(amount)
    {
        this.oldItemIndex = this.state.currentItemIndex;
        this.setState({
            currentItemIndex: this.state.currentItemIndex + amount
        });
    }
}
