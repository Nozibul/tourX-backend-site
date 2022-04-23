const User = require('../model/userSchema')

const user = (req, res) =>{
    res.send('user found')
};

// register route
 const register = async (req, res)=>{
   
    try{
        const { name, email, phone, password, cPassword } = req.body;

        if(!name || !email || !phone || !password || !cPassword){
            return res.status(422).json({error: 'Please Filled the All Property'})
        }
    
         const oldUser = await User.findOne({ email:email });
         if(oldUser){
             return res.status(422).json({error:'Email Already Exist'});
         }

        const user = new User({name, email, phone, password, cPassword});
        const registerUser = await user.save();
        if(registerUser){
            res.status(201).json({massage: ' user register successfully'})
        }else{
            res.status(500).json({error: " Failed to register"});
        }   
    }
    catch (error){
       console.log(error)
    }
}

// login route

const login = async(req, res)=>{
    try{
        const {email, password } = req.body;

        if(!email || !password ){
            return res.status(400).json({error: 'Please Filled Data...'})
        }

        const loginUser = await User.findOne({ email:email });
        if(loginUser){
            console.log(loginUser);
            return res.json({message:'Login Successfully'});
        }else{
            return res.status(400).json({error:'Please Valid Email'});
        };
 
   }
   catch (error){
      console.log(error)
   }

}

module.exports = {
    user, register, login
}