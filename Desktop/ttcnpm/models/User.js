const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // type là kiểu dữ kiệu, require nếu là true là bắt buộc phải nhập, còn unique là true là bắt buộc phải khác nhau
    username : {type: String, require: true, unique: true},
    password : {type: String, required: true},
    gender : {type: String, default: "male"},
    email : String
});

// Tạo connection: là table như bên mysql
// Tạo connection có tên user và dùng schema là UserSchema
// const User = mongoose.model("user",UserSchema);

module.exports = UserSchema;
