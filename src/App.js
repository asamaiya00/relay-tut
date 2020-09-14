import React, { useState, useEffect } from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner:"asamaiya00" name:"contact-manager"){
          name
        } 
      } 
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }

        const data = response.data;
        console.log(response)
        setName(data.repository.name);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);
  return (
    <div className="App">
      <header className="App-header">
        <p>{name ? `Repository: ${name}` : 'Loading'}</p>
      </header>
    </div>
  );
}

export default App;
