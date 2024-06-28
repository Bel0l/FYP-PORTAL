const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const supervisorRoutes = require('./routes/supervisor');
const projectRoutes = require('./routes/Projects');
const meetingRouter = require('./routes/meetings')
const meetingRoutes = require('./routes/meetings')
const taskRoutes = require('./routes/taskroutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/supervisor', supervisorRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/meetings', meetingRouter);
app.use('/api',meetingRoutes)
app.use("/api/tasks", taskRoutes)
module.exports = app;
