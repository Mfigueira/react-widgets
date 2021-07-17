import { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectOption }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleBodyClick = e => {
      if (dropdownRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener('click', handleBodyClick, { capture: true });

    return () =>
      document.body.removeEventListener('click', handleBodyClick, {
        capture: true,
      });
  }, []);

  const renderedOptions = options.map(
    option =>
      selected.value !== option.value && (
        <div
          className="item"
          key={option.value}
          onClick={() => onSelectOption(option)}
        >
          {option.label}
        </div>
      )
  );

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="drop" className="label">
          Select a Color
        </label>
        <div
          ref={dropdownRef}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(open => !open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
