import nodemailer from 'nodemailer';
import path, { dirname } from 'path';
import fs from 'fs';

export const SendMessage  = async (req, res) => {
    try {
        const { name, numberOrMail, choseMassanger } = req.body;
        const localPathFile = '/tickets/ticket.pdf';
      
        const filePath = path.join(process.cwd(), localPathFile); // Отримайте шлях до файлу
      
        const fileContent = fs.readFileSync(filePath);
      
        let transporter = nodemailer.createTransport({
          host: 'smtp.ukr.net',
          port: 2525,
          secure: true,
          auth: {
            user: 'ros_kichuk@ukr.net',
            pass: 'yFs1TF9IcF897CtW'
          }
        });
      
        let mailOptions = {
          from: 'ros_kichuk@ukr.net',
          to: 'nexuslab2000@gmail.com',
          subject: 'Sucsesed registration',
          text: `Імя: ${name}; Контактні данні ${numberOrMail}; Спосіб звязку ${choseMassanger}.`,
          attachments: [
            {
              filename: 'ticket.pdf',
              content: fileContent
            }
          ]
        };
      
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      
        res.json({ message: 'sucssesed' });
    } catch(error) {
        console.log(error);
    }
}