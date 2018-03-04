import React, { Component } from 'react';
import './Field.scss'

export default class Field extends Component {



    constructor(props) {
        super(props);

        this.state = {
            size: this.props.size,
            snake: this.props.snake,
            target: this.props.target
        }

        this.handleKey = this.handleKey.bind(this)
        this.randomTarget = this.randomTarget.bind(this)
    }


    handleKey(event)  {

        if (event.keyCode == "38") this.onClick('top')
        if (event.keyCode == "39") this.onClick('right')
        if (event.keyCode == "37") this.onClick('left')
        if (event.keyCode == "40") this.onClick('bottom')

    }


    randomTarget(size, snake, target) {
        var newX = Math.floor(Math.random() * (size ));
        var newY = Math.floor(Math.random() * (size ));
        var newTarget = [newY,newX]

        if  (
            (newTarget[0] == target[0] && newTarget[1]==target[1]) ||

            (!snake.every((el) => (el[0]!==newY || el[1]!==newX) ) )
        )
        {

            return this.randomTarget(size,snake,target)

        }


        else {
            return newTarget
        }

    }


    onClick(e) {
        var size = this.state.size;
        var target = this.state.target;
        var newSnake = this.state.snake.slice()
        var length = newSnake.length


        var head = newSnake[length-1]
        var yHead = head[0];
        var xHead = head[1];



        if (e == "top") {
            console.log("top")
            if (yHead!=0) {
                console.log("FIRST IF GOOD")
                if (newSnake.every(el => (el[0] !== yHead-1 || el[1] !== xHead) ) ) {


                    newSnake.push([yHead-1, xHead])

                    if (target[0]==newSnake[newSnake.length-1][0] && target[1]==newSnake[newSnake.length-1][1])
                    { console.log("OOP");

                        var newTarget = this.randomTarget(size,newSnake,target)
                        this.setState({
                            target: newTarget

                        })
                    }
                    else newSnake.splice(0,1)


                }

            }


        }

        if (e == "bottom") {
            console.log("bottom")
            if (yHead < size-1) {
                console.log("FIRST IF GOOD")
                if (newSnake.every(el =>  (el[0] !== yHead+1 || el[1] !== xHead)  )) {
                    newSnake.push([yHead+1, xHead])
                    if (target[0]==newSnake[newSnake.length-1][0] && target[1]==newSnake[newSnake.length-1][1])
                    { console.log("OOP");

                        var newTarget = this.randomTarget(size,newSnake,target)
                        this.setState({
                            target: newTarget

                        })
                    }
                    else newSnake.splice(0,1)

                    console.log("SECOND IF GOOD",newSnake)
                }

            }

        }

        if (e == "left") {
            console.log("left")
            if (xHead != 0) {
                console.log("FIRST IF GOOD")
                if (newSnake.every(el => (el[0] !== yHead || el[1] !== xHead-1 ) )) {

                    newSnake.push([yHead,xHead-1])
                    if (target[0]==newSnake[newSnake.length-1][0] && target[1]==newSnake[newSnake.length-1][1])
                    { console.log("OOP");

                        var newTarget = this.randomTarget(size,newSnake,target)
                        this.setState({
                            target: newTarget

                        })
                    }
                    else newSnake.splice(0,1)


                }
                else {
                    console.log("SECOND IF BAD", (newSnake[0][0] !== yHead+1 && newSnake[0][1] !== xHead ))
                }

            }

        }

        if (e == "right") {

            console.log("right")
            if (xHead != 4) {
                console.log("FIRST IF GOOD")
                if (newSnake.every(el => (el[0] !== yHead || el[1] !== xHead+1 ) )) {

                    newSnake.push([yHead,xHead+1])
                    if (target[0]==newSnake[newSnake.length-1][0] && target[1]==newSnake[newSnake.length-1][1])
                    { console.log("OOP");

                        var newTarget = this.randomTarget(size,newSnake,target)
                        this.setState({
                            target: newTarget

                        })
                    }
                    else newSnake.splice(0,1)

                }
                else {
                    console.log("SECOND IF BAD", (newSnake[0][0] !== yHead+1 && newSnake[0][1] !== xHead ))
                }

            }

        }


        this.setState({
            snake: newSnake

        })
    }






    render() {
        const size = this.state.size;
        const snake = this.state.snake;
        const target = this.state.target;



        var test = true;

        const  createTable = () => {
            let table = []
            // Outer loop to create parent
            for (let i = 0; i < size; i++) {
                let children = []
                //Inner loop to create children

                for (let j = 0; j < size; j++) {

                    var t = children.length

                    for(var key in snake) {


                        if (snake[key][0] == i && snake[key][1] == j) {
                            children.push(<td className="snake">{i}-{j}</td>)
                            test=false
                        }
                        if (t==children.length) test = true

                    }

                    if (test==false) continue;
                    else if (target[0] == [i] && target[1] == [j]) children.push(<td className="target">{i}-{j}</td>)
                    else  children.push(<td className="table">{i}-{j}</td>)

                }
                //Create the parent and add the children
                table.push(<tr>{children}</tr>)
            }
            return table
        }



        return (
            <div  className="Field" tabIndex="0" onKeyDown={this.handleKey} >
                <table >
                    {createTable()}
                </table>

                <div className="ControlPanel">
                    <input type="button" value="top" onClick={(e) => this.onClick("top")} />
                    <input type="button" value="bottom" onClick={(e) => this.onClick("bottom")} />
                    <input type="button" value="left" onClick={(e) => this.onClick("left")} />
                    <input type="button" value="right" onClick={(e) => this.onClick("right")} />
                </div>
            </div>
        );
    }
}
