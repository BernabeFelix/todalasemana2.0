import React from "react"
import ReactDOM from "react-dom"
import styles from './styles.scss'

const App = () => {
  return (
    <div>
      <p>React here! again!</p>
    </div>
  );
};

export default App

ReactDOM.render(<App />, document.getElementById("app"))