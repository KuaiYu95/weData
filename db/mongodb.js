const mongoose = require('mongoose')
mongoose.connect('mongodb://114.55.93.223:27017/myblog', {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err)
  })
mongoose.connection.on('connected', () => {
  console.log('mongodb数据库连接成功')
})
mongoose.connection.on("error", (error) => {
  console.log("mongodb数据库连接失败", error)
});

const timeLineSchema = mongoose.Schema({
  color: {type: String, required: true},
  time: {type: String, required: true},
  content: {type: String, require: true},
})
const TimeLineModel = mongoose.model('timeline', timeLineSchema)
exports.TimeLineModel = TimeLineModel

const todosSchema = mongoose.Schema({
  time: {type: String, required: true},
  content: {type: String, required: true},
  isChecked: {type: Boolean, required: true}
})
const TodosModel = mongoose.model('todo', todosSchema)
exports.TodosModel = TodosModel

const totalSchema = mongoose.Schema({
  postCount: {type: Number, required: true},
  articalCount: {type: Number, required: true},
  todoCount: {type: Number, required: true},
  dailyCount: {type: Number, required: true},
  footCount: {type: Number, required: true},
  photoCount: {type: Number, required: true},
  featCount: {type: Number, required: true},
  money: {type: Number, required: true}
})
const TotalModel = mongoose.model('total', totalSchema)
exports.TotalModel = TotalModel