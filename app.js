var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const URL = `/api/v1`;
const achievementsApiRouter = require("./routes/achievements");
const categoriesApiRouter = require("./routes/categories");
const membersApiRouter = require("./routes/members");
const periodeApiRouter = require("./routes/periode");
const postsApiRouter = require("./routes/posts");
const quotesApiRouter = require("./routes/quotes");
const settingsApiRouter = require("./routes/settings");
const structuralsApiRouter = require("./routes/structurals");
const tagsApiRouter = require("./routes/tags");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${URL}/members`, membersApiRouter);
app.use(`${URL}/structurals`, structuralsApiRouter);
app.use(`${URL}/quotes`, quotesApiRouter);
app.use(`${URL}/posts`, postsApiRouter);
app.use(`${URL}/periode`, periodeApiRouter);
app.use(`${URL}/tags`, tagsApiRouter);
app.use(`${URL}/categories`, categoriesApiRouter);
app.use(`${URL}/achievements`, achievementsApiRouter);
app.use(`${URL}/settings`, settingsApiRouter);

module.exports = app;
