function App() {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (characterId) => {
    // Filter out the character with the given ID
    const updatedCharacters = characters.filter((character) => character.id !== characterId);
    setCharacters(updatedCharacters);
  };


  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">Rick and Morty</h1>
      </nav>
      <div>
        <h2>Characters</h2>
        <div className="row">
          {characters.map((character) => (
            <div className="col-3" key={character.id}>
              <div className="card">
                <img
                  src={character.image}
                  alt={character.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{character.name}</h3>
                  <p>Origin: {character.origin.name}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(character.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  