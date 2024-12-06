const mongoose = require('mongoose');

const stringCon = 'mongodb+srv://lucasamuel:projeto@projetointegrador.jpfaj.mongodb.net/';

mongoose.connect(stringCon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
console.error('Error connecting to MongoDB:', err.message);
});
