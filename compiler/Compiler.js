/**
 * Created by Administrator on 2016/10/10.
 */
var LabelHelper = require("./LabelHelper.js");
var TagHelper = require("./tag/TagHelper.js");
var HtmlHelper = require("./HtmlHelper.js");
var constants = require("./constants.js")
var Theme = constants.Theme;

exports.compile = function(data){
    var labelHelper = new LabelHelper(data);
    var tagHelper = new TagHelper();
    var htmlHelper = new HtmlHelper();
    var result = {
        "head":"",
        "body":""
    }
    var currLabel;
    while(currLabel = labelHelper.next()){
        var tags = tagHelper.createTag(currLabel,data);
        result.body += tags ;
    }
    var styleTags = tagHelper.genStyle(Theme.Default);
    result.head += styleTags;
    var scriptTags = tagHelper.genScript();
    result.body += scriptTags;
    return htmlHelper.genHtml(result);
}

