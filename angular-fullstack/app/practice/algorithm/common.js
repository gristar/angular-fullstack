/**
 * Created by chensheng on 2016/12/22.
 */
'use strict'
exports.createAry =  function(number){
    var ary = [];
    for(let i = 0; i < number; i++){
        ary.push(Math.floor(Math.random()*100));
    }
    return ary;
}