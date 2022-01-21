import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/"><Home /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/company"><Company /></Route>
          <Route path="/contacts"><Contacts /></Route>
          <Route path="/newproject"><NewProject /></Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
