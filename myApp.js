require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected to database successfully..")
  } catch (error) {
    console.log(error.message)
  }
}
connectDB();

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
})

let Person = mongoose.model("Person", personSchema);

/**CREATE AND SAVE PEESON */
const createAndSavePerson = async (done) => {
  done(null /*, data*/);
  // const newPerson = new Person({ name: "John", age: 12, favoriteFoods: ["Onion", "Garlic"] });
  // newPerson.save((err, data) => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   done(null, data);
  // });
};

/**CREATE MANY PEOPLE */
// var arrayOfPeople = [
//   { name: "Jane", age: 22, favoriteFoods: ["Yam", "Tomato"] },
//   { name: "Mike", age: 54, favoriteFoods: ["Sogium", "Sweetnwe"] },
//   { name: "James", age: 47, favoriteFoods: ["Biscuits", "Tea"] },
// ]

const createManyPeople = (arrayOfPeople, done) => {
  arrayOfPeople = [
    { name: "Jane", age: 22, favoriteFoods: ["Yam", "Tomato"] },
    { name: "Mike", age: 54, favoriteFoods: ["Sogium", "Sweetnwe"] },
    { name: "James", age: 47, favoriteFoods: ["Biscuits", "Tea"] },
  ]
  //done(null /*, data*/);
  Person.create(arrayOfPeople, function (err, data) {
    if (err) {
      console.error(err);
    }
    done(null, data);
  });
};


const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;


