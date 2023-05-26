import { Schema, model, models } from "mongoose";

const PetSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
  },
  petFirstName: {
    type: String,
    default: "",
    required: [true, "Pet Type is required!"],
  },
  petLastName: {
    type: String,
    default: "",
  },
  petOwner: {
    type: String,
  },
  petType: {
    type: String,
    required: [true, "Pet Type is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Pet = models.Pet || model("Pet", PetSchema);

export default Pet;
