import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    role: { type: String, enum: ['user', 'volunteer', 'program_officer', 'admin'], default: 'user' },
    password: { type: String },
    joinedYear: { type: String },
    volunteerProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }
  });
  
  export default mongoose.model('User', userSchema);