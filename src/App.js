import './App.css';
import Header from './layouts/Header/Header.js';
import Row from './components/Row/Row.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Row title={'Top'}></Row>

        <Row title={'Terror'}></Row>
        <Row title={'Original'}></Row>
      </main>
    </div>
  );
}

export default App;

