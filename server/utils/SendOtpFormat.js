import sendEmail from '../utils/OTPEmail.js'

export const sendOTPEmail = async (email, otp) => {
  const subject = "🔐 Your OTP Code - NSS GEC PATAN";

  const text = `Your OTP is ${otp}. It is valid for 5 minutes.`;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50;">Welcome to NSS GEC PATAN 🎉</h2>
      <p>Hi there 👋,</p>
      <p>Your One-Time Password (OTP) for verification is:</p>
      <div style="font-size: 24px; font-weight: bold; background-color: #e3e3e3; padding: 10px; display: inline-block; margin: 10px 0;">
        ${otp}
      </div>
      <p>This OTP is valid for <strong>5 minutes</strong>.</p>
      <p>If you didn’t request this, you can safely ignore this email.</p>
      <hr />
      <p style="font-size: 14px; color: #7f8c8d;">— NSS GEC PATAN Team</p>
    </div>
  `;

  try {
    const success = await sendEmail(email, subject, text, html);
    if (success) {
      console.log("✅ OTP email sent successfully.");
    } else {
      console.log("❌ Failed to send OTP email.");
    }
    return success;
  } catch (error) {
    console.error("Error in sendOTPEmail:", error.message);
    return false;
  }
};
