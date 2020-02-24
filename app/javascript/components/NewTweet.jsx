import React from "react";
import axios from 'axios';
class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweet: '', errorMessage: '' };
    this.retweet = this.retweet.bind(this);
    this.resolveError = this.resolveError.bind(this);
    this.createTweet = this.createTweet.bind(this);
    this.setTweet = this.setTweet.bind(this);
  }
  setTweet(event){
    let vl = event.target.value;
    this.setState({tweet: vl});
  }
  retweet() {
    console.log('you going to retweet');
  }
  createTweet() {
    axios.post(`${process.env.API_ENDPOINT}/tweets`, {tweet: this.state.tweet})
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
    .catch((er) => {
      console.log(er);
    })
  }
  resolveError(err) {
    this.errorMessage = err
  }
  render() {
    return (<div>
      <p>{this.errorMessage}</p>
      <p>{this.state.tweet }</p>
      <p>
        <input type="text" value={this.state.tweet} onChange={this.setTweet}></input>
        <button onClick={this.createTweet}>Tweet</button>
      </p>
    </div>);
  }
};

export default NewTweet;