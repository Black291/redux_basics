import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

class App extends Component {

    componentWillUnmount(){
        this.props.moviesList()
    }

    render(){
        console.log(this.props.data.movies)
        return(
            <div>
                hello
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

export default connect(mapStateToProps,actions)(App);