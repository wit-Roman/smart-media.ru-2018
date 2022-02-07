import { Component } from "react"
import ButtonOpen from './ButtonOpen'
import data from '../data.json'
  
class SectionContact extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if (!document.getElementById("yandexmaps") ) {
            const yandScriptReady = this.yandScriptReady.bind(this)
            const script = document.createElement("script")
            script.id = "yandexmaps"
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey="+data.contact.apiKey
            script.async = true
            script.onload = () => {
                //if (!!ymaps) return null;
                ymaps.ready(function() {
                    yandScriptReady()
                }, function() {
                    console.error('ymaps init error', arguments)
                })
            }
            document.body.appendChild(script);
        }
    }
    yandScriptReady() {
        const mapElem = this.refs.yandex_map
        if ( !!ymaps)
        ymaps.ready(()=>{
            let myMap, myPlacemark, myPolyline;
            myMap = new ymaps.Map(mapElem, {
                center: [55.709530, 37.653772],
                zoom: 17,
                controls: ['zoomControl']
            });
            myPlacemark = new ymaps.Placemark([55.709530, 37.653772], {
                hintContent: "SmartMedia",
                balloonContent: data.contact.address
            });
            myPolyline = new ymaps.GeoObject({
                geometry:{
                    type: "LineString",
                    coordinates: [[55.709400, 37.653900], [55.709530, 37.653772]],
                    strokeWidth: 8,
                    strokeColor: '#0095c5'
                }
            });
            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects
                .add(myPlacemark)
                .add(myPolyline);
        });
    }
    render() {
        return (
            <div className="SectionContact">
                <div className="logo-color-wrap">
                    <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
                </div>
                <div className="SectionContact-wrap">
                    <div className="SectionContact-info">
                        <div className="SectionContact-title">КОНТАКТЫ</div>
                        <div className="SectionContact-text">
                            <div>
                                <p><a href={"tel:"+`${data.contact.links[0]}`}>{data.contact.links[0]}</a></p>
                                <p><a href={"mailto:"+`${data.contact.links[1]}`}>{data.contact.links[1]}</a></p>
                                <p><a href={"mailto:"+`${data.contact.links[2]}`}>{data.contact.links[2]}</a></p>
                                <p><a href={"mailto:"+`${data.contact.links[3]}`}>{data.contact.links[3]}</a></p>
                            </div>
                            <p>
                                <a target="_blank" href="https://m.me/SmartMedia.Msk">
                                    <img src="/static/img/separator.png"/>
                                </a>    
                            </p>
                            <p>{data.contact.address[0]}<br/>{data.contact.address[1]}</p>
                        </div>
                        <div className="SectionContact-button">
                            <ButtonOpen text="СВЯЗАТЬСЯ С НАМИ" formName="СВЯЗАТЬСЯ С НАМИ" />
                        </div>
                    </div>
                    <div className="SectionContact-map">
                        <div ref="yandex_map" style={{width: '100%', height: '100%'}}></div>
                    </div>
                </div>
                <div className="SectionContact-footer">
                    <span className="SectionContact-year">© SmartMedia, 2008—2019</span>
                    <span className="SectionContact-policy">
                        <a href="/static/pdf/privacy_policy.pdf" target="_blank">Политика конфиденциальности</a>&nbsp;&nbsp;&nbsp;<a href="/static/pdf/svod_vedomost.pdf" target="_blank">Результаты СОУТ</a>
                    </span>
                </div>
            </div>
        )
    }
}




export default SectionContact