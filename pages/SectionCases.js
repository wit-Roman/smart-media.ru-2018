import { Component } from 'react'
import data from '../data.json'

class SectionCases extends Component {
    constructor(props) {
        super(props)
        let arr = []
        data.cases.categories.forEach(el => arr.push(0))
        this.state = {
            selected: arr,
            selectedCase: 0
        }
    }
    handleItemClick(index) {
        this.setState({ selectedCase: index })
    }
    handleNavClick(index,parent) {
        const newIds = [...this.state.selected];
        newIds[parent] = index
        this.setState({ selected: newIds })
    }
    listItems() {
        return data.cases.categories.map((el, i) =>
            <li key={i} className={(i === this.state.selectedCase) ? "active" : "" } onClick={this.handleItemClick.bind(this,i)}>
                {el}
            </li>
        )
    }
    imageItems() {
        return data.cases.content.map((el, i) =>
            <div key={i} className={`SectionCases-set ${(i === this.state.selectedCase) ? "active": "" }`}>
                {this.slideItems(el,i)}
                <div className="SectionCases-nav">
                    {this.navItems(el,i)}
                </div>
            </div>
        )
    }
    navItems(slide,parent) {
        return slide.map((el, i) =>
            <div key={i} className="SectionCases-nav-item" onClick={this.handleNavClick.bind(this,i,parent)}>
                <div className={(i === this.state.selected[parent]) ? "active" : "" }></div>
            </div>
        )
    }
    slideItems(slide,parent) {
        return slide.map((el, i) =>
            <div key={i} className={`SectionCases-slide ${(i === this.state.selected[parent]) ? "active" : "" }`}>
                <img src={el.src}/>
                <div className="SectionCases-text">{el.text}</div>
                <div onClick={()=>this.props.fullpageApi.silentMoveTo("CasesDetail", el.anchor)} className="standart-button">ЧИТАТЬ КЕЙС</div>
                <div className="SectionCases-fone"></div>
            </div>
        )
    }
    render() {
        const {fullpageApi} = this.props

        return (
            <div className="SectionCases">
                <div className="logo-color-wrap">
                    <a href="/#Top"><img src="/static/img/sm_logo_color.png"/></a>
                </div>
                <div className="SectionCases-wrap">
                    <div className="SectionCases-slider">
                        {this.imageItems()}
                    </div>
                    <div className="SectionCases-list-wrap">
                        <div className="SectionCases-list-title">КЕЙСЫ</div>
                        <ul className="SectionCases-list">
                            {this.listItems()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionCases
/*
onWheel={(e)=>{
                        fullpageApi.setAllowScrolling(false)
                        e.deltaY > 0 ?
                            this.setState(prevState=>({ selectedCase: prevState.selectedCase < data.cases.categories.length-1 ? prevState.selectedCase + 1 : 0  })) :
                            this.setState(prevState=>({ selectedCase: prevState.selectedCase > 0 ? prevState.selectedCase - 1 : data.cases.categories.length-1  }));
                    }}
                    onMouseLeave={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(true)}}
                    onMouseEnter={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(false)}}
*/