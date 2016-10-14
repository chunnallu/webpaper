/**
 * Created by Administrator on 2016/10/11.
 */
var fileHelper = require('./file/FileHelper.js');
var commonStyle = "common.css";
var editorFile = "editor.html";
module.exports = function(){
    this.genHtml = function(htmlData){
        var html = "<html>" +
            "<head>" +
                "<meta charset='utf-8'>"+
            "<style>"+loadCommonStyle()+"</style>"+
            htmlData.head +
            "</head>" +
            "<body>" +
                "<div class='mainContent'>"+
                     htmlData.body +
                 "</div>"+
            loadEditor()+
            "</body>" +
            "</html>";
        return html;
    }
}

function loadCommonStyle(){
   return fileHelper.readFile("resource/common/"+commonStyle);
}
function loadEditor(){
    return fileHelper.readFile("resource/common/"+editorFile);
}