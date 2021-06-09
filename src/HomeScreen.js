import React from 'react'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import './HomeScreen.css'
import requests from './Api/Requests'
import Row from './Components/Row'

function HomeScreen() {
    return (
        <div className="homeScreen">

            <Nav />

           <Banner />

           <Row 
             title='NETFLIX ORIGINALS'
             fetchUrl={requests.fetchNetflixOriginals}
             isLargeRow
           />
            <Row title='Tending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
            
        </div>
    )
}

export default HomeScreen
