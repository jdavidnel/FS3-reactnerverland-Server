import { Document, model, Model, Schema } from 'mongoose';
import { clashSchema } from './schema';
import { IRound } from '../../types/Model/RoundModel';

export interface IClash extends Document {
	_id: Schema.Types.ObjectId;
	f_competitors: String;
	nd_competitors: String;
	suscribers: [string];
	round: [string];
	inprogress: Boolean;
	winner: string;
}

var clashModel: Model<IClash> = model<IClash>('Clash', clashSchema);
export { clashModel };