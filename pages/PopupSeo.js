const PopupSeo = () => 
    <div className="popupSeo" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
        <h2 className="popup-title">SEO</h2>
        <div className="popup-text">
            <p>Мы много лет продвигаем сайты в тематиках с высокой конкуренцией и длинным циклом продаж. Наша задача – привести заинтересованных пользователей на ваш сайт и сделать их путь к покупке простым и удобным.</p><p>Мы улучшаем сайт для поисковых систем и для пользователей. Оптимизируем структуру и контент, внедряем прозрачную аналитику, увеличиваем конверсионный трафик и растим заказы.</p>
        </div>
        <div className="popup-item-title">Наш подход:</div>
        <div className="popup-itemset">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-promotion.png" />
                </div>
                <div className="popup-item-name">Продвигаем сайты в недвижимости, медицине, фарме, B2B</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-search.png" />
                </div>
                <div className="popup-item-name">Приводим клиентов из поиска через SEO и SERM</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-context.png" />
                </div>
                <div className="popup-item-name">Приводим клиентов из поиска через SEO и SERM</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-anal.png" />
                </div>
                <div className="popup-item-name">Основываемся на данных – анализируем все, что происходит с сайтом</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-kitchen.png" />
                </div>
                <div className="popup-item-name">Постоянно готовы отчитаться и показать всю кухню</div>
            </div>
        </div>
        <div className="popup-item-title">Что мы делаем:</div>
        <div className="popup-itemset">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-web.png" />
                </div>
                <div className="popup-item-name">Проводим аудит сайта с точки зрения поисковиков и пользователей</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-rocket.png" />
                </div>
                <div className="popup-item-name">Оптимизируем сайт внутри и снаружи</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-through.png" />
                </div>
                <div className="popup-item-name">Внедряем сквозную аналитику</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-flag.png" />
                </div>
                <div className="popup-item-name">Наполняем сайт лучшим контентом в категории</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/seo-funnel.png" />
                </div>
                <div className="popup-item-name">Повышаем конверсию трафика в заказ, покупку, запись к врачу</div>
            </div>
        </div>
    </div>

export default PopupSeo