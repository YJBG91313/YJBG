let i=0, imgArr=new Array(); //宣告使用變數 i 及 陣列 imgArr
imgArr[0] = "https://megapx-assets.dcard.tw/images/95e64206-994a-4e0f-bc3b-fc5848af3a1c/640.webp";
imgArr[1] = "https://blog.delivered.co.kr/wp-content/uploads/2024/04/TXT-members-featured.jpg";
imgArr[2] = "https://cdn2.ettoday.net/images/3914/d3914661.jpg";

function showImg(){
 document.getElementById("ico").src= imgArr[i];//指定img的src
 i=(i+1) %3;
}

function show() {
 setInterval(showImg, 2000); //每隔2秒呼叫一次showImg函數
}
let tittle=document.getElementById("tittle");
let content=document.getElementById("content");
let btn=document.getElementById("btn");
let list=document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML=list.innerHTML + `
  <div class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
  title.value=""
  content.value=""
}