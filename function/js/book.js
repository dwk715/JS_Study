/**
 * Created by John on 2016/4/24.
 */
(function() {
//    hotel对象
    var hotel = {
        name : 'Dlala Hotel',
        roomRate : 50, //use ￥
        discount : 15, //当前折扣率
        offerPrice:function () {
         var offerRate = this.roomRate * ((100-this.discount)/100);
            return offerRate;
        }
    };
    
    var hotelName, roomRate, specialRate; //声明变量
    
    //获取元素
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    //输出酒店内容
    hotelName.textContent = hotel.name;
    roomRate.textContent = '￥'+ hotel.roomRate.toFixed(2);//四舍五入到小数点后两位
    specialRate.textContent = '￥' + hotel.offerPrice();
    
    var expiryMsg;  //输出信息
    var today; //today'date
    var elEnds; //the element that shows the massage about the offer ending

    function offerExpires() {
        var weekFromToday;
        //增加一周的时间（使用毫秒）
        weekFromToday = new Date(today.getTime()+7*24*60*60*1000);

        //创建数组来存储日期和月份的名字
        var dayName,monthNames;
        dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        //收集显示在页面上的时间信息
        var day,date,month,year;
        day = dayName[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        //创建输出信息
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br /> ('+ date + ' ' + month + ' ' +year+ ')';
        return expiryMsg;
    }
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

//    IIFE立即调用函数表达式
}());