const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect('mongodb://localhost:27017/ECommerce',
        {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
});
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;




