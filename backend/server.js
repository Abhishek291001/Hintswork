import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./src/db/db.js";
import userRoutes from "./src/routes/user.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import companyRoutes from "./src/routes/company.routes.js";
import adminHintsRoutes from "./src/routes/adminHints.routes.js";
import brandRoutes from "./src/routes/brand.routes.js";
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
<<<<<<< HEAD
app.use("/api/company", companyRoutes );
=======
app.use("/api/company/profile", companyRoutes );
>>>>>>> 586eb55e562fca122bde9a8c5a8a63662fe4fa96
app.use("/api/hints", adminHintsRoutes );
app.use("/api/brand", brandRoutes );
app.get("/", (req, res) => res.send("Server is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});












