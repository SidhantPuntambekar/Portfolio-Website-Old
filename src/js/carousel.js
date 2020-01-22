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

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const numberChildren = React.Children.toArray(this.props.children).length;
        if (this.props.children !== prevProps.children)
        {
            this.oldItemIndex = null;
        }
        let newPosition = this.state.currentItemIndex % numberChildren;
        while (newPosition < 0)
        {
            newPosition += numberChildren;
        }
        if (this.state.currentItemIndex !== newPosition)
        {
            this.setState({
                currentItemIndex: newPosition
            });
        }
    }
}
