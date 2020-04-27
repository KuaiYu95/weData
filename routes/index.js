var express = require('express');
var router = express.Router();
const { TotalModel, TodosModel, TimeLineModel, FootPrintModel, DiaryModel, UrlModel, BlogModel, CommentsModel } = require('../db/mongodb')
const id = '5e5b207af5bbf627da7ae4a2'
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 首页获取数据
router.get('/api/get-total', (req, res) => {
  TotalModel.find((err, total) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: total })
  })
})
// 获取时间线
router.get('/api/get-timeline', (req, res) => {
  TimeLineModel.find((err, timeline) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: timeline })
  })
})
// 添加时间线
router.post('/api/add-timeline', (req, res) => {
  const { time, color, content } = req.body
  new TimeLineModel({ time, color, content }).save((err, timeline) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'featCount': 1 } }, (err, total) => {
      console.log({ err, total })
    })
    err ? res.send({ success: false }) : res.send({ success: true, data: timeline })
  })
})
// 获取 todos
router.get('/api/get-todos', (req, res) => {
  TodosModel.find((err, todos) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: todos.reverse() })
  })
})
// 添加 todos
router.post('/api/add-todos', (req, res) => {
  const { content } = req.body
  const time = new Date().toLocaleDateString()
  new TodosModel({ content, isChecked: false, time }).save((err, todo) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'todoCount': 1 } }, (err, total) => {
      console.log({ err, total })
    })
    err ? res.send({ success: false }) : res.send({ success: true, data: todo })
  })
})
// 修改 todos
router.post('/api/modify-todos', (req, res) => {
  const { type, check } = req.body
  if (type) {
    TodosModel.find((err, todos) => {
      todos.map(it => {
        const { _id, isChecked } = it
        TodosModel.findByIdAndUpdate({ _id }, { $set: { 'isChecked': check } }, (err, todo) => {
          console.log({ err, todo })
        })
      })
      err ? res.send({ success: false }) : res.send({ success: true, data: todos })
    })
  } else {
    const { _id, isChecked } = req.body
    TodosModel.findByIdAndUpdate({ _id }, { $set: { 'isChecked': isChecked } }, (err, todo) => {
      err ? res.send({ success: false }) : res.send({ success: true, data: todo })
    })
  }
})
// 删除 todos
router.post('/api/del-todos', (req, res) => {
  const { type } = req.body
  if (type) {
    TodosModel.deleteMany({}, (err, todos) => {
      TotalModel.findByIdAndUpdate({ _id: id }, { $set: { 'todoCount': 0 } }, (err, total) => {
        console.log({ err, total })
      })
      err ? res.send({ success: false }) : res.send({ success: true, todos })
    })
  } else {
    const { _id } = req.body
    TodosModel.deleteOne({ _id }, (err, todos) => {
      TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'todoCount': -1 } }, (err, total) => {
        console.log({ err, total })
      })
      err ? res.send({ success: false }) : res.send({ success: true, todos })
    })
  }
})
// 获取足迹
router.get('/api/get-atlas', (req, res) => {
  FootPrintModel.find((err, footPrints) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: footPrints })
  })
})
// 新增足迹
router.post('/api/add-atlas', (req, res) => {
  let { position, location, title, content, time } = req.body
  new FootPrintModel({ position, location, title, content, time }).save((err, data) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'footCount': 1 } }, (err, total) => {
      console.log({ err, total })
    })
    err ? res.send({ success: false }) : res.send({ success: true, data: data })
  })
})
// 获取日记
router.get('/api/get-diary', (req, res) => {
  DiaryModel.find((err, diarys) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: diarys.reverse() })
  })
})
// 新增日记
router.post('/api/add-diary', (req, res) => {
  let { title, content, time } = req.body
  new DiaryModel({ title, content, time }).save((err, data) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'dailyCount': 1 } }, (err, total) => {
      console.log({ err, total })
    })
    err ? res.send({ success: false }) : res.send({ success: true, data: data })
  })
})
// 新增收藏
router.post('/api/add-url', (req, res) => {
  let { classis, title, url, time } = req.body
  new UrlModel({ classis, title, url, time }).save((err, data) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'urlCount': 1 } }, (err, total) => {
      console.log({ err, total })
    })
    err ? res.send({ success: false }) : res.send({ success: true, data: data })
  })
})
// 获取收藏
router.get('/api/get-url', (req, res) => {
  UrlModel.find((err, urls) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: urls })
  })
})
// 新增blog
router.post('/api/add-blog', (req, res) => {
  new BlogModel(req.body).save((err, data) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'blogCount': 1 } }, () => {})
    err ? res.send({ success: false, err }) : res.send({ success: true, data: data })
  })
})
// 编辑更新博客
router.post('/api/update-blog', (req, res) => {
  const { _id } = req.body
  BlogModel.findByIdAndUpdate({ _id }, req.body, (err, post) => {
    res.send(post)
  })
})
// 获取链接
/**
 * searchSort
 * 0 - 最近更新
 * 1 - 最多评论
 * 2 - 最多点赞
 * 3 - 最多查看
 * 4 - 最多下载
 */
router.get('/api/get-blog', (req, res) => {
  let { currentPage, pageSize, searchSort, searchValue, searchType, type } = req.query
  currentPage -= 1
  BlogModel.find((err, blogs) => {
    let totalItems = blogs.length
    let data = []
    let posts = blogs.reverse()
      .filter(it => it.title.includes(searchValue))
      .filter(it => searchType != '' ? it.typeIds.includes(searchType) : true)
    if (searchSort == '0') {
      data = posts.sort((a, b) => b.lastModifyTime - a.lastModifyTime)
    } else if (searchSort == '1') {
      data = posts.sort((a, b) => b.commentCount - a.commentCount)
    } else if (searchSort == '2') {
      data = posts.sort((a, b) => b.likeCount - a.likeCount)
    } else if (searchSort == '3') {
      data = posts.sort((a, b) => b.viewCount - a.viewCount)
    } else if (searchSort == '4') {
      data = posts.sort((a, b) => b.downloadCount - a.downloadCount)
    }
    if (type) {
      data = data.filter(it => {
        for (let i = 0; i < type.length; i++) {
          if (it.typeIds.includes(type[i])) {
            return true
          }
        }
        return false
      })
    }
    data = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    err ? res.send({ success: false }) : res.send({ success: true, data, totalItems })
  })
})
// 获取博客详情
router.get('/api/get-blog-detail', (req, res) => {
  const { _id } = req.query
  BlogModel.find({ _id }, (err, blog) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: blog[0] })
  })
})
// 删除博客
router.get('/api/del-blog', (req, res) => {
  const { _id } = req.query
  BlogModel.findOneAndDelete({ _id }, (err, blog) => {
    TotalModel.findByIdAndUpdate({ _id: id }, { $inc: { 'blogCount': -1 } }, () => {})
    res.send(blog)
  })
})
// 查看博客viewCount加1
router.get('/api/add-blog-viewCount', (req, res) => {
  const { _id } = req.query
  BlogModel.findByIdAndUpdate({ _id }, { $inc: { 'viewCount': 1 } }, (err, post) => {
    res.send({...post, viewCount: post.viewCount + 1})
  })
})
// 下载博客downloadCount加1
router.get('/api/download-blog', (req, res) => {
  const { _id } = req.query
  BlogModel.findByIdAndUpdate({ _id }, { $inc: { 'downloadCount': 1 } }, (err, blog) => {
    res.send({...blog, downloadCount: blog.downloadCount + 1})
  })
})
// 点赞博客likeCount加1
router.get('/api/add-blog-likeCount', (req, res) => {
  const { _id } = req.query
  BlogModel.findByIdAndUpdate({ _id }, { $inc: { 'likeCount': 1 } }, (err, post) => {
    res.send({...post, likeCount: post.likeCount + 1})
  })
})
// 取消点赞likeCount减1
router.get('/api/dec-blog-likeCount', (req, res) => {
  const { _id } = req.query
  BlogModel.findByIdAndUpdate({ _id }, { $inc: { 'likeCount': -1 } }, (err, blog) => {
    res.send({...blog, likeCount: blog.likeCount + 1})
  })
})
// 新增blog评论
router.post('/api/add-comment', (req, res) => {
  const { blogId } = req.body
  new CommentsModel(req.body).save((err, data) => {
    BlogModel.findByIdAndUpdate({ _id: blogId }, { $inc: { 'commentCount': 1 } }, () => {})
    err ? res.send({ success: false }) : res.send({ success: true, data: data })
  })
})
// 获取blog评论
router.get('/api/get-comment', (req, res) => {
  const { blogId } = req.query
  CommentsModel.find((err, comments) => {
    err ? res.send({ success: false }) : res.send({ success: true, data: comments.filter(it => it.blogId === blogId).reverse() })
  })
})

module.exports = router;
