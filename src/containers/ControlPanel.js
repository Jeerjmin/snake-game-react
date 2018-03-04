import React, { Component } from 'react';



export default class ControlPanel extends Component {



    constructor(props) {
        super(props);


        this.onClick = this.onClick.bind(this)
    }



    onClick(e) {


        console.log("onClick", e)
    }


    render() {
        const size = this.props.size;
        const snake = this.props.snake;
        const target = this.props.target;




        return (
            <div className="Field">
                <input type="button" value="top" onClick={(e) => this.onClick("top")} />
                <input type="button" value="bottom" onClick={(e) => this.onClick("bottom")} />
                <input type="button" value="left" onClick={(e) => this.onClick("left")} />
                <input type="button" value="right" onClick={(e) => this.onClick("right")} />
            </div>
        );
    }
}
