// // installing the express: npm install express
// // creating http server

// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hi your answer is " + ans);
// });

// app.listen(3000);

const express = require("express");
const app = express();

var users = [
  {
    name: "jonny",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

//----use of filter in js--------
app.get("/", function (req, res) {
  const jonnyKidneys = users[0].kidneys;
  const numberOfKidneys = jonnyKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < jonnyKidneys.length; i++) {
    if (jonnyKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + i;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// you should return a 411
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// only if atleast one unhealthy kidney is there do this, else return 411

app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);
