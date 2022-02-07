import { Component } from 'react'
import Popup from 'reactjs-popup'
import PopupSmm from './PopupSmm'
import PopupContext from './PopupContext'
import PopupReputation from './PopupReputation'
import PopupSeo from './PopupSeo'
import PopupMedia from './PopupMedia'
import PopupFormWrap from "./FormWrap"

class SectionWedo extends Component {
    constructor(props) {
        super(props);
        this.state = { open: [false,false,false,false,false] };
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(index) {
        console.log(index)
        let arr = [...this.state.open]
        arr[index] = true
        this.setState({ open: arr });
    }
    closeModal() {
        this.setState({ open: [false,false,false,false,false] });
        this.onShow(true);
    }
    componentDidMount() {
        if ( typeof location === "object" && location.hash.includes('#Wedo/') ) {
            const url = location.hash.split("/")[1];
            const popupIndex = ['PopupSmm','PopupContext','PopupReputation','PopupSeo','PopupMedia'].indexOf(url);
            const openModal = (i) => {this.openModal(i)};
            window.onload = () => {
                setTimeout(() => { 
                    openModal(popupIndex)
                    history.pushState({url:"/",as:"#Wedo/"+url},null,'#Wedo/'+url) 
                },1000);
            }
        }
    }
    onShow(on,url='') {
        const closeModal = this.closeModal;
        if (!!this.props.fullpageApi)
            this.props.fullpageApi.setAllowScrolling(on);
        if (!!document.getElementsByClassName("main-menu")[0])
            document.getElementsByClassName("main-menu")[0].style.zIndex = !on ? 0 : 200;
        history.pushState({url:"/",as:"#Wedo"+url},null,'#Wedo'+url)
        window.onhashchange = function(event) {
            if ( event.oldURL.includes('#Wedo'+url) && event.newURL.includes('#Wedo') ) {
                closeModal()
            }
        }
    }
    render() {
        const {fullpageApi} = this.props
        return(
            <div className="SectionWedo">
                <div  className="SectionWedo-wrap">
                    <div className="logo-color-wrap">
                        <a href="/#Top"><img src="/static/img/sm_logo.png" /></a>
                    </div>
                    <div className="SectionWedo-title SectionWedo-item">МЫ<br />ДЕЛАЕМ</div>
                    <div className="SectionWedo-item-wrap">
                        <div className="SectionWedo-item">
                            <div ref="_PopupSmm" onClick={()=>this.openModal(0)}>
                                <div className="SectionWedo-item-image smm"></div>
                                <div className="SectionWedo-item-name">SMM</div>
                            </div>
                            <Popup 
                            modal 
                            closeOnDocumentClick
                            open={this.state.open[0]}
                            onOpen={()=>{ this.onShow(false,'/PopupSmm') }}
                            onClose={this.closeModal}>
                                <div className="popup-page-wrap PopupSmm" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
                                    <div className="popup-close" onClick={this.closeModal}>
                                        <div className="popup-close-bar1"></div>
                                        <div className="popup-close-bar2"></div>
                                        <div className="popup-close-bar3"></div>
                                    </div>
                                    <PopupSmm />
                                    <PopupFormWrap formName="Есть задача? Расскажите!" />
                                    <div className="popup-button-center">
                                        <a onClick={this.closeModal} className="standart-button" href="/#Cases">КЕЙСЫ</a>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className="SectionWedo-item">
                            <div ref="_PopupContext" onClick={()=>this.openModal(1)}>
                                <div className="SectionWedo-item-image context"></div>
                                <div className="SectionWedo-item-name">КОНТЕКСТ</div>
                            </div>
                            <Popup 
                            modal 
                            closeOnDocumentClick
                            open={this.state.open[1]}
                            onOpen={()=>{ this.onShow(false,'/PopupContext') }}
                            onClose={this.closeModal}>
                                <div className="popup-page-wrap PopupContext" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
                                    <div className="popup-close" onClick={this.closeModal}>
                                        <div className="popup-close-bar1"></div>
                                        <div className="popup-close-bar2"></div>
                                        <div className="popup-close-bar3"></div>
                                    </div>
                                    <PopupContext />
                                    <PopupFormWrap formName="Есть проект? Расскажите!" />
                                    <div className="popup-button-center">
                                        <a onClick={this.closeModal} className="standart-button" href="/#Cases">КЕЙСЫ</a>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className="SectionWedo-item">
                            <div ref="_PopupReputation" onClick={()=>this.openModal(2)}>
                                <div className="SectionWedo-item-image reputation"></div>
                                <div className="SectionWedo-item-name">РЕПУТАЦИЯ</div>
                            </div>
                            <Popup 
                            modal 
                            closeOnDocumentClick
                            open={this.state.open[2]}
                            onOpen={()=>{ this.onShow(false,'/PopupReputation') }}
                            onClose={this.closeModal}>
                                <div className="popup-page-wrap PopupReputation" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
                                    <div className="popup-close" onClick={this.closeModal}>
                                        <div className="popup-close-bar1"></div>
                                        <div className="popup-close-bar2"></div>
                                        <div className="popup-close-bar3"></div>
                                    </div>
                                    <PopupReputation />
                                    <PopupFormWrap formName="Закажите аудит бренда" />
                                    <div className="popup-button-center">
                                        <a onClick={this.closeModal} className="standart-button" href="/#Cases">КЕЙСЫ</a>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className="SectionWedo-item">
                            <div ref="_PopupSeo" onClick={()=>this.openModal(3)}>
                                <div className="SectionWedo-item-image seo"></div>
                                <div className="SectionWedo-item-name">SEO</div>
                            </div>
                            <Popup 
                            modal 
                            closeOnDocumentClick
                            open={this.state.open[3]}
                            onOpen={()=>{ this.onShow(false,'/PopupSeo') }}
                            onClose={this.closeModal}>
                                <div className="popup-page-wrap PopupSeo" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
                                    <div className="popup-close" onClick={this.closeModal}>
                                        <div className="popup-close-bar1"></div>
                                        <div className="popup-close-bar2"></div>
                                        <div className="popup-close-bar3"></div>
                                    </div>
                                    <PopupSeo />
                                    <PopupFormWrap formName="Закажите аудит вашего сайта" />
                                    <div className="popup-button-center">
                                        <a onClick={this.closeModal} className="standart-button" href="/#Cases">КЕЙСЫ</a>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        <div className="SectionWedo-item">
                            <div ref="_PopupMedia" onClick={()=>this.openModal(4)}>
                                <div className="SectionWedo-item-image media-adv"></div>
                                <div className="SectionWedo-item-name">МЕДИЙНАЯ<br />РЕКЛАМА</div>
                            </div>
                            <Popup 
                            modal 
                            closeOnDocumentClick
                            open={this.state.open[4]}
                            onOpen={()=>{ this.onShow(false,'/PopupMedia') }}
                            onClose={this.closeModal}>
                                <div className="popup-page-wrap PopupMedia" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
                                    <div className="popup-close" onClick={this.closeModal}>
                                        <div className="popup-close-bar1"></div>
                                        <div className="popup-close-bar2"></div>
                                        <div className="popup-close-bar3"></div>
                                    </div>
                                    <PopupMedia />
                                    <PopupFormWrap formName="Есть задача? Расскажите!" />
                                    <div className="popup-button-center">
                                        <a onClick={this.closeModal} className="standart-button" href="/#Cases">КЕЙСЫ</a>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    

export default SectionWedo