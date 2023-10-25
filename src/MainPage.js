import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ARTICLES } from './api/getArticles';

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  console.log(data);
console.error(error); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data.data.contents;

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          Article ID: {article.id}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
