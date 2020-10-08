import React from 'react';
import './App.css';
import Search from './components/Search'
import SearchResultHolder from './components/SearchResultHolder'
import dateformat from 'dateformat'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query:"",
      searchResult:[
        {
          title:"Title 1",
          isAnswered:false,
          tags:"tag1,tag2",
          lastActivity:"24 May 2018"
        },
        {
          title:"Title 2",
          isAnswered:true,
          tags:"tag6,tag5",
          lastActivity:"28 Sep 2018"
        }
      ]
    }
  }
  setQuery=(query)=>{
    this.setState({query:query},()=>{
      fetch("http://localhost:3001/api/getSearchResults?query="+this.state.query)
      .then(res=>res.json())
      .then(res=>{
          var result = []
          res.forEach(item=>{
              var resultItem = {
                title : item.title,
                isAnswered:item.is_answered,
                tags:item.tags.join(","),
                lastActivity:dateformat(new Date(item.last_activity_date*1000),"dd mmmm yyyy")
              }
              result.push(resultItem)
          })
          this.setState({searchResult:result})
      })
      .catch(err=>{
        this.setState({error:"Error fetching"})
      })
    })
    
      //this.setState({searchResult:result})
  }
  render(){
        return (
          <>
          <Search setQuery={this.setQuery}/>
          <hr/>
          {
            this.state.searchResult.map((res,idx)=>{
              return (
                <SearchResultHolder key={idx}
                                    title={res.title}
                                    isAnswered={res.isAnswered}
                                    tags={res.tags}
                                    lastActivity={res.lastActivity}/>
              )
            })
          }
          
          </>
        )
  }
}

export default App;
