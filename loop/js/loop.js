
/**
 * Created by John on 2016/4/25.
 */
// var table = 3;
// var operator = 'addition'; //计算类型
// var i = 1;//counter1
// var j = 1;//counter2
var msg = '';

for(var i=1;i<10;i++){
    for(var j=1;j<=i;j++){
        msg +=   + i + ' * ' + j + ' = ' + (i * j) + "   ";
    }
    msg += '<br />';
}


//输出到网页
var el =document.getElementById('blackboard_show');
el.innerHTML = msg;



// if (operator === 'addition'){
//     //加法
//     while (i<11){
//         msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//         i++;
//     }
// }else{
//     //乘法
//     while (i<11){
//         msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
//         i++;
//     }
// }
