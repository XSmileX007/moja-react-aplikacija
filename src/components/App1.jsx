import React from 'react';
import { KorisnikChildren, KorisnikKlasa, KorisnikFunction } from './korisnik';

const users = [
  { name: 'Ivan', years: 30 },
  { name: 'Marko', years: 35 },
  { name: 'Ana', years: 25 },
];

export default class App1 extends React.Component {
  render() {
    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <KorisnikFunction name={users[0].name} years={users[0].years} />
        <KorisnikFunction name={users[1].name} years={users[1].years} />
        <KorisnikKlasa name={users[2].name} years={users[2].years} />
        <KorisnikChildren name={users[2].name} years={users[2].years}>
          A hobi mi je plivanje.
        </KorisnikChildren>
      </div>
    );
  }
}
