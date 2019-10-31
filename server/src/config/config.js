module.export = {
    // Secret key for JWT signing and ecryption
    'secret': +process.env.SECRET || "f4532480-c00e-45b9-beef-6f3094fdcc06",
    // Database connection information
    'database': "databaseURL",
    // Setting port for server
    'port': +process.env.PORT || 3000
}