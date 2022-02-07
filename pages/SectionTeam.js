import { Component } from 'react'
import data from '../data.json'

class SectionTeam extends Component {
    constructor(props) {
        super(props)
    }
    componentWillUpdate (nextProps) {
        if (!!this.refs._animate_0) {
            for ( let i = 0; i < data.team.length; i++ ) {
                if (nextProps.animate) {
                    setTimeout(()=>{ this.refs["_animate_"+i].classList.add("animate") }, i*150)
                } else {
                    this.refs["_animate_"+i].classList.remove("animate")
                }
            }
        }
    }
    Items = () => 
        data.team.map((el,i)=>
            <div key={i} ref={"_animate_"+i} className="SectionTeam-item">
                <img src={el.src} alt={el.name} />
                <div className="SectionTeam-item-info">
                    <div className="SectionTeam-item-name">{el.name}</div>
                    <div className="SectionTeam-item-position">{el.position}</div>
                    <div className="SectionTeam-item-text">{el.text}</div>
                    <div className="SectionTeam-item-fone"></div>
                    <div className="SectionTeam-item-image"><img src={el.src_hover} /></div>
                </div>
            </div>)

    render() {
        return (
            <div className="SectionTeam">
                <div className="logo-color-wrap">
                    <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
                </div>
                <div className="SectionTeam-wrap">
                    {this.Items()}
                </div>
            </div>
        )
    }
}

export default SectionTeam