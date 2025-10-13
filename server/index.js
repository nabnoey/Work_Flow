import express from "express";
// const dotenv = require("dotenv")
import dotenv from "dotenv";
import cors from "cors";
import restaurantRouter from "./routers/restaurant-router.js";
import authRouter from "./routers/auth.router.js";
const FRONTEND_URL = process.env.FRONTEND_URL;

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import db from "./models/index.js";
const Role = db.Role;
// ✅ เชื่อมต่อ database
db.sequelize.sync({ force: false }).then(async () => {
  console.log("Database synced successfully");
  try {
    const count = await db.Role.count();
    if (count === 0) {
      await db.Role.bulkCreate([
        { id: 1, roleName: "user" },
        { id: 2, roleName: "admin" },
      ]);
      console.log("Seeded default roles");
    }
  } catch (e) {
    console.error("Error seeding roles:", e?.message || e);
  }
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("create table user_roles");
});

app.get("/", (req, res) => {
  res.send("Hello Nodemon 555");
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  })
);


// use restaurant router
app.use("/api/v1/restaurants", restaurantRouter);

// use authentication router
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
