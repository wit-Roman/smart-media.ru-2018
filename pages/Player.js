import { Component } from 'react'

const videoJsOptions = {
    autoPlay: 'muted',
    controls: false,
    preload: 'auto',
    loop: true,
    muted: true,
    poster: '/static/img/poster.jpg',
    src: '/static/video/sm_v2.mp4',
    type: 'video/mp4'
}

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {play:false,mute:false}
        this.togglePlay = this.togglePlay.bind(this)
        this.toggleMute = this.toggleMute.bind(this)
    }
    togglePlay () {
        this.setState(prevState=>({play:!prevState.play}));
        (this.state.play) ? this.refs._video_elem.play() : this.refs._video_elem.pause();
    }
    toggleMute () {
        this.setState(prevState=>({mute:!prevState.mute}));
        this.refs._video_elem.muted = (this.state.mute) ? true : false;
    }
    render () {
        return (
            <div>
                <div className="video-container">
                    <div className="video-fone"></div>
                    <div className="video-wrap">
                        <video ref="_video_elem" className="video-elem" {...videoJsOptions} onPause={()=>{this.setState({play:true})}} />
                    </div>
                </div>
                <div onClick={this.togglePlay} className={`button-play ${(this.state.play)?"on":"off"}`}></div>
                <div onClick={this.toggleMute} className={`button-mute ${(this.state.mute)?"off":"on"}`}></div>
            </div>
        )
    }
}

export default Player