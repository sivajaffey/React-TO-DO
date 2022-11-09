import Box from '@material-ui/core/Box';
import Header from '../layouts/header';
import Home from '../components/home';

function Main() {
    const title = 'S-TODO';
    
  return (
    <Box color="text.primary">
        <Header title={title} />
        <Home />
    </Box>
  );
}
export default Main;
