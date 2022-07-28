// $(function(){
//     $('#poper').popover({
//         html: true,
//         trigger:'focus',
//         content: $('#pop')
//     });

// });
// $(function(){
//     $('#poper1').popover({
//         html: true,
//         trigger:'focus',
//         content: $('#pope')
// });

// });
// let changeIcon=function(icon)
// {
//    icon.classList.toggle('fa-times')    
// }
// function changeColor()
// {
//    var icon = document.getElementById('heart');
//    icon.style.color = "red";    
// }
// 
// let input=document.querySelector('input');
// var i=parseInt(input.value);
// let i=553;
var isLiked=false;
       var a=500;
let changeIcon=function(x) {
  //  const hearts = document.getElementById('heart');
  // var like=document.getElementById('inc').value = ++i;
     x.classList.toggle('fa-solid');
     isLiked=!isLiked;
         if(isLiked) {
           a = document.getElementById("totalLikes").innerHTML = parseInt(a)+1;
         }
         else {
         a = document.getElementById("totalLikes").innerHTML = parseInt(a)-1;
         }
    //  if(i==553){
    //   document.getElementById('inc').value = ++i;
    //  }else
    //   document.getElementById('inc').value = --i;
    //  hearts.classList.replace('fa-regular','fa-solid');
 };
// function changeImage(){
//   let displayImage=document.getElementById('image1')
//   if(displayImage.src.match('C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/ping4.jpg')){
//     displayImage.src='C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/ping2.jpg'
//   }
//   else{
//     displayImage.src='C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/ping4.jpg'
//   }
// }
// function changeIcon(){
//   let displayImage=document.getElementById('heart')
//   if(displayImage.src.match('C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/heart4.jpg')){
//     displayImage.src='C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/heart3.jpg'
//   }
//   else{
//     displayImage.src='C:/Users/raiak/OneDrive/Desktop/html-project-assignment/asset/images/heart4.jpg'
//   }
// }
const d1 = document.getElementById("d1");
d1.addEventListener("click" , function(){
    const d2 = document.getElementById("d2");
    if( d2.getAttribute("d")== "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"){
       d2.setAttribute("d", "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" );
        d1.style.ariaLabel="Unlike";
        d1.style.fill="#ed4956";
        d1.style.color="#ed4956";
        d1.setAttribute("viewBox","0 0 48 48");
    }
    else{
        d2.setAttribute("d", "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" );
        d1.style.ariaLabel="like";
        d1.style.fill="#262626";
        d1.style.color="#262626";
        d1.setAttribute("viewBox","0 0 24 24");

    }
});


const icon=document.querySelector('#icon')
icon.addEventListener('click',(e)=>{
  let iconEI=e.currentTarget.children[0].children[0];
  if(iconEI.getAttribute('href')==='#like'){
    iconEI.getAttribute('href','#unlike')
  }  else{
    iconEI.getAttribute('href','#like')
  }
})