import sendEmail from '../utils/SendEmail.js'

const emailToUser= async (email , name)=>{
    await sendEmail(
        email,
        "Welcome to NSS GEC PATAN 🎉",
        `Hello ${name}, welcome aboard!`,
        `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 30px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #2c3e50;">Welcome to <span style="color: #d35400;">NSS GEC PATAN</span> 🎉</h1>
            </div>
            
            <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
            
            <p style="font-size: 16px; color: #333;">
              Thank you for registering with NSS GEC PATAN. We are thrilled to have you as part of our community! 
              As a proud volunteer/member, you are about to make an incredible difference. Let's strive to serve and grow together.
            </p>
            
            <p style="font-size: 16px; color: #333;">
              Stay tuned for upcoming events, activities, and opportunities where you can showcase your passion and dedication. 💪
            </p>
      
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://gecpatan.ac.in/" target="_blank" style="background-color: #d35400; color: white; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                Visit NSS Website
              </a>
            </div>
      
            <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;">
      
            <p style="font-size: 14px; color: #888; text-align: center;">
              If you did not sign up for this, please ignore this email or contact support.
            </p>
      
            <p style="font-size: 14px; color: #888; text-align: center;">
              — NSS Team, GEC PATAN
            </p>
          </div>
        </div>
        `
      );
      
}

export default emailToUser