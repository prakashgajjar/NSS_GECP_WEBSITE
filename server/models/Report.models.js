import mongoose from 'mongoose';

const reportSchema = mongoose.Schema({
    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event',
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    reportFile: { 
        type: String, // Store the file path or URL
        required: true 
    },
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // Reference to the User model (who uploaded the report)
        required: true 
    },
    uploadDate: { 
        type: Date, 
        default: Date.now 
    }
});

export default mongoose.model('Report', reportSchema);
