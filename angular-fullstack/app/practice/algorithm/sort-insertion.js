/**
 * Created by chenshng on 2016/12/24.
 * Home http://www.gristar.cn
 */
var common = require('./common');
function insertSort(ary) {
    console.time('插入排序耗时');
    var len = ary.length;
    for (var i = 1; i < len; i++) {
        var key = ary[i],
            j = i - 1;
        while (j >= 0 && key < ary[j]) {
            ary[j + 1] = ary[j];
            j--;
        }
        ary[j + 1] = key;
    }
    console.timeEnd('插入排序耗时');
    return ary;
}

var ary = common.createAry(20);
console.log('排序前', ary);
var sortedAry = insertSort(ary);
console.log('排序后', sortedAry);
