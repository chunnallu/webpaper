/**
 * Created by Administrator on 2016/10/11.
 */
var constants = require("../constants.js")
var JudgeTag = require("./JudgeTag.js")
var TitleTag = require("./TitleTag.js")
var PartTag = require("./PartTag.js")
var SingleSelectionTag = require("./SingleSelectionTag.js")
var MultiSelectionTag = require("./MultiSelectionTag.js")
var CompletionTag = require("./CompletionTag.js")
var EssayTag = require("./EssayTag.js")
var PlainTextTag = require("./PlainTextTag.js")
var QuestionType = constants.QuestionType;
var QuestionClass = constants.QuestionClass;

module.exports = function(){
    var scriptData = {};
    var styleData = {};
    this.createTag = function(label,data){
        /**
          label {
                        "line": 0,
                        "lines": 1,
                        "hasAnswer": true,
                        "answer": "这是答案",
                        "questionType":1
         }
         */
        var tag = "";
        switch(label.questionType){
            case QuestionType.SingleSelection : {
                styleData[QuestionType.SingleSelection] = true;
                tag = SingleSelectionTag.createTag(label,data);
                break;
            }
            case QuestionType.MultiSelection :{
                styleData[QuestionType.MultiSelection] = true;
                tag = MultiSelectionTag.createTag(label,data);
                break;
            }
            case QuestionType.Judge : {
                styleData[QuestionType.Judge] = true;
                tag = JudgeTag.createTag(label,data);
                break;
            }
            case QuestionType.Completion : {
                styleData[QuestionType.Completion] = true;
                tag = CompletionTag.createTag(label,data);
                break;
            };
            case QuestionType.Essay : {
                styleData[QuestionType.Essay] = true;
                tag = EssayTag.createTag(label,data);
                break;
            };
            case QuestionType.Title : {
                styleData[QuestionType.Title] = true;
                tag = TitleTag.createTag(label,data);
                break;
            };
            case QuestionType.Part : {
                styleData[QuestionType.Part] = true;
                tag = PartTag.createTag(label,data);
                break;
            };
            case QuestionType.PlainText: {
                styleData[QuestionType.PlainText] = true;
                tag = PlainTextTag.createTag(label,data);
                break;
            };

        }
        return tag;
    };

    this.genScript = function(){
        return "<script></script>"
    }

    this.genStyle = function(theme){
        var tag = "<style>";
        for(var qusType in QuestionType){
           if( styleData[QuestionType[qusType]] === true ){
               switch(QuestionType[qusType]){
                   case QuestionType.SingleSelection : {
                       tag += SingleSelectionTag.createTagStyle(theme);
                       break;
                   }
                   case QuestionType.MultiSelection :{
                       tag += MultiSelectionTag.createTagStyle(theme);
                       break;
                   }
                   case QuestionType.Judge : {
                       tag += JudgeTag.createTagStyle(theme);
                       break;
                   }
                   case QuestionType.Completion : {
                       tag += CompletionTag.createTagStyle(theme);
                       break;
                   };
                   case QuestionType.Essay : {
                       tag += EssayTag.createTagStyle(theme);
                       break;
                   };
                   case QuestionType.Title : {
                       tag += TitleTag.createTagStyle(theme);
                       break;
                   };
                   case QuestionType.Part : {
                       tag += PartTag.createTagStyle(theme);
                       break;
                   };
                   case QuestionType.PlainText: {
                       tag += PlainTextTag.createTagStyle(theme);
                       break;
                   };
               }
           }
        }
        tag += "</style>";
        return tag;
    }
}