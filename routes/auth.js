const router=require('express').Router()
const passport=require('passport')
const User=require('../model/user')
passport.use(User.createStrategy())
passport.serializeUser(function(user,done){
    done(null,user.id)
})
passport.deserializeUser(function(id,done){
    User.findById(id).then(function(user){
        done(null,user)
    }).catch(function(err){
        done(err)
    })
})

router.post('/auth/signup',async(req,res)=>{
    try{
        console.log(req.body.password[0])
        console.log(req.body.username)
        const signupuser=await User.register({username:req.body.username},req.body.password)
        console.log(signupuser)
        if(signupuser)
        {
            passport.authenticate('local')(req,res,function(){
                res.redirect('/home');
                console.log("succesful yay");
            })
        }
    }catch(err)
    {
       res.send(err);
       console.log(err); 
    }
})
router.post('/auth/login',(req,res)=>{
    try{
     
            passport.authenticate('local')(req,res,function(){
                res.redirect('/home');
                console.log("succesful yay");
            })
        
    }catch(err)
    {
       res.send(err);
       console.log(err); 
    }
})

module.exports=router