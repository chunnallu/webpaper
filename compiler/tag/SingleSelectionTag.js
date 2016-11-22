/**
 * Created by Administrator on 2016/10/12.
 */
/**
 * Created by Administrator on 2016/10/12.
 **/
var fileHelper = require('../file/FileHelper.js');
var constants = require("../constants.js");
var charHelper = require('../utils/charHelper.js');
var getTagId = require("../utils/getTagId.js");
var QuestionType = constants.QuestionType;
var QuestionClass = constants.QuestionClass;
var styleFile = "SingleSelectionTag.css";

exports.createTag = function(label,data){
    var topicID = getTagId();
    var options = "";
    charHelper.setStart("A");
    for(var i =1 ; i<label.lines ; i++){
        options += "          <li value='"+charHelper.next()+"'>"+data[label.line+i]+"</li>";
    }
    var tag = "  <div id='"+topicID+"' class='topic SingleSelection'>"+
        "      <div class='question'>"+
        "          "+data[label.line]+
        "          <span>(</span>"+
        "          <span class='operator'></span>"+
        "          <span>)</span>"+
        "          [<span class='showAnswer'>显示答案</span>]"+
        "      </div>"+
        "      <ul class='optionBox'>"+
                   options+
        "      </ul>"+
        "      <input class='answer' type='hidden' value='"+label.answer+"'/>"+
        "  </div>"+
        "  <script>"+
        "      var "+topicID+" = document.getElementById('"+topicID+"');"+
        "      var "+topicID+"_operator = "+topicID+".getElementsByClassName('operator')[0];"+
        "      var "+topicID+"_optionBox = "+topicID+".getElementsByClassName('optionBox')[0];"+
        "      var "+topicID+"_optionList = "+topicID+"_optionBox.getElementsByTagName('li');"+
        "      var "+topicID+"_showAnswerBtn = "+topicID+".getElementsByClassName('showAnswer')[0];"+
        "      var "+topicID+"_answer = "+topicID+".getElementsByClassName('answer')[0].value;"+
        "      "+topicID+"_optionBox.addEventListener('click',function(e){"+
        "          if(e.target && e.target.nodeName == 'LI'){"+
        "              e.stopPropagation();"+
        "              for(var i =0 ; i<"+topicID+"_optionList.length ; i++){"+
        "                  "+topicID+"_optionList[i].setAttribute('class','');"+
        "              }"+
        "              e.target.setAttribute('class','selected');"+
        "              "+topicID+"_operator.setAttribute('class','operator');"+
        "              "+topicID+"_operator.innerText = e.target.getAttribute('value');"+
        "          }"+
        ""+
        "      });"+
        "      "+topicID+"_showAnswerBtn.addEventListener('click',function(e){"+
        "          "+topicID+"_answer = "+topicID+"_answer.toUpperCase();"+
        "          var index = "+topicID+"_answer.charCodeAt() - 'A'.charCodeAt();"+
        "          var option = "+topicID+"_optionList[index];"+
        "          "+topicID+"_operator.innerText = "+topicID+"_answer;"+
        "          "+topicID+"_operator.setAttribute('class','operator on');"+
        "          for(var i =0 ; i<"+topicID+"_optionList.length ; i++){"+
        "              "+topicID+"_optionList[i].setAttribute('class','');"+
        "          }"+
        "          option.setAttribute('class','on');"+
        "      })"+
        "  </script>";
    return tag;
}


exports.createTagStyle = function(theme){
    var tag = fileHelper.readFile("resource/style/"+theme+"/"+styleFile);
    return tag;
}