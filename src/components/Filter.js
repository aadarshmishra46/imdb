import React,{useState} from 'react';

// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&query=";
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7";
const SERIES_API = "https://api.themoviedb.org/3/tv/popular?api_key=3a94078fb34b772a31d9a1348035bed7";
const GENRE_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&with_genres="
const RELEASE_YEAR_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&primary_release_year="

const Filter = (props) =>{
    const yearArray = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];

    const typeChange = (e) => {
        //console.log(e.target.value);
        const type = e.target.value;
        (type === 'Movies') ? fetchMovie(MOVIE_API) : fetchseries(SERIES_API);
        
    }
    const genreChange = (e) => {
        //console.log(e.target.value);
        const genreUrl = GENRE_API+e.target.value;
        fetchMovie(genreUrl);
    }
    const yearChange = (e) => {
        const yearUrl = RELEASE_YEAR_API + e.target.value;
        fetchMovie(yearUrl);
    }

    const fetchMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                //console.log(data.results);                
                props.search(data.results);
            })
    }
    const fetchseries = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                //console.log(data.results);                
                props.filter(data.results);
            })
    }

    return(
        <div className="filter-section">
            <h3>Discover options</h3>
            <form className="filter-form">
            <div className="lable">Type</div>
            <select id="type" className="form-select selection" aria-label="Default select example" onChange={typeChange}>
                <option value="Movies">Movies</option>
                <option value="TV-Series">TV Series</option>
            </select>
            <div className="lable">Genre</div>
            <select id="genre" className="form-select selection" aria-label="Default select example" onChange={genreChange}>
                <option value={`${28}`}>Action</option>
                <option value={`${18}`}>Drama</option>
                <option value={`${35}`}>Comedy</option>
                <option value={`${53}`}>Thriller</option>
                <option value={`${878}`}>Sci-Fi</option>
                <option value={`${27}`}>Horror</option>
                <option value={`${10749}`}>Romance</option>
                <option value={`${14}`}>Fantasy</option>
                <option value={`${10751}`}>Family</option>
            </select>
            <div className="lable">Year</div>
            <select id="year" className="form-select selection" aria-label="Default select example" onChange={yearChange}>
                {yearArray.map((year) => {
                    return <option key={year} value={`${year}`}>{year}</option>
                })}
            </select>
            <div className="rating">
            <ul class="rate-area">
  <input type="radio" id="5-star" name="rating" value="5" /><label for="5-star" title="Amazing">5 stars</label>
  <input type="radio" id="4-star" name="rating" value="4" /><label for="4-star" title="Good">4 stars</label>
  <input type="radio" id="3-star" name="rating" value="3" /><label for="3-star" title="Average">3 stars</label>
  <input type="radio" id="2-star" name="rating" value="2" /><label for="2-star" title="Not Good">2 stars</label>
  <input type="radio" id="1-star" name="rating" value="1" /><label for="1-star" title="Bad">1 star</label>
</ul>
            </div>
            </form>
            
        </div>
    );
}

export default Filter;