import React from 'react'
import '../css/SearchResultHolder.css'

class SearchResultHolder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:"Title",
            isAnswered:false,
            tags:"tag1,tag2",
            lastActivity:"xx Sep xxxx"
        }
    }
    render(){
        const ans = this.props.isAnswered?"Ansererd":"Not Answered"
        return (
            <div className="searchresult">
                <div className="title">{this.props.title}</div>
                <div className="answered">{ans}</div>
                <div className="tags">{this.props.tags}</div>
                <div className="lastactivity">Last Activity: {this.props.lastActivity}</div>
            </div>
        )
    }
}
export default SearchResultHolder