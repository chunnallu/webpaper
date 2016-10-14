/**
 * Created by Administrator on 2016/10/13.
 */
var currChar = "A";
var inc = 0;
exports.setStart = function(c){
    currChar = c;
    inc = 0;
}

exports.next = function(){
    var code = currChar.charCodeAt();
    code += inc;
    inc++;
    return String.fromCharCode(code);
}