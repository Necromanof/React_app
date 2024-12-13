import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NavBar from "./components/nav.jsx"
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Begin from "./components/begin.jsx"
import Add from './components/add.jsx'
import List from './components/componentList.jsx'
import Error from './components/error404.jsx'

function App() {

  //Stock Data
  const [components, setComponents] = useState(() => {
  const componentsStorage = localStorage.getItem('components');
  return componentsStorage ? JSON.parse(componentsStorage) : [];
  });

  //LocalStorage
  useEffect(() => {
    localStorage.setItem('components', JSON.stringify(components));
  }, [components]);

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
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Begin' element={<Begin />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Add' element={<Add onAddComponent={(component) => addComponent(component)} />}></Route>
            <Route path='/List' element={<List components={components} onUpdateComponent={updateComponent} onDeleteComponent={deleteComponent}/>}></Route>
            <Route path='*' element={<Error />} />
          </Routes>
    </div>
      
</>
  );
}

export default App