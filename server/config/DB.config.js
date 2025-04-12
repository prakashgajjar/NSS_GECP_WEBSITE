import mongoose from 'mongoose'

const connectionDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}`)
        if (connection) {
            console.log('DB connection successfuly');
        }
    
    } catch (error) {
        console.log(`DB connection error : `, error.message)
    }
}

export default connectionDB