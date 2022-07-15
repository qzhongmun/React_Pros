let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let user = require("../models/user-schema");
router.route("/create").post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
router.route("/").get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
router.route("/edit/:id").get((req, res) => {
  user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:email").put((req, res, next) => {
  user.findOneAndUpdate(
    req.params.email,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

router.route("/delete/:email").delete((req, res, next) => {
  user.findOneAndDelete({ email: req.params.email }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
  // user.findByIdAndRemove(req.params.id, (error, data) => {
  //   if (error) {
  //     return next(error);
  //   } else {
  //     res.status(200).json({
  //       msg: data,
  //     });
  //   }
  // });
});
module.exports = router;
