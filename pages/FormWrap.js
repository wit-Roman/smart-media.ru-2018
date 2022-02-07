import FormBody from './FormBody.js'

const PopupFormWrap = ({formName=''}) =>
    <div className="PopupFormDirection popup-form-wrap">
        <div className="popup-form-title">{formName}</div>
        <FormBody />
    </div>

export default PopupFormWrap