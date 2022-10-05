const express = require("express");
var ObjectId = require("mongodb").ObjectId;
const router = express.Router();
require("../../db/conn");
const blog_model = require("../../models/text_model");
// const user_model = require("../../models/register_user");
const cors = require("cors");
router.use(express.json());
router.use(cors());
const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
// const blog = require("../../models/blog");
router.get("/", async (req, res) => {
  res.send("ll");
  // const all_blogs = await blog_model.find();
  // res.send(all_blogs);
});
router.post("/addText", async (req, res) => {
  try {
    const makeblog = new blog_model({
     
      description: req.body.description,
      unique_id: req.body.unique_id,
     
    });
    
    let registered = await makeblog.save();
    registered.toObject();
    

    res.status(201).send(makeblog);

  } catch (e) {
    console.log(e);
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    // const { title, description } = req.body;
    // console.log("L");
    // const update = await blog_model.findById(blogId);
    // const update = await blog_model.find({"unique_id":ObjectId(`${blogId}`)});
     const update = await blog_model.find({ "unique_id": blogId });

    // console.log("KKK");
    res.status(201).send(update[0]);
  } catch (e) {
    console.log(e);
  }
});
// router.get("/getToEditBlogById/:id", async (req, res) => {
//   try {
//     // console.log("K");
//     let blogId = req.params.id;
//     // const { title, description } = req.body;
//     // console.log("L");
//     const update = await blog_model.findById(blogId);
//     // const update = await blog_model.find({ user: ObjectId(`${blogId}`) });

//     // console.log("KKK");
//     res.status(201).send(update);
//   } catch (e) {
//     console.log(e);
//   }
// });
// router.delete("/deleteBlogById/:id", async (req, res) => {
//   try {
//     // console.log("K");
//     let blogId = req.params.id;
//     // console.log(blogId);
//     // const { title, description } = req.body;
//     // console.log("L");
//     try {
//       // const update = await blog_model
//       //   .findByIdAndRemove(blogId)
//       // .populate("register");

//       var update = await blog_model.findByIdAndRemove(blogId);
//       update = ObjectId(blogId);
//       // console.log(update);
//       // console.log(update.user);
//       // console.log(user_model);
//       const ans=await user_model.updateMany({}, 
//         {$pull: {blogs: update}}, 
//         // {multi: true}
//       );
//       // console.log(ans);
//       // await user_model.save();
//      res.status(201).send(update);
//     } catch (e) {
//       console.log(e);
//     }

//     // res.status(201).send(update);
//   } catch (e) {
//     console.log(e);
//   }
// });
module.exports = router;
