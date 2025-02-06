# home-cooking-recipes-js-back-end-exam
# SoftUni JS Back-End Course Exam Preparation

## Cheat Sheet

1. Initialize project
 - [x] `npm init --yes`
 - [x] Change module system
 - [x] Nodemon setup `npm i -D nodemon`
 - [x] Add start script
 - [x] Setup debugging
2. Express
 - [x] Install `npm i express`
 - [x] Setup inital http server
 - [x] Add public resources (images, css...)
 - [x] Add static middleware
 - [x] Add body parser
 - [x] Add routes modular router
 - [x] Add home controller
3. Handlebars
 - [x] Install `npm i express-handlebars`
 - [x] Config handlebars as view engine
 - [x] Enable mongo documents to be passed to the view
 - [x] Change views directory
 - [x] Add resources to views folder
 - [x] Add home view
 - [x] Add layout
 - [x] Add partials dir
4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Setup db connection
 - [x] Add user model
5. Register
 - [x] Install bcrypt `npm i bcrypt`
 - [x] Fix navigation links
 - [x] Add register view
 - [x] Add authController
 - [x] Add register page
 - [x] Fix register form
 - [x] Add post register action
 - [x] Add authService with register
 - [x] Hash password
 - [x] Check confirmPassword
 - [x] Check if user exists
6. Login
 - [x] Add jsonwebtoken `npm i jsonwebtoken`
 - [x] Add login view
 - [x] Add get login action
 - [x] Fix login form
 - [x] Add post login action
 - [x] Add login to authService
 - [x] Validate user
 - [x] Validate password
 - [x] Generate token
 - [x] Return token as cookie
 - [x] Autologin on register
7. Logout
 - [ ] Add get logout action
8. Authentication
 - [ ] Add cookie parser `npm i cookie-parser`
 - [ ] Add cookie parser middleware
 - [ ] Add auth middleware 
 - [ ] Check if guest
 - [ ] Token verification
 - [ ] Attach user to request
 - [ ] Attach user to handlebars context
9.  Authorization
 - [ ] Add isAuth middleware
 - [ ] Add route guards authorization
10. Error Handling
 - [ ] Add notifications
 - [ ] Extract error message
 - [ ] Add error handling for register
 - [ ] Add error handling for login
11. Bonus
 - [ ] Dynamic Navigation
 - [ ] Dynamic Titles
 - [ ] Set titles from view
 - [ ] Async jsonwebtoken
 - [ ] Add types for jsonwebtoken lib
12. TempData | Optional
 - [ ] Install express session `npm i express-session`
 - [ ] Config express session
 - [ ] Add temp data middleware