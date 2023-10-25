import { ApolloProvider } from '@apollo/client';
import React from 'react';
import MainPage from './MainPage';
import ApolloClient from './apollo-client';

const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
        <header>
          <h1>Point.md News</h1>
        </header>
        <main>
          <MainPage />
        
        </main>
  
      </div>
    </ApolloProvider>
  );
}

export default App;
