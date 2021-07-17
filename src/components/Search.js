import { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const timer = setTimeout(() => {
        setDebouncedQuery(query);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      (async () => {
        try {
          const res = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedQuery,
            },
          });
          setResults(res.data.query.search);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [debouncedQuery]);

  const renderedResults = results.map(res => (
    <div className="item" key={res.pageid}>
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${res.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{res.title}</div>
        {/* <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span> */}
        {res.snippet}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="query">Entered Search Term</label>
          <input
            id="query"
            type="text"
            className="input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {results.length ? (
        <div className="ui celled list">{renderedResults}</div>
      ) : (
        <div>No results - Start Searching! :)</div>
      )}
    </div>
  );
};

export default Search;
