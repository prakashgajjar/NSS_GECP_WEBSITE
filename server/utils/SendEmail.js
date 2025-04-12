import nodemailer from 'nodemailer';


const sendEmail = async (to, subject, text, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    const mailOptions = {
      from: `"NSS GEC PATAN" <${process.env.EMAIL_USER}>`,
      to, 
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return true;
  } catch (error) {
    console.error("Email sending error: ", error.message);
    return false;
  }
};

export default sendEmail;
