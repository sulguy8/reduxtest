import React, {Component} from 'react';
import './App.css';    
import AddNumberRoot from "./components/AddNumberRoot"
import DisplayNumberRoot from "./components/DisplayNumberRoot"

// # npm install redux

// # 크롬에 redux devtools 설치할 것 

// # "rcc" 자동완성 쓰는방법
// vscode extesions( ctrl+shift+x )에서 "ES7 React/Redux/GraphQL/React-Native snippets " 설치하시면 됩니다~
 

// # npm install react-redux
class App extends Component {
  state = {number:0}
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
