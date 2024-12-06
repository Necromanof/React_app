import React, { useState } from 'react';
import './App.css'
import NavBar from "./components/nav.jsx"
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Begin from "./components/begin.jsx"
import Add from './components/add.jsx'
import List from './components/componentList.jsx'
import ComponentList from './components/componentList.jsx';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;

    case "/Begin":
      component = <Begin />
      break
    case "/About":
      component = <About />
      break;
    case "/Add":
      component = <Add />
      break;
    case "/List":
      component = <List />
      break;
  }

  const [components, setComponents] = useState([]);

  // Add a component
  const addComponent = (component) => {
    setComponents([...components, component]);
  };

  // Edit a component
  const updateComponent = (index, updatedComponent) => {
    const newComponents = [...components];
    newComponents[index] = updatedComponent;
    setComponents(newComponents);
  };

  // Delete a component
  const deleteComponent = (index) => {
    const newComponents = components.filter((_, i) => i !== index);
    setComponents(newComponents);
  };

  return (
<>
      <NavBar />
      <div className="container">
      {component}
      <Add onAddComponent={addComponent}/>
      <ComponentList components={components} onUpdateComponent={updateComponent} onDeleteComponent={deleteComponent} />
      </div>
</>
  );
}

export default App