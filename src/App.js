import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Logo from './assets/project.png'

function App() {

  // In useState there are two position, the first one is the value, the second one is a function to update the value applying the imutability concept

  const [projects,setProjets] = useState(['App Development', 'Front-end Web']);

  function handleAddProject () {

    // Using spread operator, adding a new project
    setProjets([ ...projects, ` New Project - ${Date.now()}`])
  }

  return  (
    <>
      <img className="Logo" alt="Logotipo" src={Logo} />

      <Header title="Projects"/>
      <ul>
        { projects.map(project => <li key={project}> {project} </li>)}  
      </ul>    
     
      
     <button type="button" onClick={handleAddProject}>Add a Project</button>
    </>
  );
}

export default App;
