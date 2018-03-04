import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Field from './Field'
import ControlPanel from './ControlPanel'
import './App.scss'

const size = 5
const snake = [[1,2],[2,2],[2,3],[1,3]]
const target = [3,2]

class App extends Component {



    constructor(props) {
        super(props);
    }

    render() {

      console.log(snake[0][1])


        return (

            <div className="App">
                Hello
                < Field size={size} snake={snake} target={target} />
            </div>
        );
    }
}

const mapStateToProps = state => ({


});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
