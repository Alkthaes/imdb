import React from 'react';

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h1>{result.title || result.name}</h1>
            <p>{result.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }`}
              alt={result.title || result.name}
            />
          </div>
        );
      })}
    </div>
  );
}
