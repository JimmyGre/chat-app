import React from 'react';
import Contact from './components/Contact';
function App() {


  return (
    <div className="App">
      <Contact 
      name={"Hazel Owens"}
      avatar ={"https://randomuser.me/api/portraits/women/34.jpg"}
      online
      />
      <Contact 
      name={"Philip Steward"}
      avatar ={"https://randomuser.me/api/portraits/men/98.jpg"}
      offline
      />
      <Contact 
      name={"Carla Hughes"}
      avatar ={"https://randomuser.me/api/portraits/women/10.jpg"}
      online
      />
    </div>
  );
}

export default App;
