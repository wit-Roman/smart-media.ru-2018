import Popup from "reactjs-popup"
import PopupFormWrap from "./FormWrap"

/*const RenderSwitch = ({open}) => {
    switch(open) {
        case 'task':
            return <PopupFormTask />;
        case 'direction':
            return <PopupFormDirection />;
        case 'vacancy':
            return <PopupFormVacancy />;   
        default:
            return null;
    }
}*/

const ButtonOpen = ({text,formName}) =>
    <Popup trigger={<div className="standart-button">{text}</div>} modal closeOnDocumentClick>
        {close =><div>
            <div className="popup-close" onClick={close}>
                <div className="popup-close-bar1"></div>
                <div className="popup-close-bar2"></div>
                <div className="popup-close-bar3"></div>
            </div>
            <PopupFormWrap open={open} formName={formName} />
        </div>}
    </Popup>

export default ButtonOpen