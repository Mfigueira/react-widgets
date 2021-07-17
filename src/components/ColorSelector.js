import { useState } from 'react';
import ColoredOutput from './ColoredOutput';
import Dropdown from './Dropdown';

const colorOptions = [
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

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <>
      <Dropdown
        options={colorOptions}
        selected={selectedColor}
        onSelectOption={setSelectedColor}
        label="Select a Color"
      />
      <ColoredOutput selected={selectedColor} />
    </>
  );
};

export default ColorSelector;
