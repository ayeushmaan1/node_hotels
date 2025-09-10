const mongoose =require('mongoose');

//const mongoURL='mongodb://localhost:27017/hotels';
const mongoURL='mongodb+srv://ayushmaandwivediiaf_db_user:nk1cAkyNuSLqPsM8@cluster0.pirsypm.mongodb.net/';
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('MongoDB connected successfully');
});
db.on('error',()=>{
    console.log('MongoDB connection failed');
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

module.export=db;
