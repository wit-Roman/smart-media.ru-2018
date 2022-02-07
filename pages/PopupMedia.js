const PopupMedia = () => 
    <div className="popupMedia" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
        <h2 className="popup-title">Медийная реклама</h2>
        <div className="popup-text">
            <p>Для нас медийная реклама – один из главных инструментов комплексного маркетинга. Мы постоянно исследуем, как различные инструменты, форматы и каналы влияют на решение о покупке. И выстраиваем стратегию продвижения так, чтобы ускорить путь пользователя и увеличить бизнес-результаты клиента.</p><p>Наша система мультиканальной аналитики позволяет оценить вклад каждого баннера и публикации в целевые звонки и продажи в реальном времени. Так что наши медиапланы строятся на реальных данных об эффективности площадок и размещений, и мы прогнозируем и контролируем показатель конверсии на каждом этапе воронки продаж. А за счет системы регламентов и разделения обязанностей запускаем масштабные кампании в сверхсжатые сроки и достигаем поставленных KPI с первых месяцев размещения.</p><p>А еще мы ценим умение адаптироваться! Поэтому у нас всегда есть «план Б» и даже «план Ю» на случай, если что-то пойдет не так.</p>
        </div>
        <div className="popup-item-title">Наш подход:</div>
        <div className="popup-itemset">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-fast.png" />
                </div>
                <div className="popup-item-name">Быстро работаем и быстро реагируем на изменения</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-effective.png" />
                </div>
                <div className="popup-item-name">Знаем, что эффективно в медийке, и первыми осваиваем новые форматы</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-trust.png" />
                </div>
                <div className="popup-item-name">Формируем знание о продукте на тех площадках, которым доверяют пользователи</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-estimate.png" />
                </div>
                <div className="popup-item-name">Оцениваем не клики и просмотры, а вклад медийной рекламы в продажи</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-anal.png" />
                </div>
                <div className="popup-item-name">Опираемся на глубокую аналитику, прозрачную для клиента</div>
            </div>
        </div>
        <div className="popup-item-title">Наши преимущества:</div>
        <div className="popup-itemset popup-itemset-4">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-avowal.png" />
                </div>
                <div className="popup-item-name">Сильная команда и признание рынка</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-own.png" />
                </div>
                <div className="popup-item-name">Собственные стратегии и технологии</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-billing.png" />
                </div>
                <div className="popup-item-name">Большой биллинг и выстроенные отношения с площадками</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/media-production.png" />
                </div>
                <div className="popup-item-name">Свой продакшен и надежные подрядчики</div>
            </div>
        </div>
    </div>

export default PopupMedia