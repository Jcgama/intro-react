import React, {Component} from 'react'
import {fetchRepos} from '../../service/repos-api'

class ReposContainer extends Component {
    constructor(props){
        super(props);

        this.state ={
            repos:[]
        }
    }


    //
    componentDidMount(){
        fetchRepos('jcgama').then(res => console.log(res))
    }

    //
    render(){
        return(
            <h1>Repos Container</h1>
        )
    }
}

export default ReposContainer