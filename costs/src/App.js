import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contacts } from './components/pages/Contacts';
import { NewProject } from './components/pages/NewProject';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Container customClass="min-height">
          <Route exact path="/" element={<Home />} /> 
          <Route path="/company" component={<Company />} />
          <Route path="/contacts" component={<Contacts />} />
          <Route path="/newproject" component={<NewProject />} />
        </Container>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
