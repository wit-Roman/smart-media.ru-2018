import Popup from "reactjs-popup"
import PopupFormWrap from "./FormWrap"
import Player from './Player'
import data from '../data.json'

const SectionTop = () => 
    <div className="SectionTop">
        <Player />
        <div className="SectionTop-text-wrap">
            <div className="SectionTop-top">
                <h1 className="SectionTop-text-title">{data.top.name[0]}<br/>{data.top.name[1]}</h1>
                <div className="SectionTop-text-border"></div>
                <div className="SectionTop-text-year">{data.top.year}</div>
            </div>
            <div className="SectionTop-row">
                <div className="SectionTop-logo">
                    <img src="/static/img/sm_logo.png" />
                </div>
                <div className="SectionTop-text-content">
                    <p>{data.top.text[0]}</p>
                    <Popup trigger={<p className="standart-link">{data.top.text[1]}</p>} modal closeOnDocumentClick>
                        {close =><div>
                            <div className="popup-close" onClick={close}>
                                <div className="popup-close-bar1"></div>
                                <div className="popup-close-bar2"></div>
                                <div className="popup-close-bar3"></div>
                            </div>
                            <PopupFormWrap formName="Есть задача? Расскажите!" />
                        </div>}
                    </Popup>
                    <p>{data.top.text[2]}</p>
                </div>
            </div>
        </div>
    </div>

export default SectionTop