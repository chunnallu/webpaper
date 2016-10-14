/**
 * Created by Administrator on 2016/10/10.
 */
var compiler = require('./compiler/Compiler.js');
var fileHelper = require('./compiler/file/FileHelper.js');
function main(){
    var arguments = process.argv.splice(2);
    if(!arguments[0]){
        console.log("[Err]没有数据文件！");
        return ;
    }
    arguments[1] = arguments[1] ? arguments[1] : "dist/index.html";
    var data = fileHelper.readFileByLine(arguments[0]);
    var html = compiler.compile(data);
    fileHelper.writeFile(arguments[1],html);
}

main();