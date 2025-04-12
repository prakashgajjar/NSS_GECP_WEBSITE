import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String },

  coordinators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }], // Reference to volunteers

  guests: [
    {
      name: { type: String },
      role: { type: String }, // e.g., Speaker, Chief Guest
      organization: { type: String },
      contact: { type: String }
    }
  ], 

  facultyNames: [{ type: String }], 

  numberOfStudents: { type: Number, default: 0 }, 
  numberOfFaculties: { type: Number, default: 0 },
  numberofVolunteers : {type : Number , default : 0},
  poster : {type:String},
  images: [{ type: String }],
  reportUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Event', eventSchema);
