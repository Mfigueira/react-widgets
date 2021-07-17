const ColoredOutput = ({ selected }) => (
  <div style={{ marginTop: '100px' }}>
    <p style={{ fontWeight: 'bold', color: selected.value }}>
      This text changes color!
    </p>
  </div>
);

export default ColoredOutput;
