import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/newproject">Novos Projetos</Link>
      </div>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/"><Home /></Route>
          <Route path="/company"><Company /></Route>
          <Route path="/contacts"><contacts /></Route>
          <Route path="/newproject"><NewProject /></Route>
        </Container>
        <Route exact path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/newproject" element={<NewProject/>} />
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
