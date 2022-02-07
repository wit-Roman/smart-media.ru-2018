import { Component } from 'react'
import ButtonOpen from './ButtonOpen'
import data from '../data.json'
const casesDetailLast = data.casesDetail.length - 1

class SectionCasesDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {selected: 0}
    }
    render() {
        const {fullpageApi} = this.props
        return (<div className="SectionCasesDetail">
            {data.casesDetail.map((el,i,arr)=>
                <div key={i} className="slide" data-anchor={el.data_anchor}>
                    <div className="SectionCasesDetail-slide-wrap">
                        <div className="SectionCasesDetail-text-wrap">
                            <div className="SectionCasesDetail-title">{el.title}</div>
                            <div className="SectionCasesDetail-desc">{el.desc}</div>
                            <div className="SectionCasesDetail-text" 
                            onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0) ? 80 : -80 }}
                            onMouseLeave={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(true)}}
                            onMouseEnter={()=>{if (!!fullpageApi) fullpageApi.setAllowScrolling(false)}}>
                                <div dangerouslySetInnerHTML={{__html: el.text}} />
                            </div>
                            <div className="nav-arrow">
                                <div onClick={()=>{
                                    if (!fullpageApi) return;
                                    this.setState({ selected: (i > 0) ? i-1 : 0 });
                                    fullpageApi.moveSlideLeft();
                                }} className="nav-arrow-left">
                                    { (i>0) ? arr[i-1].nav : arr[casesDetailLast].nav }
                                </div>
                                <div onClick={()=>{
                                    if (!fullpageApi) return;
                                    this.setState({ selected: (i < casesDetailLast) ? i+1 : 0 });
                                    fullpageApi.moveSlideRight();
                                }} className="nav-arrow-right">
                                    { (i<casesDetailLast) ? arr[i+1].nav : arr[0].nav }
                                </div>
                            </div>
                            <div className="SectionCasesDetail-button-wrap">
                                <ButtonOpen text="ЗАКАЗАТЬ" formName="ЕСТЬ ПРОЕКТ? РАССКАЖИТЕ!" />
                            </div>
                        </div>
                        <div className="SectionCasesDetail-img-wrap">
                            <img src={el.src} />
                            <div className="SectionCasesDetail-nav">
                                {arr.map((el, i) =>
                                    <div key={i} className="SectionCasesDetail-nav-item" onClick={()=>{
                                        if (!fullpageApi) return;
                                        this.setState({ selected: i });
                                        if (i !== this.state.selected)
                                            fullpageApi.moveTo('CasesDetail',i);
                                    }}>
                                        <div className={ i === this.state.selected ? "active" : "" }></div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>)
    }
}

export default SectionCasesDetail
/*
 onWheel={(e)=>{
                            if (e.deltaY>0) {
                                if (!fullpageApi) return;
                                this.setState({ selected: (i > 0) ? i-1 : 0 });
                                fullpageApi.moveSlideLeft();
                            } else {
                                if (!fullpageApi) return;
                                this.setState({ selected: (i < casesDetailLast) ? i+1 : 0 });
                                fullpageApi.moveSlideRight();
                            } 
                        }}
onWheel={(e)=>{ 
                        if (e.deltaY>0) {
                            if (!fullpageApi) return;
                            this.setState({ selected: (i > 0) ? i-1 : 0 });
                            fullpageApi.moveSlideLeft();
                        } else {
                            if (!fullpageApi) return;
                            this.setState({ selected: (i < casesDetailLast) ? i+1 : 0 });
                            fullpageApi.moveSlideRight();
                        }
                    }}
*/