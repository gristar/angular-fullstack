/**
 * Created by chenshng on 2016/12/30.
 * Home http://www.gristar.cn
 */
var element = document.getElementById("test");
console.log(element);
Transform(element);
element.originY = 20;
//    element.skewX = -100;

function sineInOut(a) {
    return 0.5 * (1 - Math.cos(Math.PI * a));
}

var alloyFlow = new AlloyFlow({
    workflow: [
        {
            work: function () {
                To.go(element, "scaleY", .8, 450, sineInOut);
                To.go(element, "skewX", 20, 900, sineInOut)
            },
            start: 0
        }, {
            work: function () {
                To.go(element, "scaleY", 1, 450, sineInOut)
            },
            start: 450
        }, {
            work: function () {
                To.go(element, "scaleY", .8, 450, sineInOut);
                To.go(element, "skewX", -20, 900, sineInOut)
            },
            start: 900
        }, {
            work: function () {
                To.go(element, "scaleY", 1, 450, sineInOut);
            },
            start: 1350
        }, {
            work: function () {
                this.start();
            },
            start: 1800
        }
    ]
}).start();