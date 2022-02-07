const express = require('express')
const multer = require('multer')
const nodemailer = require("nodemailer")

const sendRouter = express.Router()
const storage = multer.diskStorage({
  destination: 'static/uploads/',
  filename: (req, file, cb) => {
    cb(null, getCurDate()+"_"+file.originalname)
  }
}) 
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1000 * 1000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = ['application/pdf','image/jpg','image/jpeg','image/png','text/plain','text/csv','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if ( !fileTypes.includes(file.mimetype) )
      return cb(new Error('Wrong mimetype'));
    if ( file.originalname > 32)
      return cb(new Error('Bad filename'));
    cb(null, true);
  }
})
const transporter = nodemailer.createTransport({
  pool: true,
  host: "webmail.smart-media.ru",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "sitemail-smart-mediaru@smart-media.ru",
    pass: "chaqu1yeej0maengi3eegeif6eeF"
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
})


sendRouter.post('/mail_vacancy_file', upload.single('download'), (req, res) => {
  if (!!req.file) {
    return res.status(200).send('file_ok')
  } else {
    return res.status(400).send('file_no')
  }
})

sendRouter.post('/mail_vacancy', (req, res) => {
  req.accepts('application/json')
  let bodyData = ''
  req.on('data', (data) => {
    bodyData += data;
  })

  req.on('end', () => {
    const body = JSON.parse(bodyData)
    if ( !validate(body.name,body.email,body.phone,body.text) ) {
      return res.status(400).send("Ошибка ввода");
    } else {
      console.log(body.download)
      const fileLink = (!body.download) ? '': '<p><b>Ссылка на файл: </b> '+'https://smart-media.ru/static/uploads/'+getCurDate()+"_"+body.download;
      mailOptions = {
        from: 'sitemail-smart-mediaru@smart-media.ru',
        to: '2witov@gmail.com, apopova@smart-media.ru',
        subject: 'Заполнена форма на smart-media.ru',
        html: '<div><p><b>Имя:</b> '+body.name+'</p> \
          <p><b>Email:</b> '+body.email+'</p> \
          <p><b>Телефон:</b> '+body.phone+'</p> \
          <p><b>Текст:</b> '+body.text+'</p> \
          ' + fileLink +'</p></div>'
      }
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err);
        return console.log("Message sent: " + info.response);
      })
    }

    return res.status(200).send('data_ok')
  })
})

const validate = (name,email,phone,text) => {
  if (name.length < 0 || name.length > 128) return false;
  if (email.length < 0 || email.length > 128) return false;
  if (phone.length < 0 || phone.length > 128) return false;
  if (text.length < 0 || text.length > 256) return false;
  return true;
}

const getCurDate = () => {
  const date = new Date();
  return date.getDate()+"."+date.getMonth()+"."+date.getFullYear()+"_"+date.getHours()+":"+date.getMinutes(); 
}

module.exports = sendRouter