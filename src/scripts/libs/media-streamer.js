/* globals MediaSource */

class MediaPlayer {
  constructor({$video, onReady=()=>{}}) {
    if (!window.MediaSource || !window.MediaSource.isTypeSupported('video/webm; codecs="vp8,vorbis"')) {
      alert('Your browser is not supported');
      return;
    }
    this.onReady = onReady;
      this.$video = $video;
    this.duration = 0;
    this.mediaSource = new MediaSource();
    console.log($video);
    this.mediaSource.addEventListener('sourceopen', () => {
      console.log('Creating source buffer');
      this.createSourceBuffer();
      this.onReady();
    }, false);
    $video.src = URL.createObjectURL(this.mediaSource);
  }
  downloadVideo(videoUrl) {
    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', videoUrl, true);
    this.xhr.responseType = 'arraybuffer';
    this.xhr.onload = () => {
      this.appendBuffer(this.xhr);
    };

    this.xhr.onerror = () => {
      console.log('Failed to download video data');
    };
    this.xhr.send();
  }
  createSourceBuffer () {
     this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vp8,vorbis"');
     this.sourceBuffer.addEventListener('updateend', function () {
         console.log('Ready');
      }, false);
  }
  appendBuffer(xhr) {
    // return () => {
      if (xhr.status !== 200) {
        console.log('Failed to download video data');
      } else {
        const arr = new Uint8Array(xhr.response);
        console.log(arr);
        const sourceBuffer = this.mediaSource.sourceBuffers[0];
        if (!sourceBuffer.updating) {
          console.log('Appending video data to buffer', this.mediaSource.duration, this.duration);
          sourceBuffer.timestampOffset = this.mediaSource.duration || this.duration;
          sourceBuffer.appendBuffer(arr);
        } else {
          console.log('Source Buffer failed to update');
        }
      }
    // };
  }
}

export default MediaPlayer;