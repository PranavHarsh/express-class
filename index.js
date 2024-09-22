// // // installing the express: npm install express
// // // creating http server

// // const express = require("express");

// // const app = express();

// // function sum(n) {
// //   let ans = 0;
// //   for (let i = 1; i <= n; i++) {
// //     ans = ans + i;
// //   }
// //   return ans;
// // }

// // app.get("/", function (req, res) {
// //   const n = req.query.n;
// //   const ans = sum(n);
// //   res.send("hi your answer is " + ans);
// // });

// // app.listen(3000);

// const express = require("express");
// const app = express();

// var users = [
//   {
//     name: "jonny",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];

// app.use(express.json());

// //----use of filter in js--------
// app.get("/", function (req, res) {
//   const jonnyKidneys = users[0].kidneys;
//   const numberOfKidneys = jonnyKidneys.length;
//   let numberOfHealthyKidneys = 0;
//   for (let i = 0; i < jonnyKidneys.length; i++) {
//     if (jonnyKidneys[i].healthy) {
//       numberOfHealthyKidneys = numberOfHealthyKidneys + i;
//     }
//   }
//   const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnHealthyKidneys,
//   });
// });

// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done!",
//   });
// });

// // you should return a 411
// app.put("/", function (req, res) {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }
//   res.json({});
// });

// // only if atleast one unhealthy kidney is there do this, else return 411

// app.delete("/", function (req, res) {
//   if (isThereAtleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({ msg: "done" });
//   } else {
//     res.status(411).json({
//       msg: "You have no bad kidneys",
//     });
//   }
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atleastOneUnhealthyKidney = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastOneUnhealthyKidney = true;
//     }
//   }
//   return atleastOneUnhealthyKidney;
// }

// app.listen(3000);

//-----------***************************-------------------------------------//

//------------------map, filter, arrow functions---------//
//given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5,]
//output should be : [2,4,6,8,10]

// const input = [1, 2, 3, 4, 5];

//solution
// const newArray = [];

//for (let i = 0; i < input.length; i++) {
// newArray.push(input[i] * 3);
//}
//console.log(newArray);

//-------------other-solution--------------//

// const ans = input.map(function (i) {
//   return i * 2;
// });
// console.log(ans);

//--------filtering---------/
//getting all the even value from the given input array

const arr = [1, 2, 3, 4, 5];

//output should be 2,4
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// const ans = arr.filter(function (n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans);

//--------------------map-function------------------//

// create a map fn that takes an array and a transform fn as input and returns the transformed aaray as output
const map = (arr, fn) => {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr.push(fn(arr[i]));
  }
  return transformedArr;
};


//--------------middlewares------------

// const express = require ("express");

// const app = express()

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password
//   const kidneyId = req.query.kidneysId;

//   if (username === "harsh" && password === "pass") {
//     res.status(400).json({"msg": "something up with your inputs"})
//     return
//   }

//     if (kidneyId === 1 || kidneyId == 2) {
//       //do somethoing with kidney here
//       res.json({
//         msg: "Your kidney is fine!"
//       })

//   }

// })
// app.listen(3000);

//--------------middlewares---------
// const express = require express();

// const app = express();

// app.post("/health-checkup", function (req, res) {
//   //kidneys =[1,2]
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;
//   res.send("you have " + kidneyLength + " kidneys");
// });

// -------------global catches-----------------------
// app.use(function(err, req, res, next) {
//   res.json({
//     msg: "sorry something wrong"
//   })
// })

//----------------zod-------------------
// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if (!response.success) {
//     res.status(411).json({
//       msg: "input is invalid",
//     });
//   } else {
//     res.send({
//       response,
//     });
//   }
// });

// app.listen(3000);

// const express = require("express");
// const zod = require("zod");
// const express2 = require("express");

// const app2 = express2();
// zod.string().email().endsWith("@google.com");

// const middlewares = [express.json(), userValidator, kidneyValidator];
// function middlewares(req, res, next) {
//   req.user = 1;
// }

// app2.get("/", ...middlewares, function (req, res) {
//   //console.log(req.user);
//   //console.log(next);
//   res.json({
//     msg: "done",
//   });
// });

// app.use(function (err, req, res, next) {
//   res.send({
//     msg: "internal error",
//   });
// });
// app.listen(3000);

//------adding authenitication if adhhar or you have subscription than only proced
const express = require("express");
const zod = require("zod");
const express2 = require("express");

const app = express2();
app.use(calculateRequestCount);

function calculateRequestCount(req, res, next) {
  requestCount++;
  next();
  const response = schema.safeParse(data);
  response.errors.forEach((error) => {});
}

