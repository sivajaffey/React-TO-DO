import './App.css';
import Box from '@material-ui/core/Box';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
function App() {
  const title = 'S-TODO';
  return (
    <div className="App">
      <Box color="text.primary">
        <Header title={title}/>
        <Home />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
