import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// constructor(props){
//   super(props)
//   this.state={seconds:1}
  
// }

// componentDidMount(){
// setInterval(() => {
//       this.setState({seconds:this.state.seconds+1})
//   }, 1000);
// }