/**
 * Created by Ð¡»Ò on 2018/4/1.
 */
var xhr =new XMLHttpRequest();
xhr.open('GET','/getMusic?age=18',true);
xhr.send();
xhr.onload= function () {
    console.log(JSON.parse(xhr.responseText))
};