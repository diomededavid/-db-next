import clientPromise from '../lib/mongodb';

export function Movies({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map(({ _id, title, metacritic, fullplot }) => (
          <li key={_id}>
            <h2>{title}</h2>
            <h3>{metacritic}</h3>
            <p>{fullplot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    const movies = await db
      .collection('movies')
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Movies;
