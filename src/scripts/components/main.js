import React, {Component} from 'react';
import ReactInStyle from 'react-in-style';
import MediaStreamer from '../libs/media-streamer';
const vid1 = require('../../images/devstories.webm');
const vid2 = require('../../images/swirls.webm');
console.log(vid1);
class Main extends Component {
  constructor() {
    super();
    this.state = {
      videoUrl: ''
    };
  }
  componentDidMount() {
    this.mediaStreamer = new MediaStreamer({$video: this.refs.video.getDOMNode()});
  }
  appendVideo(url) {
    return () => {
      this.mediaStreamer.downloadVideo(url);
    };
  }
  setSrc(url){
    return () => {
      this.setState({
        videoUrl: url
      });
    };
  }
  render() {
    return (
      <div className="main" >
        <button className="vid-1" onClick={this.appendVideo(vid1)}>Video 1</button><br />
        <button className="vid-1-src" onClick={this.setSrc(vid1)}>SRC: Video 1</button><hr />
        <button className="vid-2" onClick={this.appendVideo(vid2)}>Video 2</button><br />
        <button className="vid-2-src" onClick={this.setSrc(vid2)}>SRC: Video 2</button><hr />
        <video controls ref="video" src={this.state.videoUrl}/>
      </div>
    );
  }
}
Main.prototype.displayName = 'Main';

ReactInStyle.add('.main', {
  backgroundColor: 'rgba(0, 0, 0, .9)'
});


export default Main;
