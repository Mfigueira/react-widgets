import { useState } from 'react';
import Accordion from './components/Accordion';
import ColoredOutput from './components/ColoredOutput';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
  {
    title: 'React ?',
    content: 'is a framework noma',
  },
  {
    title: 'React 2?',
    content: 'is a 222framework noma',
  },
  {
    title: 'React 3?',
    content: 'is a  333 framework noma',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectOption={setSelected}
      />
      <ColoredOutput selected={selected} />
    </div>
  );
};

export default App;
