import mongoose from "mongoose";
import { AppConstants } from "../../../shared/utils/app-constants.js";
import { SchemaTypes } from "mongoose";
import validator  from 'validator';
import bcrypt from "bcryptjs";

const schemaName = AppConstants.SCHEMA.USER_SCHEMA;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {type:SchemaTypes.String, required:true, maxlength: 25, minlength: 3}, 
    email : {type:SchemaTypes.String, required:true, unique:true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          }
    },
    number : {type:SchemaTypes.Number, required:true, unique:true, max:9999999999, min:1000000000
        // validate: {
        //     validator: function (number) {
        //         return number.length === 10;
        //     },
        //     message: 'Number must be exactly 10 digits long'
        //     }
         },
    password : {type:SchemaTypes.String, required:true, maxlength : 25, minlength: 8}
});

// My methord to use bcrypt
// const securepassword = async(password) => {
//     const passwordHash = await bcrypt.hash(password, 10);
//     this.password = passwordHash;
// }

// Here we use pre middleware which work before sending data to the database 
UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }

        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

const UserModel = mongoose.model(schemaName, UserSchema);
export default UserModel;



// UserSchema.pre('save', async function (next) { ... }): This line sets up a pre-save middleware for the UserSchema. This middleware will be executed just before the user document is saved into the database.

// try {: The try block is used to handle potential errors that may occur during the execution of the middleware.

//     if (!this.isModified('password')) {: The isModified() function is a Mongoose method that checks if the specified field ('password' in this case) has been modified in the current document. If the password has not been modified (e.g., during an update where the password field is not changed), the middleware will exit early using return next();.
    
//     const salt = await bcrypt.genSalt(10);: Here, we generate a salt using bcrypt.genSalt(). A salt is a random value that is used as an additional input to the password hashing process to make the resulting hash more secure.
    
//     const hashedPassword = await bcrypt.hash(this.password, salt);: We use the generated salt to hash the password value stored in this.password using bcrypt.hash(). The await keyword is used because bcrypt.hash() is an asynchronous function that returns a promise.
    
//     this.password = hashedPassword;: After hashing the password, we update the value of this.password with the hashed password.
    
//     next();: This line indicates that the middleware has completed its operation successfully, and the execution should proceed to the next middleware or the save operation itself.
    
//     } catch (err) {: If any error occurs during the execution of the try block (e.g., if hashing the password fails), the control flow will jump to the catch block to handle the error.
    
//     return next(err);: If there is an error, the next() function is called with the err parameter. This tells Mongoose that there was an error, and it will skip the save operation and execute any error handling middleware or functions.