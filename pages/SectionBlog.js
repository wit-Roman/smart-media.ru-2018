import ButtonOpen from './ButtonOpen'
import data from '../data.json'

const Items = () =>
    data.blog.map( (el,i)=>
        <div key={i} className="item"
        onMouseEnter={(e)=>{e.currentTarget.children[0].children[0].src = e.currentTarget.children[0].children[0].getAttribute("hover")}} 
        onMouseLeave={(e)=>{e.currentTarget.children[0].children[0].src = e.currentTarget.children[0].children[0].getAttribute("source")}}>
            <div className="item-img">
                <img src={el.src} source={el.src} hover={el.src_hover} />
            </div>
            <div className="item-name">
                {el.preview}
            </div>
        </div>
    )

const SectionBlog = () => 
    <div className="SectionBlog">
        <div className="logo-color-wrap">
            <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
        </div>
        <div className="SectionBlog-title">БЛОГ</div>
        <div className="SectionBlog-item-wrap">
            <Items />
        </div>
        <div className="SectionBlog-button">
            <ButtonOpen open="" text="ЧИТАТЬ БОЛЬШЕ" />
        </div>
    </div>

export default SectionBlog