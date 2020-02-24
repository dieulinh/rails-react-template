import React from "React";
class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweet: null };
  }
  retweet() {
    console.log('you going to retweet');
  }
  render() {
    return (<div>
      <p>{this.state.tweet }</p>
      <p>
        <button onClick="this.retweet">Retweet</button>
      </p>
    </div>);
  }
};

export default Tweet;