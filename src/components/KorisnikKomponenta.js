export default function KorisnikKomponenta({ ime, godine, onNameChange }) {
    return (
      <div>
        <p>
          Pozdrav, moje ime je {ime} i imam {godine} godina.
        </p>
        <input
          type="text"
          onChange={onNameChange}
          value={ime}
          disabled={!onNameChange}
        />
      </div>
    );
  }