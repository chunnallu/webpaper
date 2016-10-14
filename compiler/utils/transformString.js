/**
 * Created by Administrator on 2016/10/12.
 */
var readline = require("readline")
var fs = require("fs")
function transform(addr){
    var data = [];
    var close = false;
    var lineReader = readline.createInterface({
        input: fs.createReadStream(addr)
    });

    lineReader.on('line', function (line) {
        console.log("\""+line+"\"+");
    });

    lineReader.on("close",function(){

    });
}
transform("../../resource/style/Normal/EssayTagDemo.html");