/**
 * Created by John on 2016/4/26.
 */
//获取ul
var list = document.getElementsByTagName('ul')[0];


//创建新ul尾部li  cream
var newItemLast = document.createElement('li');
var newTextLats = document.createTextNode('cream');
newItemLast.appendChild(newTextLats);
list.appendChild(newItemLast);


//创建新ul头部li Kale
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst,list.firstChild);


//为li增加class = cool
var listItems = document.querySelectorAll('li');
for(var i = 0;i < listItems.length;i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;



