import './App.css';
import { MainPage, About, Navbar, Footer, Contact, Projects } from './components';

function App() {
  return (
    <div className="App">
     <MainPage />
     <Navbar />
     <About/>
     <Projects/>
     {/* <Facts /> */}
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
