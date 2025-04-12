
import PendingUser from '../../models/PendingUser.models.js';
import RESPONSE_MESSAGE from '../../utils/ResponseMessage.js'
import User from '../../models/User.models.js'
import STATUS_CODE from '../../utils/StatusCode.js'
// import sendOTPEmail from '../../utils/OTPEmail.js';
import {sendOTPEmail} from '../../utils/SendOtpFormat.js'
import bcrypt from 'bcryptjs';

const SignUp = async (req, res) => {
    try {
        const { name, email, phone, role, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(STATUS_CODE.CONFLICT).json({ message:RESPONSE_MESSAGE.USER_EXISTS});

        const hashPassword = await bcrypt.hash(password, 10);

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); 

        

        await PendingUser.findOneAndUpdate(
            { email },
            { name, email, phone, role, password: hashPassword, otp, otpExpiresAt },
            { upsert: true }
        );

        sendOTPEmail(email,otp);

        res.status(200).json({ message: RESPONSE_MESSAGE.OTP_SENDED });

    } catch (error) {
        console.log("signup error:", error.message);
        res.status(500).json({ message: RESPONSE_MESSAGE.SERVER_ERROR });
    }
};

export default SignUp;
