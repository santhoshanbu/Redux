import './App.css';
import { createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducer';
import Child from './child';

const store=createStore(reducer)
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <h1>hello world</h1>
      <Child />
    </div>
    </Provider>
  );
}

export default App;
