/**
 * Created by Administrator on 2016/10/12.
 */
/**
 * Created by Administrator on 2016/10/12.
 **/
var fileHelper = require('../file/FileHelper.js');
var constants = require("../constants.js");
var getTagId = require("../utils/getTagId.js");
var QuestionType = constants.QuestionType;
var QuestionClass = constants.QuestionClass;
var styleFile = "PartTag.css";

exports.createTag = function(label,data){
    var topicID = getTagId();
    var part = data[label.line];
    var tag = "<div id='"+topicID+"' class='topic Part'><span class='text'>"+part+"</span></div>";
    return tag;
}


exports.createTagStyle = function(theme){
    var tag = fileHelper.readFile("resource/style/"+theme+"/"+styleFile);
    return tag;
}