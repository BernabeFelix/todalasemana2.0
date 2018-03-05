import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

const App = () => (
  <div>
    <p>React here! again!</p>
  </div>
);

export default App;

ReactDOM.render(<App style={styles} />, document.getElementById('app'));
