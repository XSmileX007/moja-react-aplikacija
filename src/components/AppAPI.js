import React, { useState, useEffect } from 'react';

export default function AppAPI() {
  const [data, setirajPodatke] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(nasaData => setirajPodatke(nasaData));
  }, []);

  if (!data) {
    return <div>Loading NASA data</div>;
  }

  const { title, url, explanation, copyright, hdurl } = data;
  return (
    <div>
      <h1>NASA picture of the day</h1>
      <h3>{title}</h3>
      <p>© {copyright}</p>
      <img src={url} alt={title} width={500} />
      <p>{explanation}</p>
      <a href={hdurl} target='blank'>Za bolju rezoluciju kliknite ovdje</a>
    </div>
  );
}
