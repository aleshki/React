import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import AppHeader from './components/AppHeader';

import SearchBlock from './components/SeachBlock';

import TodoList from './components/TodoList';




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const App = () => {

  return (

    <div>
<AppHeader/>
<SearchBlockr/>
<TodoList/>
 </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));