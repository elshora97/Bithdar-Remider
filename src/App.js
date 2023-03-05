import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  return <main>
    <article className="container">
      <h3>{people.length} Birthday Reminders</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])} >Clear All</button>
    </article>
  </main>;
}

export default App;

