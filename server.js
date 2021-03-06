//Require all of the dependancies for the express backend
const express = require(`express`);
const logger = require(`morgan`);
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const session = require(`express-session`);

//Require the port that will be used in development
const PORT = process.env.PORT || 3001;

//Initiate Express
const app = express();

const menuRouter = require(`./routes/mainRouters/menuRouter`);
const userRouter = require(`./routes/usersRouters/userRouter`);

app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`public`));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

app.use('/api/menu', menuRouter);
app.use('/auth', userRouter);

//******** testing that routes and controllers work ************
app.use(`/testmenu`, menuRouter);
app.use(`/testusers`, userRouter);

//******** testing that routes and controllers work ************

app.listen(PORT, () => {
  console.log(`Up and listening in express app on PORT 🥑  ${PORT}`);
});


//checking something
