import React, {Component} from 'react';
import ReactInStyle from 'react-in-style';
import MediaStreamer from '../libs/media-streamer';
const videos = [
  {url: '../../images/devstories.webm', probe: `ffprobe devstories.webm                                                                                                         ~/Projects/video-playground/src/images
ffprobe version 2.6.2 Copyright (c) 2007-2015 the FFmpeg developers
  built with Apple LLVM version 6.1.0 (clang-602.0.49) (based on LLVM 3.6.0svn)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/2.6.2 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-libx264 --enable-libmp3lame --enable-libvo-aacenc --enable-libxvid --enable-libvorbis --enable-libvpx --enable-vda
  libavutil      54. 20.100 / 54. 20.100
  libavcodec     56. 26.100 / 56. 26.100
  libavformat    56. 25.101 / 56. 25.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 11.102 /  5. 11.102
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  1.100 /  1.  1.100
  libpostproc    53.  3.100 / 53.  3.100
Input #0, matroska,webm, from 'devstories.webm':
  Metadata:
    encoder         : google
  Duration: 00:01:10.11, start: 0.000000, bitrate: 737 kb/s
    Stream #0:0: Video: vp8, yuv420p, 640x360, SAR 1:1 DAR 16:9, 23.98 fps, 23.98 tbr, 1k tbn, 1k tbc (default)
    Stream #0:1: Audio: vorbis, 44100 Hz, stereo, fltp (default)`,
  dataUrl: require('../../images/devstories.webm')},

  {url: '../../images/output.webm', probe: `ffprobe output.webm                                                                                                             ~/Projects/video-playground/src/images
ffprobe version 2.6.2 Copyright (c) 2007-2015 the FFmpeg developers
  built with Apple LLVM version 6.1.0 (clang-602.0.49) (based on LLVM 3.6.0svn)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/2.6.2 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-libx264 --enable-libmp3lame --enable-libvo-aacenc --enable-libxvid --enable-libvorbis --enable-libvpx --enable-vda
  libavutil      54. 20.100 / 54. 20.100
  libavcodec     56. 26.100 / 56. 26.100
  libavformat    56. 25.101 / 56. 25.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 11.102 /  5. 11.102
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  1.100 /  1.  1.100
  libpostproc    53.  3.100 / 53.  3.100
Input #0, matroska,webm, from 'output.webm':
  Metadata:
    encoder         : Lavf56.25.101
  Duration: 00:00:05.83, start: 0.000000, bitrate: 283 kb/s
    Stream #0:0: Video: vp8, yuv420p, 640x360, SAR 1:1 DAR 16:9, 24 fps, 24 tbr, 1k tbn, 1k tbc (default)
    Stream #0:1: Audio: vorbis, 44100 Hz, stereo, fltp (default)`,
  dataUrl: require('../../images/output.webm')
  },
  {url: '../../images/output2.webm', probe: `ffprobe output2.webm                                                                                                            ~/Projects/video-playground/src/images
ffprobe version 2.6.2 Copyright (c) 2007-2015 the FFmpeg developers
  built with Apple LLVM version 6.1.0 (clang-602.0.49) (based on LLVM 3.6.0svn)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/2.6.2 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-libx264 --enable-libmp3lame --enable-libvo-aacenc --enable-libxvid --enable-libvorbis --enable-libvpx --enable-vda
  libavutil      54. 20.100 / 54. 20.100
  libavcodec     56. 26.100 / 56. 26.100
  libavformat    56. 25.101 / 56. 25.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 11.102 /  5. 11.102
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  1.100 /  1.  1.100
  libpostproc    53.  3.100 / 53.  3.100
Input #0, matroska,webm, from 'output2.webm':
  Metadata:
    encoder         : Lavf56.25.101
  Duration: 00:00:04.56, start: 0.000000, bitrate: 274 kb/s
    Stream #0:0: Video: vp8, yuv420p, 640x360, SAR 1:1 DAR 16:9, 24 fps, 24 tbr, 1k tbn, 1k tbc (default)
    Stream #0:1: Audio: vorbis, 44100 Hz, stereo, fltp (default)`,
  dataUrl: require('../../images/output2.webm')},
  {url: '../../images/project-fi.webm', probe: `ffprobe project-fi.webm                                                                                                         ~/Projects/video-playground/src/images
ffprobe version 2.6.2 Copyright (c) 2007-2015 the FFmpeg developers
  built with Apple LLVM version 6.1.0 (clang-602.0.49) (based on LLVM 3.6.0svn)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/2.6.2 --enable-shared --enable-pthreads --enable-gpl --enable-version3 --enable-hardcoded-tables --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-libx264 --enable-libmp3lame --enable-libvo-aacenc --enable-libxvid --enable-libvorbis --enable-libvpx --enable-vda
  libavutil      54. 20.100 / 54. 20.100
  libavcodec     56. 26.100 / 56. 26.100
  libavformat    56. 25.101 / 56. 25.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 11.102 /  5. 11.102
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  1.100 /  1.  1.100
  libpostproc    53.  3.100 / 53.  3.100
Input #0, matroska,webm, from 'project-fi.webm':
  Metadata:
    encoder         : Google
  Duration: 00:01:00.61, start: 0.000000, bitrate: 222 kb/s
    Stream #0:0: Video: vp8, yuv420p, 640x360, SAR 1:1 DAR 16:9, 24 fps, 24 tbr, 1k tbn, 1k tbc (default)
    Stream #0:1: Audio: vorbis, 44100 Hz, stereo, fltp (default)`,
  dataUrl: require('../../images/project-fi.webm')}
];
class Main extends Component {
  constructor() {
    super();
    this.state = {
      dynamicSrc: false,
      videoUrl: ''
    };
  }
  componentDidMount() {
    this.initializeMediaStreamer();
  }
  initializeMediaStreamer() {
    this.mediaStreamer = new MediaStreamer({$video: this.refs.video.getDOMNode()});
  }
  resetVideo() {
    this.state = {
      dynamicSrc: false,
      videoUrl: ''
    };
    this.refs.video.getDOMNode().src = '';
  }
  renderButtons() {
    const buttonStyle = {
      width: '200px',
      height: '40px',
      margin: '10px'
    };
    const buttons = [];
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      buttons.push(<span key={i}>
          <button className={`vid-${i}`} onClick={this.appendVideo(video.dataUrl)} style={buttonStyle}>Append via XHR</button>
          <button className={`vid-${i}-src`} onClick={this.setSrc(video.dataUrl)} style={buttonStyle}>Set URL as Source</button><br />
          <pre>{video.probe}</pre>
          <hr />
      </span>);
    }
    return buttons;
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
        <div style={{float: 'left', width: '50%', overflow: 'scroll'}}>
          {this.renderButtons()}
          Dynamic Src: {this.state.dynamicSrc ? 'true' : 'false' }
          <hr />
        </div>
        <div style={{position: 'fixed', top: '25px', right: '25px'}}>
          <button onClick={this.resetVideo.bind(this)}>Reset Video</button> <br />
          <video controls ref="video" />
        </div>
      </div>
    );
  }
}
Main.prototype.displayName = 'Main';

ReactInStyle.add('.main', {
  backgroundColor: 'rgba(0, 0, 0, .9)'
});


export default Main;
