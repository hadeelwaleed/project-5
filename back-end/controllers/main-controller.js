const articles = [
  {
    id: 1,
    title: "eat fried chicken",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "jouza",
  },
  {
    id: 4,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "abd",
  },
  {
    id: 8,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "amr",
  },
];
let last_ID = 7;


const getAllArticles = (req, res) => {
  console.log("getAllArticles");
  res.json(articles);
};
const createNewArticle = (req, res) => {
  console.log("createNewArticle");
  console.log("REQ.BODY", req.body);
  req.body.id = ++last_ID;
  articles_data.push(req.body);
  res.json(articles_data);
};

const changeArticleTitleById = (req, res) => {
  console.log("changeArticleTitleById");
  console.log("REQ.PARAMS", req.params);
  console.log("ID:", req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].title = req.params.newTitle;
    }
  }
  res.json(articles);
};

const changeArticleAuthor = (req, res) => {
  console.log(changeArticleAuthor);
  console.log("REQ.PARAMS", req.params);
  console.log("ID:", req.params.id);
  console.log("REQ.BODY", req.body);
  req.body.id = newAuthor;
  res.json(articles.id);
};
const deleteArticleById = (req, res) => {
  console.log(deleteArticleById);
  console.log("ID:", req.params.id);

  res.json();
};
const deleteArticleByAuthor = (req, res) => {
  console.log(deleteArticleByAuthor);
  console.log("REQ.BODY", req.body);
  res.json();
};
module.exports = {
  getAllArticles,
  createNewArticle,
  changeArticleAuthor,
  changeArticleTitleById,
  deleteArticleById,
  deleteArticleByAuthor,
};
