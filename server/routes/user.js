import express from "express";
import { register, login, getMyProfile, logout, searchUser, sendFriendRequest, acceptFriendRequest, getMyNotifications, getMyFriends } from "../controllers/userControllers.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";


const app= express.Router()

app.post('/register', singleAvatar, register)
app.post('/login', login)

//user must be logged in to access the below routes
app.use(isAuthenticated)
app.get('/me', getMyProfile)
app.get('/logout', logout)
app.get('/search', searchUser)
app.put("/sendrequest",sendFriendRequest)
app.put("/acceptrequest",acceptFriendRequest)
app.get("/notifications",getMyNotifications)
app.get("/friends", getMyFriends)
export default app;