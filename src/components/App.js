import React from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../style/style.css'
import _ from 'lodash';

const API_KEY ="AIzaSyDu4VaXRCcFVShywbG7I0zDFoEPz6XH914"


class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={videos:[],selectedVideo:null};
        YTSearch({key:API_KEY,term:"bikes"},videos=>
        {
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }

    onVideoSelected =(video)=>{
        this.setState({selectedVideo:video})
    }

    videoSearch = (term)=>{
        YTSearch({key:API_KEY,term:term},videos=>
        {
            this.setState({videos:videos,selectedVideo:videos[0]});
        });

    }

    render(){
        const vSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onVideoSearch ={vSearch} />
                <VideoDetail video ={this.state.selectedVideo}/>
                <VideoList selectedVideo ={this.onVideoSelected} videos ={this.state.videos}/>
            </div>
        )
    }
}


export default App;