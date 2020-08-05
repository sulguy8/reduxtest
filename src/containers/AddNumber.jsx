// # React-Redux
import AddNumber from "../components/AddNumber";   
import {connect} from 'react-redux';
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size})
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);  // event props만 있고 그외의 상태를 전달하는 props는 없기 때문에 첫번째 인자는 null

// # Redux
/*
import AddNumber from "../components/AddNumber";    
// view에 집중하는 역할로 정해지게 됨.(presentational component)
// 리덕스와 관련된 코드가 일체 없는 것이 특징                                                        
import React, {Component} from 'react';
import store from '../store';

// wrapping 해주는 이유? 내가 원하는 컴포넌트가 store에 종속되지 않게 만들기위해서
// 재사용성을 높혀준다. 따라서 다른데에서 사용할 필요가 없다면 굳이 wrapping 안해줘도 됨.
// 우리 어플리케이션과 종속되는 작업들은 여기서 한다.

export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size})
        }.bind(this)}></AddNumber>
    }
}
*/