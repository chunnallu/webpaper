/**
 * Created by Administrator on 2016/10/10.
 */
const readline = require('readline');
const fs = require('fs');
/**
 * 按行读取文件
 * @param addr 文件路径
 * @returns {Array} 文件内容数组
 */
exports.readFileByLine = function(addr){
    var text = fs.readFileSync(addr);
    var data = [];
    text.toString().split(/\r?\n/).forEach(function (line) {
        data.push(line);
    });
    return data;
//    return  [
//        "<?=>1.这是判断题",
//        "<*>2.这是单选题?",
//        "A.选项1",
//        "B.选项2",
//        "C.选项3",
//        "D.选项4",
//        "<**=D>3.这是多选题?",
//        "A.选项1",
//        "B.选项2",
//        "C.选项3",
//        "D.选项4",
//        "<_='答案在这里'>4.这是问答题",
//        "",
//        "",
//        "",
//        "<.='答案在这里'>5.这是填{$}空题"];
}

/**
 * 读取文件
 * @param addr 文件路径
 * @returns {*} 文件内容字符串
 */
exports.readFile = function(addr){
    var text = fs.readFileSync(addr);
    return text.toString();
}

/**
 * 写文件
 * @param addr 文件路径
 * @param data 待写入数据字符串
 */
exports.writeFile = function(addr,data){
    fs.writeFileSync(addr, data, 'utf8');
}