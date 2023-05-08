import React from 'react';

const withColor = Element => ({ color, ...otherProps }) => (
  <Element {...otherProps} style={{backgroundColor: color,  display: "block"}} />
);

const Button = props => {
  return <button {...props} />;
};

const ColoredButton = withColor(Button);

export default function AppHOC() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ColoredButton color="red">
        Ja sam crven!
      </ColoredButton>
      <ColoredButton color="yellow">
        Ja sam žuti!
      </ColoredButton>
      <ColoredButton color="green">
        Ja sam žuti!
      </ColoredButton>
    </div>
  );
}
