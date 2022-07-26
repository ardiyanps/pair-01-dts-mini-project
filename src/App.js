import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';

import Navbar from './components/Navbar';
import Home from './containers/Home';
import Carousel from './components/Carousel';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <Carousel />
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
