import Header from './components/header/header';
import MainPage from './MainPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Header/>
      <MainPage/>
    </Box>
   
  );
}

export default App;
