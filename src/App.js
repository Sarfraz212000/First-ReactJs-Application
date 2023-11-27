
import './App.css';
import './components/Header';
import './components/Footer';

function App() {

  var names="Md sarfraz Ahamad Starty the learning ReactJs";
  return (
    <div className="App">
     <h2>Header</h2>
      <h1>{names}</h1>
      <h2>This is the Footer</h2>
      
    </div>
  );
}

export default App;
