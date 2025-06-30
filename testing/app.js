// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const mongoose=require('mongoose');
// const cors = require('cors');
// const BodyParser=require('body-parser');
// const BusRoute= require('./Routes/BusRoute')


// const FirstRoutes=require("./Routes/FirstRoutes")
// var app = express();

// const StudentRoutes=require("./Routes/StudentRoutes");


// app.use(cors());
// app.use(BodyParser.json());

// // app.use('/',StudentRoutes);
// app.use('/bus',BusRoute);

// mongoose.connect("mongodb+srv://vyshnavi:vyshu2004@cluster0.vvz3j.mongodb.net/BusInOut?retryWrites=true&w=majority")
// .then(result=>{
//   console.log("Connected Successfully")
//   console.log(`MongdodB Connected to Database: ${mongoose.connection.name}`)
// })
// .catch(err=>{
//   console.log(err)
// })


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // app.use(bodyParser.json())


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use("/",FirstRoutes);





// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};


  
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.delete('/bus/:number', async (req, res) => {
//   const busNumber = req.params.number;
//   try {
//       const deletedBus = await Bus.findOneAndDelete({ Code: busNumber });
      
//       if (!deletedBus) {
//           return res.status(404).json({ message: 'Bus not found' });
//       }

//       res.status(200).json({ message: 'Bus deleted successfully' });
//   } catch (error) {
//       console.error('Error deleting bus:', error);
//       res.status(500).json({ message: 'Error deleting bus' });
//   }
// });



// app.listen(9000,function()
// {
//   console.log("Server Started")
// })
// module.exports = app;








// const express = require('express');
// const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/Hell"; 

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Database Connected..."))
//   .catch(err => console.log(err));

// const bookSchema = mongoose.Schema({
//   name: String,
//   author: String,
//   pages: Number
// });

// const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//   name: "Mongoose Demo 1",
//   author: "Author1, Author2",
//   pages: 123
// });

// book1.save(function (err) {
//   if (err) throw err;
//   console.log("Book Saved Successfully");
// });







// const express = require('express');
// const mongoose = require('mongoose');

// // MongoDB connection URL
// const url = "mongodb://0.0.0.0:27017/Hell";

// // Connecting to the MongoDB database
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Database Connected..."))
//   .catch(err => console.log(err));

// // Defining the Book schema
// const bookSchema = mongoose.Schema({
//   name: String,
//   author: String,
//   pages: Number
// });

// // Creating the Book model based on the schema
// const Book = mongoose.model("Book", bookSchema);

// // Function to query and find all books
// const queryBooks = function () {
//   Book.find(function (err, result) {
//     if (err) throw err;
//     console.log("Find Operations: " + result);
//   });
// };
// queryBooks();


















// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('Hello, Express.js!');
// });



// // Start Server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });







// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.write('Hello World!');
//   res.end();
// });

// server.listen(3000, () => {
//   console.log('Server is running');
// });










// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const URL = "mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/MyCluster";

// mongoose.connect(URL)
// .then(() => console.log("MongoDB Connected 🔥"))
// .catch(err => console.log("MongoDB Error: ", err));

// const studentSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// });

// const Student = mongoose.model("students", studentSchema);

// app.post('/add', async (req, res) => {
//     const { name, email, age } = req.body;
//     const student = new Student({ name, email, age });
//     await student.save();
//     res.send("Data Added Successfully ✅");
// });

// app.get('/get', async (req, res) => {
//     const students = await Student.find();
//     res.json(students);
// });

// app.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params;
//     await Student.findByIdAndDelete(id);
//     res.send("Data Deleted Successfully ❌");
// });

// app.listen(4000, () => {
//     console.log("Server Running at PORT 5000");
// });









// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Student = require('./Models/Student');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/MyCluster')
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch(err => console.log(err));



//     // Post Method--->Adding Data


// app.post('/addstudent', async (req, res) => {
//     const { name, email, phone } = req.body;
//     try {
//         const newStudent = new Student({ name, email, phone });
//         await newStudent.save();
//         res.status(201).json({ message: "Student Added Successfully 😎🔥" });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });




// // // GET - Fetch Students
// app.get('/getstudents', async (req, res) => {
//   try {
//       const data = await Student.find();
//       res.json(data);
//   } catch (err) {
//       res.status(500).json({ message: "Cannot Fetch Data" });
//   }
// });






// // PUT - Update Student
// app.put('/updatestudent/:id', async (req, res) => {
//   try {
//       const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       res.json(updatedStudent);
//   } catch (err) {
//       res.status(500).json({ message: "Cannot Update Data" });
//   }
// });





// // DELETE - Delete Student
// app.delete('/deletestudent/:id', async (req, res) => {
//   try {
//       await Student.findByIdAndDelete(req.params.id);
//       res.json({ message: "Student Deleted Successfully 🗑️" });
//   } catch (err) {
//       res.status(500).json({ message: "Cannot Delete Data" });
//   }
// });





// app.listen(3000, () => {
//     console.log("Server is running on port 3000 🚀");
// });













// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const studentRoute = require('./Routes/StudentRoute');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/MyCluster')
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch(err => console.log(err));

// app.use('/students', studentRoute);

// app.listen(3000, () => {
//     console.log("Server running on port 3000 🚀");
// });









// NodeMailer

// const express = require('express');
// const cors = require('cors');
// const mailRoute = require('./Routes/MailRoute');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api', mailRoute);

// app.listen(3000, () => {
//     console.log("Server is running on port 3000 🚀");
// });









// // Multer

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const uploadRoute = require('./Routes/UploadRoute');
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));  // To Access Uploaded Files
// app.use('/api', uploadRoute);

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/MyCluster')
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch(err => console.log(err));

// app.listen(3000, () => {
//     console.log("Server is running on port 3000 🚀");
// });




















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Student = require('./Models/model');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/vedaDB')
//   .then(() => console.log('MongoDB Connected Successfully '))
//   .catch(err => console.log(err));





// // 1) Add a new Record

// app.post('/add', async (req, res) => {
//   try {
//     const newStudent = new Student({
//       userRollNumber: req.body.userRollNumber,
//       userName: req.body.userName,
//       userGender: req.body.userGender,
//       userCollege: req.body.userCollege,
//       userDepartment: req.body.userDepartment,
//       userEventCategory: req.body.userEventCategory,
//       userAccomodation: req.body.userAccomodation,
//       userEvent: req.body.userEvent,
//       userTeamsize: req.body.userTeamsize
//     });

//     await newStudent.save();
//     res.status(200).send('New Record Added Successfully! ');
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Failed to Add Record ');
//   }
// });








// // 2) Update a Record
// app.put('/update', async (req, res) => {
//     try {
//       await Student.updateOne({ userRollNumber: "22A91A61D1" }, { userName: "RAM CHARAN" });
//       res.status(200).send('Record Updated Successfully!');
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Update Record');
//     }
//   });









//   // 3) Delete Specific Records
// app.delete('/delete', async (req, res) => {
//     try {
//       await Student.deleteMany({ userCollege: "ACOE", userGender: "MALE" });
//       res.status(200).send('Records Deleted Successfully!');
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Delete Records');
//     }
//   });
  







//   // 4) Get Gender Count of Registered Users
// app.get('/genderCount', async (req, res) => {
//     try {
//       const maleCount = await Student.countDocuments({ userGender: "Male" });
//       const femaleCount = await Student.countDocuments({ userGender: "Female" });
//       res.status(200).json({ male: maleCount, female: femaleCount });
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Fetch Gender Count');
//     }
//   });








// //  5) Get Campus & Department-Based Gender Count
// app.get('/campusGenderCount', async (req, res) => {
//     try {
//       const result = await Student.aggregate([
//         {
//           $group: {
//             _id: { college: "$userCollege", department: "$userDepartment", gender: "$userGender" },
//             count: { $sum: 1 }
//           }
//         }
//       ]);
//       res.status(200).json(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Fetch Campus & Department-Based Gender Count');
//     }
//   });
  










// // 6) Calculate Revenue by Department
// app.get('/revenueByDepartment', async (req, res) => {
//   try {
//     const result = await Student.aggregate([
//       {
//         $addFields: { userTeamsize: { $toInt: "$userTeamsize" } }
//       },
//       {
//         $group: {
//           _id: "$userDepartment",
//           totalRevenue: { $sum: "$userTeamsize" } 
//         }
//       }
//     ]);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Failed to Calculate Revenue by Department');
//   }
// });


  
  










// // 7) Calculate Revenue by Gender
// app.get('/revenueByGender', async (req, res) => {g
//     try {
//       const result = await Student.aggregate([
//         {
//           $group: {
//             _id: "$userGender",
//             totalRevenue: { $sum: "$userEventCategory" }
//           }
//         }
//       ]);
//       res.status(200).json(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Calculate Revenue by Gender');
//     }
//   });








  
//   // 8) Count of Hostellers & Non-Hostellers per department
//   app.get('/hostelCount', async (req, res) => {
//     try {
//       const result = await Student.aggregate([
//         {
//           $group: {
//             _id: { department: "$userDepartment", accommodation: "$userAccommodation" },
//             count: { $sum: 1 }
//           }
//         }
//       ]);
//       res.status(200).json(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Failed to Fetch Hostellers & Non-Hostellers Count');
//     }
//   });
  

// app.listen(3000, () => {
//   console.log('Server is Running on PORT 3000 ');
// });






























// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors({ origin: 'http://localhost:5000' }));
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB')
//   .then(() => console.log('MongoDB Connected Successfully'))
//   .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   profilePicture: String,
// });

// const User = mongoose.model('User', userSchema);

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 2 * 1024 * 1024 },
// });

// app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { name, email, mobile } = req.body;
//     const profilePicture = req.file ? req.file.filename : '';

//     const user = new User({ name, email, mobile, profilePicture });
//     await user.save();
//     res.status(201).send('User Registered');
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

// app.put('/api/update/:id', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { name, mobile } = req.body;
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).send('User Not Found');
//     }

//     if (req.file) {
//       if (user.profilePicture && fs.existsSync(`./uploads/${user.profilePicture}`)) {
//         fs.unlinkSync(`./uploads/${user.profilePicture}`);
//       }
//       user.profilePicture = req.file.filename;
//     }

//     user.name = name;
//     user.mobile = mobile;
//     await user.save();
//     res.status(200).send('User Updated');
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });












// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors({ origin: 'http://localhost:5000' }));
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB')
//   .then(() => console.log('MongoDB Connected Successfully'))
//   .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   profilePicture: String,
// });

// const User = mongoose.model('User', userSchema);

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024 } });

// app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { name, email, mobile } = req.body;
//     const profilePicture = req.file ? req.file.filename : '';

//     const user = new User({ name, email, mobile, profilePicture });
//     await user.save();
//     res.status(201).send('User Registered');
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });




















// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(cors({ origin: 'http://localhost:5000' }));
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   profilePicture: String,
// });

// const User = mongoose.model('User', userSchema);

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { name, email, mobile } = req.body;
//     const profilePicture = req.file ? req.file.filename : '';

//     const newUser = new User({ name, email, mobile, profilePicture });
//     await newUser.save();
//     res.status(201).json({ message: 'User Registered Successfully!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });























// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(cors({ origin: 'http://localhost:3000' })); // Adjust the origin to match your frontend URL
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   profilePicture: String,
// });

// const User = mongoose.model('User', userSchema);

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { name, email, mobile } = req.body;
//     const profilePicture = req.file ? req.file.filename : '';

//     const newUser = new User({ name, email, mobile, profilePicture });
//     await newUser.save();
//     res.status(201).json({ message: 'User Registered Successfully!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });












// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Task = require("./Routes/StudentRoute.js");
// const path = require("path");

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// // MongoDB Connection
// mongoose.connect("mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB")
// .then(() => console.log("MongoDB Connected Successfully"))
// .catch(err => console.log("MongoDB Connection Error:", err));

// app.use("/api", Task);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });























// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// // Models
// const FormData = require('./Models/FormData');

// // Routes
// const weatherRoutes = require('./Routes/weatherRoutes');
// const wishlistRoutes = require('./Routes/wishlistRoutes');
// const cartRoutes = require('./Routes/cartRoutes');
// const orderRoutes = require('./Routes/orderRoutes');

// const app = express();

// // 🌐 Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.json());

// // 🌿 Connect to MongoDB Atlas (Single DB for all features)
// mongoose.connect(
//   "mongodb+srv://vyshnavi:vyshu2004@mycluster.qlrf0.mongodb.net/farmxpertDB?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then(() => console.log("✅ MongoDB Atlas connected successfully"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 📦 Routes

// // Weather route
// app.use('/api/weather', weatherRoutes);

// // Form data save
// app.post("/submit", async (req, res) => {
//   try {
//     const newForm = new FormData(req.body);
//     await newForm.save();
//     res.status(200).json({ message: "Data saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// // Get all form entries
// app.get("/entries", async (req, res) => {
//   try {
//     const entries = await FormData.find().sort({ createdAt: -1 });
//     res.status(200).json(entries);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching entries" });
//   }
// });

// // Crop recommendation logic
// app.post("/api/recommend", async (req, res) => {
//   try {
//     const {
//       soilType,
//       pH,
//       nitrogen,
//       phosphorus,
//       potassium,
//       temperature,
//       humidity,
//       state,
//     } = req.body;

//     let recommendation = [];

//     if (pH >= 6 && nitrogen > 40) recommendation.push("Wheat");
//     if (temperature > 30 && humidity > 50) recommendation.push("Rice");
//     if (potassium > 40) recommendation.push("Millets");
//     if (recommendation.length === 0) recommendation.push("Maize");

//     const newForm = new FormData(req.body);
//     await newForm.save();

//     res.status(200).json({ recommendation });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to recommend crops" });
//   }
// });

// // Project-specific routes
// app.use("/wishlist", wishlistRoutes);
// app.use("/cart", cartRoutes);
// app.use("/orders", orderRoutes);

// // 🚀 Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });












// Load environment variables
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

// const app = express();

// // ✅ Default PORT fallback
// const PORT = process.env.PORT || 5000;

// // ✅ MongoDB Atlas Connection (Single DB for all features)
// mongoose.connect(
//   process.env.MONGO_URI || "mongodb+srv://vyshnavi:vyshu2004@mycluster.qlrf0.mongodb.net/farmxpertDB?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then(() => console.log("✅ MongoDB Atlas connected successfully"))
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//     process.exit(1); // Exit process if MongoDB connection fails
//   });

// // ✅ Middlewares
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cookieParser());

// // ✅ Import models and routes
// const FormData = require("./Models/FormData");
// const weatherRoutes = require("./Routes/weatherRoutes");
// const wishlistRoutes = require("./Routes/wishlistRoutes");
// const cartRoutes = require("./Routes/cartRoutes");
// const orderRoutes = require("./Routes/orderRoutes");
// const userRoutes = require("./Routes/userRoutes"); // From first code

// // ✅ Register routes
// app.use("/api/weather", weatherRoutes);
// app.use("/wishlist", wishlistRoutes);
// app.use("/cart", cartRoutes);
// app.use("/orders", orderRoutes);
// app.use("/api", userRoutes); // From first code

// // ✅ Save form data (contact, etc.)
// app.post("/submit", async (req, res) => {
//   try {
//     const newForm = new FormData(req.body);
//     await newForm.save();
//     res.status(200).json({ message: "Data saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// // ✅ Get all form submissions
// app.get("/entries", async (req, res) => {
//   try {
//     const entries = await FormData.find().sort({ createdAt: -1 });
//     res.status(200).json(entries);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching entries" });
//   }
// });

// // ✅ Crop recommendation logic
// app.post("/api/recommend", async (req, res) => {
//   try {
//     const {
//       soilType,
//       pH,
//       nitrogen,
//       phosphorus,
//       potassium,
//       temperature,
//       humidity,
//       state,
//     } = req.body;

//     let recommendation = [];

//     if (pH >= 6 && nitrogen > 40) recommendation.push("Wheat");
//     if (temperature > 30 && humidity > 50) recommendation.push("Rice");
//     if (potassium > 40) recommendation.push("Millets");
//     if (recommendation.length === 0) recommendation.push("Maize");

//     const newForm = new FormData(req.body);
//     await newForm.save();

//     res.status(200).json({ recommendation });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to recommend crops" });
//   }
// });

// // ✅ Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
















// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ Default PORT fallback
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Atlas Connection (using .env variable)
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Middlewares
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://farmxpert.vercel.app' // ✅ Vercel frontend allowed
  ],
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Import models and routes
const FormData = require("./Models/FormData");
const weatherRoutes = require("./Routes/weatherRoutes");
const wishlistRoutes = require("./Routes/wishlistRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const userRoutes = require("./Routes/userRoutes");

// ✅ Register routes
app.use("/api/weather", weatherRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/api", userRoutes);

// ✅ Save form data (contact, etc.)
app.post("/submit", async (req, res) => {
  try {
    const newForm = new FormData(req.body);
    await newForm.save();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

// ✅ Get all form submissions
app.get("/entries", async (req, res) => {
  try {
    const entries = await FormData.find().sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: "Error fetching entries" });
  }
});

// ✅ Crop recommendation logic
app.post("/api/recommend", async (req, res) => {
  try {
    const {
      soilType,
      pH,
      nitrogen,
      phosphorus,
      potassium,
      temperature,
      humidity,
      state,
    } = req.body;

    let recommendation = [];

    if (pH >= 6 && nitrogen > 40) recommendation.push("Wheat");
    if (temperature > 30 && humidity > 50) recommendation.push("Rice");
    if (potassium > 40) recommendation.push("Millets");
    if (recommendation.length === 0) recommendation.push("Maize");

    const newForm = new FormData(req.body);
    await newForm.save();

    res.status(200).json({ recommendation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to recommend crops" });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
