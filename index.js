const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("<h1>i am exited to learn node and express</h1>");
});
app.get("/students", (req, res) => {
  const find = req.query.search;
  if (find) {
    const searchResult = students.find((student) =>
      student.name.toLowerCase().includes(find)
    );
    res.send(searchResult);
  } else {
    res.send(students);
  }
});




//POST
app.post("/students", (req, res) => {
  console.log("received post", req.body);
  const newUser =req.body;
  newUser.id= students.length
  const updateStudents = students.push(newUser)

  res.json(updateStudents)
  
});
app.get("/students", (req, res) => {
  res.send(students);
});


app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  // console.log(req.params.id)
  res.send(students[id]);
});


app.listen(port, () => {
  console.log("listening to port", port);
});

const students = [
  {
    name: "akkach",
    email: "akash@gmail.com",
    // deg: "cse",
    id: 0,
  },
  {
    name: "jisan",
    email: 16,
    // deg: "cse",
    id: 1,
  },
  {
    name: "lamiya",
    email: "lamiya@gmail.com",
    // deg: "bba",
    id: 2,
  },
  {
    name: "sohag",
    email: "sohag@gmail.com",
    // deg: "ete",
    id: 3,
  },
  {
    name: "lovelu",
    email: "reza@hotmail.com",
    // deg: "eee",
    id: 4,
  },
  {
    name: "sakif",
    email: "sattar@yahoo.com",
    // deg: "mba",
    id: 5,
  },
];
