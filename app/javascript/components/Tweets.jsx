import React, {Component} from "react";
import axios from 'axios';
import NewTweet from "./NewTweet";
let MyTweets = (props) => {
  return (
    <div>
      {Object.keys(props.tweets).map((tweet)=>{return (<div key={tweet}>{props.tweets[tweet].tweet}</div>)})
      }
    </div>
    
  )
  
}
export default class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tweets: {}};
  }
  componentDidMount() {
    axios.get(`${process.env.API_ENDPOINT}/tweets/all_tweets`)
    .then((data)=>{
      let tts = data.data
      console.log(tts)
      this.setState({tweets: tts})
    })
  }
  
  render() {
    let renderTweets = (props) => {
      return (
        <div>
          props.tweets.map (tweet) => {
            <p>{tweet.tweet}</p>
          }
        </div>
        
      )
      
    }
    return (<div>
      
        <MyTweets tweets={this.state.tweets}/>
        <NewTweet />
      
    </div>)
  }
}
