// # React-Redux
import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber); 
// 리턴값이 함수고 그 함수를 또 랩핑 컴포넌트가 리턴됨
// 아래와 같은 코드를 작성할 필요없이 자동으로 만들어줌.

// # Redux
// 무언가를 수정할때 항상 랩핑 컴포넌트를 수정해줘야하는 단점이 있음. 하지만! react-redux를 쓰면 어떨까? 
/*
import DisplayNumber from "../components/DisplayNumber";
import React, {Component} from 'react';
import store from '../store';

export default class extends Component{
    state = {number:store.getState().number}
    constructor(props){
      super(props);
      store.subscribe(function(){
        this.setState({number:store.getState().number});
      }.bind(this))
    }
    render(){
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}
*/