
import PendingUser from '../../models/PendingUser.models.js';
import RESPONSE_MESSAGE from '../../utils/ResponseMessage.js'
import STATUS_CODE from '../../utils/StatusCode.js'
import User from '../../models/User.models.js';
import jwt from 'jsonwebtoken';
import emailToUser from '../../utils/EmailFormate.js';

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    const pendingUser = await PendingUser.findOne({ email });

    if (!pendingUser) return res.status(STATUS_CODE.NOT_FOUND).json({ message: RESPONSE_MESSAGE.NOT_FOUND });

    if (pendingUser.otp !== otp) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: RESPONSE_MESSAGE.BAD_REQUEST });

    if (pendingUser.otpExpiresAt < new Date()) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({ message: RESPONSE_MESSAGE.BAD_REQUEST });
    }

    const { name, phone, role, password } = pendingUser;

    const newUser = await User.create({ name, email, phone, role, password });

    emailToUser(email,name);
    
    // Remove pending user
    await PendingUser.deleteOne({ email });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "prakashsuthar", {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'Strict',
        maxAge: 24 * 60 * 60 * 1000
    }).status(STATUS_CODE.CREATED).json({ message: RESPONSE_MESSAGE.CREATED });
};

export default verifyOTP;
