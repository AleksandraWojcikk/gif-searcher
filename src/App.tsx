import { useState } from 'react'

import './App.css'

const API_KEY = 'I4r912BEv1WazF6G9lpv9Q1NiNORASVC';
const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search?type=gifs&limit=10&api_key='

function App() {
  const [gifUrl, setGifUrl] = useState(null);

  async function fetchData (query: string) {
const response = await fetch(`${SEARCH_URL}${API_KEY}&q=${query}`);
const {data} = await response.json();
const randomNumber = Math.floor(Math.random()*9);
const url = data[randomNumber].images.downsized_large.url;
setGifUrl(url);
console.log(data[0].images.downsized_large.url);

  }

  // zatwierdzanie inputu przez Enter
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('gif-search');
    console.log(searchQuery);

    if(searchQuery) {
    fetchData(searchQuery?.toString());}
  }
  

  return (
    <>
      <h1>GIF SEARCHER
       </h1>
       <form onSubmit={handleSubmit}>
        <div className="inputAndClear">
<input type="search" name='gif-search' />
<button type="reset">Clear</button>
</div>
<button type="submit" className="searchButton">SEARCH</button>

       </form>
       {gifUrl && <img src={gifUrl} />}
    </>
  )
}

export default App
