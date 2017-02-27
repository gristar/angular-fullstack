/**
 * Created by chenshng on 2017/1/28.
 * Home http://www.gristar.cn
 */
var h = [],//排序前数组
    n;//数组下标
function swap(x, y) {
    var t;
    t = h[x];
    h[x] = h[y];
    h[y] = t;
}

function shiftDown(i) {
    var flag = 0,
        t;
    while (i * 2 <= n && flag === 0) {
        var leftChildIndex = i * 2 + 1,
            rightChildIndex = i * 2 + 2;
        if (h[i] > h[leftChildIndex]) {
            t = leftChildIndex;
        }
        else {
            t = i;
        }
        if (rightChildIndex <= n) {
            if (h[t] > h[rightChildIndex]) {
                t = rightChildIndex;
            }
        }
        if (t !== i) {
            swap(t, i);
            i = t;
        } else {
            flag = 1;
        }
    }
}

function create() {
    var i;
    for (i = n / 2; i >= 0; i--) {
        shiftDown(i);
    }
    console.log(h);
}

function deleteMax() {
    var t;
    t = h[0];
    h[0] = h[n];
    n--;
    shiftDown(0);
    return t;
}

function sort(ary) {
    h = ary;
    var num = ary.length,
        i;
    n = num - 1;
    create();
    var sortedAry = [];
    for (i = 0; i <= num; i++) {
        sortedAry.push(deleteMax());
    }
    return sortedAry;
}

var util = require("./common");
var ary = util.createAry(15);
console.log(ary, "排序前");
var sortedAry = sort(ary);
console.log(sortedAry, "排序后");
