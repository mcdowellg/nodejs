const Article = require("../models/Article");

// exports.CombineTwoDataSets = (req, res) => {
//   Article.aggregate([
//   {
//     '$lookup': {
//       'from': 'posts', 
//       'localField': 'title', 
//       'foreignField': 'title', 
//       'as': 'newDataSet'
//     }
//   }, {
//     '$match': {
//       'title': 'veniam natus officiis'
//     }
//   }, {
//     '$project': {
//       'title': 1, 
//       'body': 1, 
//       'newDataSet.content': 1
//     }
//   }, {
//     '$unwind': {
//       'path': '$newDataSet'
//     }
//   }, {
//     '$project': {
//       'total': {
//         '$sum': [
//           '$body', '$newDataSet.content'
//         ]
//       }
//     }
//   }
// ], 
  
//   (err, article) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(article);
//   }
  
//   );
// };

exports.listAllEvents = (req, res) => {
  // Article.$where('this.firstname === this.lastname')
  Article.find({}, (err, article) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(article);
  });
};

// exports.listTagArticles = (req, res) => {
//   // Article.$where('this.firstname === this.lastname')
//   Article.find({tag:req.params.tag}, (err, article) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(article);
//   });
// };

// exports.createNewArticle = (req, res) => {
//   let newArticle = new Article(req.body);
//   newArticle.save((err, article) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(201).json(article);
//   });
// };

// exports.readArticle = (req, res) => {
//   Article.findById(req.params.articleid, (err, article) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(article);
//   });
// };

// exports.updateArticle = (req, res) => {
//   Article.findOneAndUpdate(
//     { _id: req.params.articleid },
//     req.body,
//     { new: true },
//     (err, article) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(article);
//     }
//   );
// };

// exports.deleteArticle = (req, res) => {
//   Article.remove({ _id: req.params.articleid }, (err, article) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json({ message: "Article successfully deleted" });
//   });
// };