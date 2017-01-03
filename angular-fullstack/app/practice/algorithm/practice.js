/**
 * Created by chenshng on 2016/12/29.
 * Home http://www.gristar.cn
 */
'use strict';
var util = require('./common');
function bubbleSort(ary){
    var len = ary.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len-1-i; j++){
            if(ary[j] > ary[j+1]){
                var tmp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = tmp;
            }
        }
    }
    return ary;
}

function bubbleSort2(ary){
    var i = ary.length - 1;
    while (i > 0){
        var pos;
        for(var j = 0; j < i; j++){
            if(ary[j] > ary[j+1]){
                pos = j;
                var tmp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = tmp;
            }
            i = pos;
        }
    }
    return ary;
}

var ary = util.createAry(20);
var sortedAry = bubbleSort(ary);
console.log(sortedAry);

var ary1 = util.createAry(20);
console.log(bubbleSort2(ary1));