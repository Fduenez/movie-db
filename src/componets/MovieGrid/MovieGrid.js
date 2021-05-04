import React, {useState, useEffect} from 'react';
import axios from '../../axios-movies';
import classes from './MovieGrid.module.css';

const apiKey = '82a8e185c76a20a5a6fc1b167ff9b5bd';
const originalImageLink = 'https://image.tmdb.org/t/p/w185/';

function MovieGrid({movie}) {

    const [posters, setPosters] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            const result = await axios.get('search/movie?api_key=' + apiKey + '&language=en-US&query=' + movie + '&page=1&include_adult=false');
            console.log(result.data);
            setPosters(result.data)
            setIsLoading(false);
        }
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios.get('movie/now_playing?api_key=' + apiKey+ '&language=en-US&page=1');
            console.log(result);
            setPosters(result.data);
            setIsLoading(false)
          };
        console.log('MovieGrid');
        movie ? fetchMovie() : fetchData();
      }, [movie]);

      
    return (
        <div className={classes.container}>
            <div className={classes.grid}>
                {isLoading ? <p>Loading...</p> : 
                    posters.results.map(item=> (
                        <div className={classes.card} key={item.id}>
                            <div>
                                <img className={classes.poster} src={`${originalImageLink}${item.poster_path}`}/>
                                <p className={classes.title}>{item.title}</p>
                            </div>
                        </div>  
                    ))}
            </div>
        </div>
    );
}

export default MovieGrid;

