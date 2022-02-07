import data from '../data.json'
import ButtonOpen from './ButtonOpen'

const SectionAboutus = () =>
    <div className="SectionAboutus">
        <div className="logo-color-wrap">
            <a href="/#Top"><img src="/static/img/sm_logo_color.png" /></a>
        </div>
        <div className="SectionAboutus-wrap">
            <div className="SectionAboutus-text">
                <div className="SectionAboutus-title">КОМАНДА</div>
                <p>{data.aboutus.text}</p>
                <ButtonOpen open="vacancy" text="ПРИСОЕДИНИТЬСЯ К НАМ" formName="ПРИСОЕДИНЯЙТЕСЬ К НАМ!" />
            </div>
            <div className="SectionAboutus-img-wrap">
                <img src={data.aboutus.src} />
            </div>
        </div>
    </div>

export default SectionAboutus