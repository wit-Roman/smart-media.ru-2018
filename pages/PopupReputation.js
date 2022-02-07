const PopupReputation = () => 
    <div className="popupReputation" onWheel={(e)=>{e.currentTarget.scrollTop += (e.deltaY>0)?100:-100}}>
        <h2 className="popup-title">ORM</h2>
        <div className="popup-text">
            <p>Путь потребителя к покупке – это история поиска. Он изучает вас. Прямо сейчас, каждый день и каждую минуту. В поисковых системах, в соцсетях, на YouTube и на сайтах с отзывами.</p><p>Мы создали инструменты для глубокой аналитики информационного поля, которые помогают проследить весь путь ваших покупателей. Мы покажем, где пользователи узнают информацию о вас, позитивная она или негативная, сколько покупателей вы теряете из-за негатива в ваш адрес и сколько уходит к конкурентам.</p><p>Затем мы выстроим стратегию комплексного управления репутацией бренда в сети (Online Reputation Management).</p>
        </div>
        <div className="popup-item-title">Мы поможем:</div>
        <div className="popup-itemset">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-path.png" />
                </div>
                <div className="popup-item-name">Пройти путь выбора бренда и товара вместе с пользователем</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-eye.png" />
                </div>
                <div className="popup-item-name">Понять, что он видит в информационном пространстве</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-dialog.png" />
                </div>
                <div className="popup-item-name">Начать с ним коммуникацию так, как он хочет</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-like.png" />
                </div>
                <div className="popup-item-name">Дать ответы на все его вопросы и по пути отработать негатив</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-crown.png" />
                </div>
                <div className="popup-item-name">Донести УТП и сформировать ценность бренда</div>
            </div>
        </div>
        <div className="popup-item-title">Наши главные инструменты:</div>
        <div className="popup-itemset popup-itemset-4">
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-anal.png" />
                </div>
                <div className="popup-item-name">Аналитика и мониторинг репутации</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-piram.png" />
                </div>
                <div className="popup-item-name">SERM – управление репутацией в результатах поиска</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-alert.png" />
                </div>
                <div className="popup-item-name">Продвижение бренда через контент и маркетинг влияния</div>
            </div>
            <div className="popup-item">
                <div className="popup-item-image">
                    <img src="/static/img/brand-defend.png" />
                </div>
                <div className="popup-item-name">Антикризисные стратегии и защита репутации</div>
            </div>
        </div>
    </div>

export default PopupReputation