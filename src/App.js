import logo from './logo.svg';
import './App.css';

import Main from './components/main/Main';
import DataProvider from './components/context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Main/>
      </DataProvider>
      
    </div>
  );
}

export default App;
