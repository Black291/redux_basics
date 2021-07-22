import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist,directorslist} from '../actions';
import { bindActionCreators } from 'redux'
import MoviesList from '../components/movieslist';

class App extends Component {

    componentWillUnmount(){
        this.props.moviesList()
        this.props.directorsList()

    }

    render(){
        return(
            <div>
                <MoviesList {...this.props}/>
            </div>
        )
    }
}

    // renderMovies = (movies) => {
    //     movies ?
    //         movies.map(item =>(
    //             <div>
    //                 {this.renderMovies(this.props.data.movies)}
    //             </div>
    //         )):null
    // }

//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                 {this.renderMovies(this.props.data.movies)}
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        movieslist,
        directorslist
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);