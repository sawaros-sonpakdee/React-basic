import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloFirstComponent from './components/HelloFirstComponent'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// กาสร้าง function Component
// function HelloComponent(){
//     return <h1>Log in</h1>
// }
// ReactDOM.render(<HelloComponent/>,document.getElementById('root'));

//การสร้าง class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello first Component </h1>
//   }
// }
ReactDOM.render(<App/>,document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
