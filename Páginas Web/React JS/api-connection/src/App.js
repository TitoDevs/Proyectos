import React from 'react';
import FlipCard from './assets/flipcard/FlipCard';

const App = () => {
  return (
    <div className="App">
      <FlipCard frontContent={<h2>Front Content</h2>}
        backContent={<p>Back Content</p>} />
    </div>
  );
};

export default App;
