/**
 * Created by Administrator on 2016/10/12.
 */
var fileHelper = require('../file/FileHelper.js');
var constants = require("../constants.js");
var getTagId = require("../utils/getTagId.js");
var QuestionType = constants.QuestionType;
var QuestionClass = constants.QuestionClass;
var styleFile = "JudgeTag.css";

exports.createTag = function(label,data){
    var topicID = getTagId();
    var answer = label.answer === "y" ? "√" : "χ";
    var tag = "<div id='"+topicID+"' class='topic "+QuestionClass[label.questionType]+"'>" +
        "<div class='question'>" +
        data[label.line]+
        "<span>(</span>"+
        "<span class='operator'></span>"+
        "<span>)</span>"+
        "[<span class='showAnswer'>显示答案</span>]"+
        "</div>"+
        "<input class='answer' type='hidden' value='"+ answer +"'/>"+
        "</div>"+
        "<script>"+
        "var "+topicID+" = document.getElementById('"+topicID+"');"+
        "var "+topicID+"_operator = "+topicID+".getElementsByClassName('operator')[0];"+
        "var "+topicID+"_showAnswerBtn = "+topicID+".getElementsByClassName('showAnswer')[0];"+
        "var "+topicID+"_answer = "+topicID+".getElementsByClassName('answer')[0].value;"+
        ""+topicID+"_operator.addEventListener('click',function(e){"+
        ""+topicID+"_operator.setAttribute('class','operator');"+
        "var jg = "+topicID+"_operator.innerHTML;"+
        "if(jg === '√'){"+
        "jg = 'χ';"+
        "}else{"+
        "jg = '√';"+
        "}"+
        ""+topicID+"_operator.innerHTML = jg;"+
        "});"+
        ""+topicID+"_showAnswerBtn.addEventListener('click',function(e){"+
        ""+topicID+"_operator.innerHTML = "+topicID+"_answer;"+
        ""+topicID+"_operator.setAttribute('class','operator on');"+
        "})"+
        "</script>";
    return tag;
}


exports.createTagStyle = function(theme){
    var tag = fileHelper.readFile("resource/style/"+theme+"/"+styleFile);
    return tag;
}