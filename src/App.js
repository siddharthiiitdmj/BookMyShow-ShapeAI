import React from 'react';
import DefaultHOC from './HOC/Default.HOC';

function HomePage (props) {
  return <h1>This is Home Page</h1>;
}
function ContactPage (props) {
  return <h1>This is Contact Page</h1>;
}

function App() {
  return <>
    <DefaultHOC path="/home" exact component={HomePage} />
    <DefaultHOC path="/contact" exact component={ContactPage} />
  </>
}

export default App;
