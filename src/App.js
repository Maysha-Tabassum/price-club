import './App.css';
import AssingmentMarks from './components/AssingmentMarks/AssingmentMarks';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-5xl font-bold underlined'>This is a big big heading</h1>
      <p>This is a Paragraph</p>
      <Pricing></Pricing>
      <AssingmentMarks></AssingmentMarks>
    </div>
  );
}

export default App;
