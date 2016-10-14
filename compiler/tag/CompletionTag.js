/**
 * Created by Administrator on 2016/10/12.
 */
/**
 * Created by Administrator on 2016/10/12.
 **/
var fileHelper = require('../file/FileHelper.js');
var constants = require("../constants.js")
var getTagId = require("../utils/getTagId.js")
var QuestionType = constants.QuestionType;
var QuestionClass = constants.QuestionClass;
var styleFile = "CompletionTag.css";

exports.createTag = function(label,data){
    var topicID = getTagId();
    var questionData = splitQuestion(data[label.line]);
    var tag ="<div id='"+topicID+"' class='topic Completion'>"+
    "    <div class='question'>"+
    "        "+questionData.pre+"<span class='operator canWrite'></span>"+questionData.tail+""+
    "        [<span class='showAnswer'>显示答案</span>]"+
    "    </div>"+
    "    <input class='answer' type='hidden' value='"+label.answer+"'/>"+
    "</div>"+
    "<script>"+
    "    var "+topicID+" = document.getElementById('"+topicID+"');"+
    "    var "+topicID+"_operator = "+topicID+".getElementsByClassName('operator')[0];"+
    "    var "+topicID+"_showAnswerBtn = "+topicID+".getElementsByClassName('showAnswer')[0];"+
    "    var "+topicID+"_answer = "+topicID+".getElementsByClassName('answer')[0].value;"+
    "    "+topicID+"_operator.addEventListener('click',function(e){"+
        "        if("+topicID+"_operator.getAttribute('class').includes('on')){"+
        "            "+topicID+"_operator.innerHTML = '';"+
        "        }"+
    "        "+topicID+"_operator.setAttribute('class','operator');"+
    "    });"+
    "    "+topicID+"_showAnswerBtn.addEventListener('click',function(e){"+
    "        "+topicID+"_operator.innerHTML = '"+label.answer+"';"+
    "        "+topicID+"_operator.setAttribute('class','operator on');"+
    "    })"+
    ""+
    "</script>";
    return tag;
}


function splitQuestion(question){
    var temp = question.split("{$}");
    return {
        pre : temp[0],
        tail : temp[1]
    }
}


exports.createTagStyle = function(theme){
    var tag = fileHelper.readFile("resource/style/"+theme+"/"+styleFile);
    return tag;
}