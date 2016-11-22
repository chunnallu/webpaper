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
var styleFile = "EssayTag.css";

exports.createTag = function(label,data){
    var topicID = getTagId();
    var questionData = data[label.line];
    var tag ='<div id="'+topicID+'" class="topic Essay">'+
        '    <div class="question">'+
        '       '+questionData+
        '        [<span class="showAnswer">显示答案</span>]'+
        '    </div>'+
        '    <div class="operator canWrite"></div>'+
        '    <textarea class="editor"></textarea>'+
        '    <input class="answer" type="hidden" value="'+label.answer+'"/>'+
        '</div>'+
        '<script>'+
        '    var '+topicID+' = $("#'+topicID+'");'+
        '    var '+topicID+'_operator = '+topicID+'.find(".operator");'+
        '    var '+topicID+'_showAnswerBtn = '+topicID+'.find(".showAnswer");'+
        '    var '+topicID+'_answer = '+topicID+'.find(".answer").val();'+
        '    var '+topicID+'_editor = '+topicID+'.find(".editor");'+
        '    var enterTimes = 0;'+
        '    '+topicID+'_operator.on("click",function(e){'+
        '        if('+topicID+'_operator.hasClass("on")){'+
        '            '+topicID+'_operator.text("");'+
        '            '+topicID+'_operator.removeClass("on")'+
        '        }'+
        '        '+topicID+'_operator.hide();'+
        '        '+topicID+'_editor.show();'+
        '        '+topicID+'_editor.focus();'+
        '    });'+
        '    '+topicID+'_showAnswerBtn.on("click",function(e){'+
        '        '+topicID+'_operator.text('+topicID+'_answer);'+
        '        '+topicID+'_operator.addClass("on");'+
        '    });'+
        '    '+topicID+'_editor.on("keypress",function(e){'+
        '        if(event.keyCode === 13) {'+
        '            enterTimes++;'+
        '            if(enterTimes>1){'+
        '                enterTimes = 0;'+
        '                '+topicID+'_editor.hide();'+
        '                '+topicID+'_operator.text('+topicID+'_editor.val());'+
        '                '+topicID+'_operator.show();'+
        '            }'+
        '        }'+
        '    });'+
        '    '+topicID+'_editor.on("blur",function(e){'+
        '        '+topicID+'_editor.hide();'+
        '        '+topicID+'_operator.text('+topicID+'_editor.val());'+
        '        '+topicID+'_operator.show();'+
        '    })'+
        ''+
        '</script>';
    return tag;
}


exports.createTagStyle = function(theme){
    var tag = fileHelper.readFile("resource/style/"+theme+"/"+styleFile);
    return tag;
}