function quickSort(ary, isDesc) {
	var len = ary.length;
	if (len < 3) {
		return ary;
	}
	var baseIndex = Math.floor(len / 2),
		base = ary[baseIndex];
	var smallAry = [],
		largeAry = [];
	for (var i = len - 1, cur; i > -1; i--) {
		cur = ary[i];
		if (i == baseIndex) {
			continue;
		}
		if (isDesc) {
			cur < base ? (largeAry[largeAry.length] = cur) : (smallAry[smallAry.length] = cur);
		} else {
			cur >= base ? (largeAry[largeAry.length] = cur) : (smallAry[smallAry.length] = cur);
		}
	}
	smallAry[smallAry.length] = base;
	return quickSort(smallAry, isDesc).concat(quickSort(largeAry, isDesc));
}

function halfSearch(ary, num) {
	var len = ary.length,
		middle = Math.floor(len / 2),
		midNum = ary[middle];
	if (len == 0) {
		return null;
	} else if (num === midNum) {
		return midNum;
	} else if (midNum > num ) {
		return halfSearch(ary.slice(0, middle), num);
	} else {
		return halfSearch(ary.slice(middle + 1), num);
	}
}

var testAry = [9, 2, 3, 4, 1, 0, 8, 4, 2];
var sortedAry = quickSort(testAry);
console.log(sortedAry, "快速排序");
console.log(testAry, "原始数组");
console.log(halfSearch(sortedAry, 3), "二分查找");