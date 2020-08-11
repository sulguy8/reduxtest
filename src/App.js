import React, { Component, useState, useEffect } from 'react';
import customAxios from './customAxios';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot"
import DisplayNumberRoot from "./components/DisplayNumberRoot"
import axios from 'axios'; // 액시오스

// # npm install redux

// # 크롬에 redux devtools 설치할 것 

// # "rcc" 자동완성 쓰는방법
// vscode extesions( ctrl+shift+x )에서 "ES7 React/Redux/GraphQL/React-Native snippets " 설치하시면 됩니다~


// # npm install react-redux


class App extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello. React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    }
  }

  test() {
    // handleChange = (props) => {
    //  ...
    // }
    axios(
      {
        url: '/api' + '/test',
        method: 'get',
        baseURL: 'http://localhost:80',
        withCredentials: true,
      }
    ).then(
      res => {
        this.state.mode = res.data[0]['tstNum']
      },
      err => { },
    )
    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.test}>클릭!</button>
        <h1>Hello World</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}



// function App() {
//   // IP주소 변수 선언
//   // const [ip, setIp] = useState('');

//   var test = '';
//   // IP주소 값을 설정합니다.
//   function callback(data) {
//     console.log(data[0]['tstNum'])

//     // setIp(data);
//   }

//   // 첫번째 렌더링을 다 마친 후 실행합니다.
//   useEffect(
//     () => {
//       // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
//       customAxios('/test', callback);
//     }, []
//   );

//   return (
//     <div className="App">
//       <header className="App-header">
//         {test}
//       </header>
//     </div>
//   );
// }

export default App;
