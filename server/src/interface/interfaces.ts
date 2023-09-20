import { Document } from 'mongoose';

export interface UserInterface extends Document {
  _id: string;
  username: string;
  password: string;
  role: number;
  createdAt: string;
  updatedAt: string;
}
