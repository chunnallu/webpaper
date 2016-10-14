/**
 * Created by Administrator on 2016/10/11.
 */
var constants = require("./constants.js")
var QuestionType = constants.QuestionType;

module.exports = function(data){
    var labels = getLabels(data);
    var currLabelIndex = -1;

    this.next = function(){
        currLabelIndex++;
        return labels[currLabelIndex];
    }
}

var getLabels = function(data){
    var labels = [];
    for(var i = 0; i< data.length ; i++){
        var line = data[i];
        var currChar = 0;
        var questionType = QuestionType.Default;
        var hasAnswer = false;
        var answer = "";
        var isLabel = false;

        //检查该行是否有题目标记
        if(line[currChar] === "<"){   //start with < ?
            var qusType = false;
            //question type label
            currChar++;
            if(line[currChar] === "*"){
                qusType = true;
                if( line[ currChar+1 ] === "*" ){   // MultiSelection
                    currChar++;
                    questionType = QuestionType.MultiSelection;
                }else{                             // SingleSelection
                    questionType = QuestionType.SingleSelection;
                }
            }else if(line[currChar] === "?"){     // Judge
                qusType = true;
                questionType = QuestionType.Judge;
            }else if(line[currChar] === "_"){     // Essay
                qusType = true;
                questionType = QuestionType.Essay;
            }else if(line[currChar] === "."){     // Completion
                qusType = true;
                questionType = QuestionType.Completion;
            }else if(line[currChar] === "H"){     // title
                qusType = true;
                questionType = QuestionType.Title;
            }else if(line[currChar] === "P"){     // part
                qusType = true;
                questionType = QuestionType.Part;
            }else if(line[currChar] === "T"){     // plain text
                qusType = true;
                questionType = QuestionType.PlainText;
            }

            if(qusType){
                currChar++;
                if(line[currChar] === "="){     //has answer ?
                    hasAnswer = true;
                    currChar++;
                    while( currChar<line.length && line[currChar] != ">"){ //get the answer
                        answer += line[currChar];
                        currChar++;
                    }
                }
                if(line[currChar] === ">"){
                    isLabel = true;
                    data[i] = line.substring(currChar+1);   //delete label
                    labels.push({
                        "line": i,
                        "lines": 1,
                        "hasAnswer": hasAnswer,
                        "answer": answer,
                        "questionType":questionType
                    });
                }
            }
        }

        if(!isLabel){   //没有题目标记
            if(labels.length < 1){     //title

            }else{                     // question content
                var currLabel = labels[ labels.length - 1 ];
                currLabel.lines++;
            }

        }
    }
//    console.log(data);
//    console.log(labels);
    return labels;
}

