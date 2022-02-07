import { useState, useEffect } from 'react'
import ButtonOpen from './ButtonOpen'

function SideMenu () {
    const [active, toggleActive] = useState(false)
    useEffect(() => {
        if (!!document.getElementById("fullpage")) 
            document.getElementById("fullpage").onclick = () =>
                toggleActive(false);
    })
/*<li data-menuanchor="Blog">
    <a href="#Blog">Блог</a>
</li>*/
    return (
        <div>
            <div className={`main-menu ${(active)?"active":""}`}>
                <div className="main-menu-openbtn" onClick={() => toggleActive(!active)}>
                    <div className="main-menu-openbtn-bar1"></div>
                    <div className="main-menu-openbtn-bar2"></div>
                    <div className="main-menu-openbtn-bar3"></div>
                </div>
                <div className="main-menu-wrap">
                    <ul className="main-menu-list">
                        <li data-menuanchor="Wedo">
                            <a href="#Wedo">Мы делаем</a>
                        </li>
                        <li data-menuanchor="Cases">
                            <a href="#Cases">Кейсы</a>
                        </li>
                        <li data-menuanchor="Recommend">
                            <a href="#Recommend">Нас рекомендуют</a>
                        </li>
                        <li data-menuanchor="Team">
                            <a href="#Team">Команда</a>
                        </li>
                        <li data-menuanchor="Achievement">
                            <a href="#Achievement">Достижения</a>
                        </li>
                        <li data-menuanchor="Contact">
                            <a href="#Contact">Контакты</a>
                        </li>
                    </ul>
                    <div className="main-menu-buttons">
                        <ButtonOpen text="ПРИСОЕДИНИТЬСЯ К НАМ" formName="ПРИСОЕДИНЯЙТЕСЬ К НАМ!" />
                        <br />
                        <ButtonOpen text="СВЯЗАТЬСЯ С НАМИ" formName="ЕСТЬ ЗАДАЧА? РАССКАЖИТЕ!" />
                    </div>
                </div>
                <div className="main-menu-bottom">
                    <a href="https://www.facebook.com/SmartMedia.Msk/" target="_blank" rel="nofollow" className="fb-icon"></a>
                </div>
            </div>
        </div>
    )
}

export default SideMenu