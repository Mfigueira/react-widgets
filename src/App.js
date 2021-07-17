import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';
import ColorSelector from './components/ColorSelector';
import Translate from './components/Translate';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />

      <Route path="/">
        <Accordion />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <ColorSelector />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </>
  );
};

export default App;
