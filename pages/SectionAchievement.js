import { Component } from 'react'
import data from '../data.json'
const achLength = data.achievement.length-1

class SectionAchievement extends Component {
    constructor(props) {
        super(props);
        this.state = {prev: achLength, current:0, next: 1}
    }
    handleRightArrow() {
        this.refs._achFone.style.transform = "translateX(-"+this.state.next+"0vw)";
        this.setState(prevState=> ({
            prev: ( prevState.prev+2 < achLength) ? prevState.prev+=3 : prevState.prev + 2 - achLength,
            current: ( prevState.current+2 < achLength) ? prevState.current+=3 : prevState.current + 2 - achLength,
            next: ( prevState.next+2 < achLength) ? prevState.next+=3 : prevState.next + 2 - achLength
        }))
        this.animateSlide()
    }
    handleLeftArrow() {
        this.refs._achFone.style.transform = "translateX(-"+this.state.next+"0vw)";
        this.setState(prevState=> ({
            prev: ( prevState.prev-2 > 0) ? prevState.prev-=3 : achLength - (2-prevState.prev),
            current: ( prevState.current-2 > 0) ? prevState.current-=3 : achLength - (2-prevState.current),
            next: ( prevState.next-2 > 0) ? prevState.next-=3 : achLength - (2-prevState.next)
        }))
        this.animateSlide()
    }
    animateSlide() {
        this.refs._prev.classList.remove("animated")
        this.refs._current.classList.remove("animated")
        this.refs._next.classList.remove("animated")
        this.refs._prev.classList.remove("zoomIn")
        this.refs._current.classList.remove("zoomIn")
        this.refs._next.classList.remove("zoomIn")
        setTimeout(()=>{
            this.refs._prev.classList.add("animated")
            this.refs._current.classList.add("animated")
            this.refs._next.classList.add("animated")
            this.refs._prev.classList.add("zoomIn")
            this.refs._current.classList.add("zoomIn")
            this.refs._next.classList.add("zoomIn")
        },200)
    }
    slider() {
        let slider = [,,]
        data.achievement.forEach( (el,i) => {
            if (i === this.state.prev) {
                slider[0] = (
                    <div key="_prev" ref="_prev" className="SectionAchievement-slide prev animated">
                        <div className="SectionAchievement-slide-info">
                            <div className="SectionAchievement-img-wrap">
                                <img src={el.src} />
                            </div>
                            <div className="SectionAchievement-text">
                                <p>{el.text}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            if (i === this.state.current) {
                slider[1] = (
                    <div key="_current" ref="_current" className="SectionAchievement-slide current animated">
                        <div className="SectionAchievement-slide-info">
                            <div className="SectionAchievement-img-wrap">
                                <img src={el.src} />
                            </div>
                            <div className="SectionAchievement-text">
                                <p>{el.text}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            if (i === this.state.next) {
                slider[2] = (
                    <div key="_next" ref="_next" className="SectionAchievement-slide next animated">
                        <div className="SectionAchievement-slide-info">
                            <div className="SectionAchievement-img-wrap">
                                <img src={el.src} />
                            </div>
                            <div className="SectionAchievement-text">
                                <p>{el.text}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return slider
    }
    render() {
        const {fullpageApi} = this.props;
        return (
            <div className="SectionAchievement">
                <div className="logo-color-wrap">
                    <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
                </div>
                <div className="SectionAchievement-title">ДОСТИЖЕНИЯ</div>
                <div ref="_achFone" className="SectionAchievement-fone">
                    <div className="SectionAchievement-fone-img"></div>
                </div>
                <div className="SectionAchievement-wrap" 
                    onWheel={(e)=> { e.deltaY>0 ? this.handleRightArrow() : this.handleLeftArrow()} }
                    onMouseLeave={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(true)}}
                    onMouseEnter={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(false)}}>
                    {this.slider()}
                </div>
                <div className="nav-arrow">
                    <div onClick={this.handleLeftArrow.bind(this)} className="nav-arrow-left"></div>
                    <div onClick={this.handleRightArrow.bind(this)} className="nav-arrow-right"></div>
                </div>
            </div>
        )
    }
}

export default SectionAchievement