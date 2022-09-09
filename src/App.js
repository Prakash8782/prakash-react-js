import './App.css';
import Login from './Components/login';
import Header from './Components/header';
import Body from './Components/body'

function App() {
  return (
    <div className="App">
      <Login>
         <Header></Header>
         <Body></Body>
         </Login>
         

    </div>
  );
}

export default App;
