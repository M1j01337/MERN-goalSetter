const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            writeConcern: {
                w: 'majority',
                j: true,
                wtimeout: 1000,
              },
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB