const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,'Please enter UserName'],
    unique: true,
  },
  email: {
    type: String,
    required: [true,'Please enter your email'],
    unique: true,
    lowercase:true,
    validate:[validator.isEmail, 'Please provide  valid email']
  },
  newpassword: {
    type: String,
    required: [true,'Please enter password'],
    validate: {
        validator: function(v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/.test(v);
        },
        message: props => `${props.value} is not a valid password! Password must contain at least 8 characters including one letter and one number.`
      }
  },
  conformpassword: {
    type: String,
    required: [true,'Please enter password'],
    validate:{
        validator:function(el){
            return el==this.newpassword
        },
        message:'passwords are not same!'
    }
  },
  contact: {
    type: Number,
    required: [true,'Please enter your number'],
    validate: {
        validator: function(v) {
          return /^[0-9]{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid contact number.`
      }
  },
  isadmin:{
    type:Boolean,
    default:false,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;