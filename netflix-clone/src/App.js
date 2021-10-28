import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
  <Nav />
    <Banner />
     <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title = "TRENDING" fetchUrl={requests.fetchTrending}/>
     <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
