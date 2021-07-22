import React from 'react'
// import { render } from 'react-dom'

const MoviesList = (props) => {
    console.log(props);

     renderMovies = (movies) => {
        

            movies.map((item,i) =>(
                <div key={i}>
                    {item.name}
                </div>
            ))
    }
       
    return (
        <div>
            {renderMovies(props.data.movies)}
        </div>
    )
}

export default MoviesList;
