/**
 * Created by chensheng on 2016/12/21.
 */
'use strict';
var common = require('./common');

function bubbleSort(ary){
    console.time('冒泡排序耗时');
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
    console.timeEnd('冒泡排序耗时');
    return ary;
}

function bubbleSort2(ary){
    console.time('改进后的冒泡排序耗时');
    var i = ary.length -1;
    while(i > 0){
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
    console.timeEnd('改进后的冒泡排序耗时');
    return ary;
}

var ary = common.createAry(200);
console.log("排序前", ary.toString());
var result = bubbleSort(ary);
console.log(result.toString(), "冒泡排序后");
console.log(tmp.toString());
result = bubbleSort2(tmp);
console.log(result.toString(), "改进的冒泡排序后");
