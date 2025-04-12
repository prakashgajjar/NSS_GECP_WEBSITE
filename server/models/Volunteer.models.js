import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String, required: true },
  rollNumber: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },

  department: { type: String },
  yearOfStudy: { type: String }, // 1st year, 2nd year, etc.
  joinYear: { type: String },
  nssUnit: { type: String }, // NSS Unit No

  achievements: [{ type: String }],        // list of achievements
  awards: [{ 
    title: { type: String },
    date: { type: Date },
    description: { type: String }
  }],

  attendedCamps: [{
    name: { type: String },                // e.g. "7-Day Special Camp"
    location: { type: String },
    dateFrom: { type: Date },
    dateTo: { type: Date },
    description: { type: String }
  }],

  attendance: [{
    date: { type: Date },
    event: { type: String },              
    present: { type: Boolean, default: false }
  }],

  coordinatedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  totalHours: { type: Number, default: 0 },  // NSS hours

  photoUrl: { type: String },
  certificateUrls: [{ type: String }],

  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const  Volunteer = mongoose.model('Volunteer', VolunteerSchema);
