import mongoose, { Document, Schema } from 'mongoose';
const bcrypt = require('bcrypt-nodejs');

// Insert interface here
export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    about: string;
}

// Schema definition for User
export const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "You must enter a username to register"],
        unique: true,
        maxlength: [20, "Your username must be 20 characters or less"],
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: [true, "You must enter a password to register"],
        minlength: [8, "You must enter a password of at least 8 characters"],
        trim: true
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid e-mail address."],
        trim: true
    },

    firstName: {
        type: String,
        required: [true, "You must enter full name to register"],
        trim: true
    },

    lastName: {
        type: String,
        required: [true, "You must enter your full name to register."],
        trim: true
    },

    about: {
        type: String,
        maxlength: [255, "About Me section must be 255 characters or less"]
    },

    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
},
{
    timestamps: true,
});

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre<IUser>('save', function (next: any) {
    const user = this,
    SALT_FACTOR = 8;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, function (err:any, salt: any) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function (err: any, hash: any) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.method('comparePassword', function (password: String): boolean {
    if (bcrypt.compareSync(password, this.password)) return true;
    return false;
});

UserSchema.methods.toJson = function () {
    return {
        username: this.username,
        password: this.password,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        about: this.about
    }
}

export default mongoose.model<IUser>("User", UserSchema, "users");