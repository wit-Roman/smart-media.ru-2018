import { Component } from 'react'

class FormBody extends Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateFile(file) {
        const fileTypes = ['application/pdf','image/jpg','image/jpeg','image/png','text/plain','text/csv','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        if (file.name.length < 0 && file.name.length > 32) return 'Неправильное имя файла';
        if (file.size > 10*1000*1000) return 'Размер файла > 10MB';
        if (!fileTypes.includes(file.type)) return 'Недопустимый формат файла';
        return false;
    }
    handleInputChange(e) {
        (e.target.value.length > 0) ? e.target.classList.add("active-field") : e.target.classList.remove("active-field");
    }
    handleFileChange(e) {
        const progress = this.refs._progress;
        const send_button = this.refs._button;
        if ( !e.target.files[0] ) {
            progress.innerText = '';
            send_button.disabled = false;
        } else {
            const file = e.target.files[0];
            const isValid = this.validateFile(file)
            send_button.disabled = (!isValid) ? false : true;
            progress.innerText = (!isValid) ?  'Файл: '+file.name : isValid;
        }        
    }
    handleSubmit(e){
        e.preventDefault();
        /* xhr.file = e.target.download.files[0];
        xhr.responseType = 'json'
        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
              console.log("success");
            } else {
              console.log("error " + this.status);
            }
        }*/
        if (!!e.target.download.files[0]) 
            this.send_file(e.target.download.files[0]);
        console.log(e.target.elements.download)
        if (e.target.elements.name.value.length>1 && e.target.elements.email.value.length>1 && e.target.elements.phone.value.length>1)
            this.send_data(e.target);
    }
    send_file(file) {
        const progress = this.refs._progress
        let formData = new FormData();
        formData.append("download", file);

        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(event) {
            progress.innerText = 'Загружено: ' + event.loaded + ' / ' + event.total
        }
        xhr.onreadystatechange = () => {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            }
        }
        xhr.open("POST", "/mail_vacancy_file", true);
        xhr.setRequestHeader("X-Requested-With","xmlhttprequest");
        xhr.send(formData);
    }
    send_data(form) {
        const send_button = this.refs._button
        let formData = new FormData(form);
        let data = {}
        for(var el of formData.entries()) {
            data[el[0]] = el[1]
        }
        data['download'] = (data.download.size > 10) ? data.download.name : false;
        
        data = JSON.stringify(data);

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                send_button.innerText = "Успешно отправлено!"
                send_button.disabled = true
            }
            else if (this.status === 400) {          
                alert('Ошибка ввода');
            }
        }
        xhr.open("POST", "/mail_vacancy", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
    }

    render() {
      return (
        <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div className="popup-form-row1">
                <label className="popup-form-field-wrap">
                    <input type="text" name="name" className="popup-form-text" onChange={this.handleInputChange} required pattern="[A-Za-zА-Яа-я.-Ёё\s\s\s]{2,64}" title="Буквенные символы и пробел" />
                    <div className="popup-form-field">Ваше имя</div>
                </label>
                <label className="popup-form-field-wrap">
                    <input type="text" name="email" className="popup-form-text" onChange={this.handleInputChange} required pattern="[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$" title="Email в формате test@test.test" />
                    <div className="popup-form-field">Почта</div>
                </label>
            </div>
            <div className="popup-form-row2">
                <label className="popup-form-field-wrap">
                    <input type="text" name="phone" className="popup-form-text" onChange={this.handleInputChange} required pattern="((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" title="Номер телефона в формате +7-123-456-78-90" />
                    <div className="popup-form-field">+7</div>
                </label>
            </div>
            <div className="popup-form-row3">
                <label className="popup-form-field-wrap">
                    <input type="text" name="text" className="popup-form-text" onChange={this.handleInputChange} pattern="[A-Za-zА-Яа-я.-Ёё\s\s\s]{0,512}" title="Буквенные символы и пробел" />
                    <div className="popup-form-field">Расскажите о вашем проекте</div>
                </label>
            </div>
            <div className="popup-form-bottom">
                <div className="popup-form-bottom-left">
                    <div className="popup-form-agree">
                        Нажимая кнопку &laquo;Отправить&raquo;,<br />
                        вы соглашаетесь на обработку ваших<br />
                        персональных данных
                    </div>
                </div>
                <div className="popup-form-bottom-right">
                    <label className="popup-form-field-wrap">
                        <input type="file" name="download" className="popup-form-file" ref="_file" onChange={this.handleFileChange} />
                        <div className="popup-form-file-icon"></div>
                        <div className="popup-form-file-progress" ref="_progress"></div>
                    </label>
                    <button ref="_button" type="submit" className="standart-button">ОТПРАВИТЬ</button>
                </div>
            </div>
        </form>
      )
    }
}

export default FormBody