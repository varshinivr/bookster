const express=require('express')
const db=require('./db')
const bodyParser=require('body-parser')
const authroute=require('./routes/auth.js')
const passport=require('passport')
const session=require('express-session')
const app=express();
app.listen(3000,()=>{
    console.log("port connected")
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'))
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/views/login.html')
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/public/views/signup.html')
})
app.use(session({
    secret:'1234567891011rV',
    resave:false,
    saveUninitialized:false
}))
app.use('/',authroute)
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/views/events.html')
})
app.use(passport.initialize())
app.use(passport.session())
