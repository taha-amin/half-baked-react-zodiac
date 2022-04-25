import './App.css';

{/* import the zodiac array */}
import Header from '../src/Header/Header.js';
import Footer from '../src/Footer/Footer.js';
import Main from './Main/Main.js';

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header />

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main />

      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer />
      
      
    </div>
  );
}

export default App;
