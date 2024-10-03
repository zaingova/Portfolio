const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
     
    // configures database uri
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://zaingova:zvqMaMlgYYdl75pC@cluster0.yd67o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernproject'
}

export default config