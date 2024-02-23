import React, {useEffect, useState} from "react";
import axios from "../axios";
import requests from "../request";
import "../Banner.css";

function Banner()
{
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]  //it will give one random movie for the banner from the netflix originals.
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    function truncate(str, n ){  // to truncate the description to length n if it is too long.
        return str?.length >n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}
        >  {/* background : image*/}
            <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1> {/*title*/}
            <div className="banner_buttons">  {/* div : 2 buttons */}
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>  
            </div>
            <h1 className="banner_description"> {/* description */}

            {truncate(movie?.overview,150)}

            </h1>
            
            </div>

            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner;