import React from 'react';
import Palette from './Palette'
import SeedColors from './seedColors'
import seedColors from './seedColors';

function App() {
  return (
    <div>
        <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
