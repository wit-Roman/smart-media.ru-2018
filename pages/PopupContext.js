const PopupContext = () => 
    <div className="popupContext" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
        <h2 className="popup-title">Контекстная реклама</h2>
        <div className="popup-text">
            <p>Контекстная реклама – один из наших любимых инструментов. Мы перфоманс-агентство, работаем на результат и отвечаем за него. А контекстная реклама соответствует такому подходу как нельзя лучше.</p><p>Мы глубоко вникаем в особенности бизнеса клиентов, досконально разбираемся в инструментах контекстной рекламы и аналитики. Мы быстро распределяем задачи, работаем по регламентам и в ежедневном режиме контролируем результаты. Это позволяет запускать действительно масштабные рекламные кампании в сжатые сроки и достигать поставленных KPI по целевым звонкам и продажам с первого месяца.</p><p>Наша гордость – клиенты, с которыми мы работаем долгие годы. Среди них – крупные застройщики, производители лекарств и медицинские клиники, торговые и производственные компании.</p>
        </div>
        <div className="popup-item-title">Наши преимущества:</div>
        <div className="popup-itemset">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/context-team.png" />
                </div>
                <div className="popup-item-name">Профессиональная и въедливая команда</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/context-band.png" />
                </div>
                <div className="popup-item-name">Ведение «контекста» в связке с рекламой в других каналах</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/context-moon.png" />
                </div>
                <div className="popup-item-name">Опыт в сложных конкурентных тематиках</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/context-rocket.png" />
                </div>
                <div className="popup-item-name">Работаем по KPI, привязанным к конечным продажам</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/context-control.png" />
                </div>
                <div className="popup-item-name">Мощная аналитика и контроль результатов кампаний</div>
            </div>
        </div>
    </div>

export default PopupContext