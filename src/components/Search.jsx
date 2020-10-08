import React from 'react'
import '../css/Search.css'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            query:""
        }
    }
    setDetails=(event)=>{
        if(event.target.name==="query"){
            this.setState({query:event.target.value})
        }
    }
    setQuery=()=>{
        this.props.setQuery(this.state.query)
    }
    render(){
        return (
            <div className="search-container">
                <h1 className="search-title" style={{marginBottom:"20px"}}>StackOverflow Query Interface</h1>
                <div className="searchbar-container">
                    <input placeholder="Enter topic that you want to search"
                       name="query"
                       value={this.state.query}
                       onChange={this.setDetails}/>
                    <button onClick={this.setQuery}>Search</button>
                </div>
            </div>
        )
    }
}
export default Search