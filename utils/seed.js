// const connection = require('../config/connection');


// const mongoose = require('mongoose');
// const { User, Thought, Reaction } = require('../models');
// const { userData, thoughtData, reactionData } = require('./data');
// const reactionSchema = require('../models/Reaction');

// const reaction = mongoose.model('Reaction', reactionSchema);

// const seedDatabase = async () => {
//   try {
//     // Clear the database before seeding
//     await User.deleteMany({});
//     await Thought.deleteMany({});
//     await reaction.deleteMany({});

//     // Create users, thoughts and reactions
//     const createdUsers = await User.insertMany(userData);
//     const createdThoughts = await Thought.insertMany(thoughtData);
//     const createdReactions = await reaction.insertMany(reactionData);

//     // Assign thoughts to users
//     for (let i = 0; i < createdThoughts.length; i++) {
//       const thought = createdThoughts[i];
//       const user = createdUsers.find(user => user.username === thought.username);
//       user.thoughts.push(thought);
//       await user.save();
//     }

//     // Assign reactions to thoughts
//     for (let i = 0; i < createdReactions.length; i++) {
//       const reaction = createdReactions[i];
//       const thought = createdThoughts[Math.floor(Math.random() * createdThoughts.length)];
//       thought.reactions.push(reaction);
//       await thought.save();
//     }

//     console.log('Seed data inserted successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// seedDatabase();
// const connection = require('../config/connection');
// const mongoose = require('mongoose');
// const { User, Thought } = require('../models');
// const { userData, thoughtData, reactionData } = require('./data');

// const seedDatabase = async () => {
//   try {
//     // Clear the database before seeding
//     await User.deleteMany({});
//     await Thought.deleteMany({});

//     // Create users and thoughts
//     const createdUsers = await User.insertMany(userData);
//     const createdThoughts = await Thought.insertMany(thoughtData);

//     // Assign thoughts to users
//     for (let i = 0; i < createdThoughts.length; i++) {
//       const thought = createdThoughts[i];
//       const user = createdUsers.find(user => user.username === thought.username);
//       user.thoughts.push(thought);
//       await user.save();
//     }

//     // Assign reactions to thoughts
//     for (let i = 0; i < reactionData.length; i++) {
//       const reaction = reactionData[i];
//       const thought = createdThoughts[Math.floor(Math.random() * createdThoughts.length)];
//       thought.reactions.push(reaction);
//       await thought.save();
//     }

//     console.log('Seed data inserted successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// seedDatabase();
const connection = require('../config/connection');
const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { userData, thoughtData, reactionData } = require('./data');

const seedDatabase = async () => {
  try {
    // Clear the database before seeding
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users and thoughts
    const createdUsers = await User.insertMany(userData);
    const createdThoughts = await Thought.insertMany(thoughtData);

    // Assign thoughts to users
    for (let i = 0; i < createdThoughts.length; i++) {
      const thought = createdThoughts[i];
      const user = createdUsers.find(user => user.username === thought.username);
      user.thoughts.push(thought);
      await user.save();
    }

    // Assign reactions to thoughts
    for (let i = 0; i < reactionData.length; i++) {
      const reaction = reactionData[i];
      const thought = createdThoughts[Math.floor(Math.random() * createdThoughts.length)];
      thought.reactions.push(reaction);
      await thought.save();
    }

    // Add friends to users
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
      const friends = createdUsers.filter(u => u.username !== user.username);
      user.friends = friends;
      await user.save();
    }

    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();

