import React, {Component} from 'react';
import ReactInStyle from 'react-in-style';
import MediaStreamer from '../libs/media-streamer';
const vid1 = require('../../images/devstories.webm');
const vid2 = require('../../images/eric1-2.webm');
const vid3 = require('../../images/eric2-2.webm');
const vid4 = require('../../images/project-fi.webm');
console.log(vid1);
class Main extends Component {
  constructor() {
    super();
    this.state = {
      dynamicSrc: true,
      videoUrl: ''
    };
  }
  componentDidMount() {
    this.initializeMediaStreamer();
  }
  initializeMediaStreamer() {
    this.mediaStreamer = new MediaStreamer({$video: this.refs.video.getDOMNode()});
  }
  appendVideo(url) {
    return () => {
      if(!this.state.dynamicSrc) {
        this.initializeMediaStreamer();
      }
      this.setState({
        dynamicSrc: true
      });
      this.mediaStreamer.downloadVideo(url);
    };
  }
  setSrc(url){
    return () => {
      this.setState({
        dynamicSrc: false,
        videoUrl: url
      });
      this.refs.video.getDOMNode().src = url;
    };
  }
  render() {
    return (
      <div className="main" >
        <button className="vid-1" onClick={this.appendVideo(vid1)}>Video 1</button><br />
        <button className="vid-1-src" onClick={this.setSrc(vid1)}>SRC: Video 1</button><hr />
        <button className="vid-2" onClick={this.appendVideo(vid2)}>Video 2</button><br />
        <button className="vid-2-src" onClick={this.setSrc(vid2)}>SRC: Video 2</button><hr />
        <button className="vid-3" onClick={this.appendVideo(vid3)}>Video 3</button><br />
        <button className="vid-3-src" onClick={this.setSrc(vid3)}>SRC: Video 3</button><hr />
        <button className="vid-4" onClick={this.appendVideo(vid4)}>Video 4</button><br />
        <button className="vid-4-src" onClick={this.setSrc(vid4)}>SRC: Video 4</button><hr />
        Dynamic Src: {this.state.dynamicSrc ? 'true' : 'false' }
        <hr />
        <video controls ref="video"/>
      </div>
    );
  }
}
Main.prototype.displayName = 'Main';

ReactInStyle.add('.main', {
  backgroundColor: 'rgba(0, 0, 0, .9)'
});


export default Main;
