import './App.css';
import Box from '@material-ui/core/Box';
import Header from './components/header';
import Home from './components/home';
function App() {
  const title = 'S-TODO';
  return (
    <div className="App">
      <Box color="text.primary">
        <Header title={title}/>
        <Home />
        
      </Box>
    </div>
  );
}

export default App;
