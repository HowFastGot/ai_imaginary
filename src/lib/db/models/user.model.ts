import { Schema, model, models, Document } from 'mongoose';

export interface User extends Document {
	clerkId: string;
	email: string;
	userName: string;
	photo: {
		src: string;
		alt: string;
	};
	fName: string;
	lName: string;
	planId: number;
	creditBalance: number;
}

const UserSchema = new Schema<User>({
	clerkId: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	userName: { type: String, required: true, unique: true },
	fName: { type: String },
	lName: { type: String },
	photo: { type: Object, required: true },
	planId: { type: Number, default: 1 },
	creditBalance: { type: Number, default: 10 },
});

const User = models?.User ?? model('User', UserSchema);

export default User;
