import data from '../data.json'

const SectionRecommend = ({fullpageApi}) =>
    <div className="SectionRecommend">
        <div className="logo-color-wrap">
            <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
        </div>
        <div className="SectionRecommend-title">НАС РЕКОМЕНДУЮТ</div>
        {data.recommend.map( (el,i,arr)=>
        <div key={i} className="slide" data-anchor={"rek"+i}>
            <div className="SectionRecommend-slide-wrap">
                <div className="SectionRecommend-img-wrap">
                    <img src={el.src} />
                </div>
                <div className="SectionRecommend-text">
                    <div className="SectionRecommend-text-name">{el.name}</div>
                    <div className="SectionRecommend-text-desc">{el.desc}</div>
                    <p>{el.text[0]}</p>
                    <p>{el.text[1]}</p>
                    <p>{el.text[2]}</p>
                </div>
                <div className="nav-arrow">
                    <div onClick={()=>location.href="#Recommend/rek"+(i > 0 ? i-1 : arr.length-1)} className="nav-arrow-left"></div>
                    <div onClick={()=>location.href="#Recommend/rek"+(i < arr.length-1 ? i+1 :0)} className="nav-arrow-right"></div>
                </div>
            </div>
        </div>)}
    </div>
//onWheel={(e)=>{ e.deltaY>0 ? fullpageApi.moveSlideLeft() : fullpageApi.moveSlideRight() }}
export default SectionRecommend