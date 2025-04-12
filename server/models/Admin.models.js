import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    permissions: {
        type: [String], // List of permissions
        default: ['create_event', 'manage_volunteers']
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Admin', adminSchema);
