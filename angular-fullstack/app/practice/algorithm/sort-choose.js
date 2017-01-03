/**
 * Created by chensheng on 2016/12/22.
 */
var common = require('./common');
function chooseSort(ary){
    console.time("选择排序耗时");
    var len = ary.length,
        tmp, minIndex;
    for(var i = 0; i < len; i++){
        minIndex = i;
        for(j = i+1; j < len - i; j++){
            if(ary[j] < ary[minIndex]){
                minIndex = j;
            }
        }
        tmp = ary[i];
        ary[i] = ary[minIndex];
        ary[minIndex] = tmp;
    }
    console.timeEnd('选择排序耗时');
    return ary;
}

var ary = common.createAry(20);
console.log('排序前', ary);
var sortedAry = chooseSort(ary);
console.log('排序后', sortedAry);