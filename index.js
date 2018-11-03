window.onload=function(){
	let head_car=document.getElementsByClassName("head_car")[0];
	let shoppingCarbox=document.getElementsByClassName("shoppingCarbox")[0];
	console.log(head_car,shoppingCarbox);

	head_car.onmouseenter=function(){
		shoppingCarbox.style.height="98px";
		shoppingCarbox.style.boxShadow="0 3px 6px 2px rgba(0,0,0,4)";

	}
	head_car.onmouseleave=function(){
		shoppingCarbox.style.height=0;
		shoppingCarbox.style.boxShadow="none";

	}

	let banner_nav=document.getElementsByClassName("banner_nav")[0];
	console.log(banner_nav);
	let li=banner_nav.getElementsByTagName("li");
	console.log(li);
	let asideBox=banner_nav.getElementsByClassName("asideBox");
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			
			for( let j=0;j<li.length;j++){				
				
				asideBox[j].style.display="none";
			}
			
			asideBox[i].style.display="flex";

		}
		li[i].onmouseleave=function(){
			
			asideBox[i].style.display="none";
		}
	}

//轮播图

let btn1=document.getElementsByClassName("banner_btn");
console.log(btn1);
let dian=document.getElementsByClassName("dian")[0];
console.log(dian);
let d=dian.getElementsByClassName("banner_dian1");
console.log(d);
let bannerBox=document.getElementsByClassName("bannerBox")[0];
console.log(bannerBox);
let lis=bannerBox.getElementsByTagName("li");
console.log(lis);
let num=0;
let t=setInterval(move,1000);
function move(){
		num++;
	if(num==lis.length){
		num=0;	
		}
	for(let num=0;num<lis.length;num++){
		lis[num].style.zIndex=5;
		d[num].style.background="";

		}
	lis[num].style.zIndex=10;
	d[num].style.background="#fff";
}

function move1(){
	num--;
	if(num<0){
	num=lis.length-1;
	}
	
	for(let num=0;num<lis.length;num++){
	lis[num].style.zIndex=5;
	d[num].style.background="";
	}

	lis[num].style.zIndex=10;
	d[num].style.background="#fff";
}
	btn1[1].onclick=function(){
		move();
		clearInterval(t);
		
	}

	btn1[0].onclick=function(){
	 move1();
	  clearInterval(t);
}
bannerBox.onmouseenter=function(){

	clearInterval(t);

}

bannerBox.onmouseleave=function(){

	t=setInterval(move,1000);

}




for(let i=0;i<d.length;i++){
	d[i].onclick=function(){
		for(j=0;j<d.length;j++){
			lis[j].style.zIndex=5;
			d[j].style.background="";

		}
		lis[i].style.zIndex=10;
		d[i].style.background="#fff";
		num=1;
	}
}


// let now=0;
// let next=0;
// let t=setInterval(move4,2000);
// function move4(){
// 	if(next==list.length){
// 		next=0;
// 	}
// 	list[now].style.left=0+"px";
// 	list[next].style.left=widths+"px";
// 	btn[num].calsslist.remove("hot")
// 	animate(list[now],{left:-widths});
// 	animate(list[next],{left:0});
// }



// function move5(){
// if(next==0){
// 	next==list.length-1
// }
// 	list[next].style.left=-widths+"px";
// 	list[now].style.left=0;
// 	btn[num].classlist.add("hot")
// 	animate(list[now],{left:widths});
// 	animate(list[next],{left.0});
	
// }
// let dian=document.querySelectorAll(i);
// 	d[i]onclick=function(){
// 		list[i].style.left=0;
// 		d[i].style.background="#fff";
// 	if(i<now){
// 		list[now].style.left=0+"px";
// 		list[next].style.left=widths+"px";
// 		btn[num].calsslist.remove("hot")
// 		animate(list[now],{left:-widths});
// 		animate(list[next],{left:0});		
// 		}
// 	if(i>now){
// 		list[next].style.left=-widths+"px";
// 		list[now].style.left=0;
// 		animate(list[now],{left:widths});
// 		animate(list[next],{left.0});
// 		}

// 		}
// 		d[i].onmounseenter






// 	}

var a=document.querySelector(".kuangll")
console.log(a)
window.onscroll=function(){
var l=document.documentElement.scrollTop;
		console.log(l)
		if(l>500){
			a.style.top="0px"
			setTimeout(function(){ 
				
				a.style.transition="all 0s"

			},1000)

		}else{
			a.style.top="-100px"
			setTimeout(function(){ 
				a.style.transition="all 1s"


			},1000)
		}
}







// a href=javascript:;
// 后面
// let banner=document.querySelectorAll("banner");
// let list=document.querySelectorAll("list"); 
// let num=0;
// let list=0;
// setInterval(move2,2000);
// function move(){
// 	num++;
// 	list[now].style.left=0;
// 	list[next].style.left=-width;


// }














let daohang=document.getElementsByClassName("daohang")[0];
console.log(daohang);
let liss=daohang.getElementsByTagName("span");
console.log(liss);
let daohangBox=daohang.getElementsByClassName("daohangBox");
console.log(daohangBox);
for(let i=0;i<liss.length;i++){
		liss[i].onmouseenter=function(){
			for( let j=0;j<liss.length;j++){				
				daohangBox[j].style.height=0;
				daohangBox[i].style.display="none";
			}
			daohangBox[i].style.height="300px";
			daohangBox[i].style.display="flex";

		}

		liss[i].onmouseleave=function(){
			
			daohangBox[i].style.height="0px";
			daohangBox[i].style.display="none";
		}
		daohangBox[i].onmouseenter=function(){
			daohangBox[i].style.height="300px";
			daohangBox[i].style.display="flex";

		}
		daohangBox[i].onmouseleave=function(){
			
			daohangBox[i].style.height="0px";
			daohangBox[i].style.display="none";
		}
	}











let boxd=document.querySelector(".boxd");
console.log(boxd);
let danpin_btn=document.querySelectorAll(".danpin_btn1");
console.log(danpin_btn);
let widths=parseInt(getComputedStyle(boxd,null).width)/2;
console.log(widths);
let time=0;

danpin_btn[1].onclick=function(){
	time++;
	if(time==2){
		time=1;
	}
	boxd.style.transform=`translateX(${-widths*time}px)`;
}
danpin_btn[0].onclick=function(){
	time--;
	if(time<0){
		time=0;
	}
	boxd.style.transform=`translateX(${widths*time}px)`;
}







function fff(m){
let clasr=document.querySelector(m+" .clasr");
console.log(clasr);
let ban=document.querySelectorAll(m+" .ban");
console.log(ban);
let repin3=document.querySelectorAll(m+" .repin3");
console.log(repin3)

let dahe=document.querySelector(m+" .dahe")
console.log(dahe)
let widthss=parseInt(getComputedStyle(dahe).width)/3;
console.log(widthss)
var timess=0;
var xd=document.querySelectorAll(m+" .xd li")

// fff(fff1)


function movel(){
		xd.forEach(function(val,index){
			val.style.background="#ddd"
			val.style.border="none"
		})
		dahe.style.transform=`translateX(${-widthss*timess}px)`;
		xd[timess].style.border="2px solid orange"
		// console.log(123)
			
	}


// move()
ban[1].onclick=function(){
	console.log(timess)
	if(timess>=2){
		ban[1].style.cursor="auto"
		timess=1
		xd[2].style.background="orange"
	}
	if(timess>0){
		ban[0].style.cursor="pointer"
	}
	
	timess++;
	movel()
	// dahe.style.transform=`translateX(${-widthss*timess}px)`;
	// console.log(timess)

}

	
ban[0].onclick=function(){
	console.log(timess)
	if(timess<1){
		ban[0].style.cursor="auto"
		timess=1
	}
	if(timess>0){
		ban[0].style.cursor="pointer"
	}
		if(timess<=2){
		ban[1].style.cursor="pointer"
	}
	// console.log(timess)
	// dahe.style.transform=`translateX(${-widthss*timess}px)`;
	timess--;
	movel()

}

	xd.forEach(function(val,index){
		val.onclick=function(){
			timess=index;
			movel();
			}
	})
}
// console.log(fffl[0])

fff(".repin44")
fff(".repin45")
fff(".repin46")
fff(".repin47")







let flag=true
$(window).scrollTop(1)
$(".louceng>div").click(function(){
	let index=$(".louceng>div").index(this)
	flag=false
	console.log(index)
//	$(".louceng>div").eq(index).css("background","red").siblings().css("background","orange")
	let top1=$(".lll").eq(index).offset().top
	$("html,body").animate({
		scrollTop:top1
	},0,function(){
		flag=true
	})	
})
$(window).scroll(function(){
	if(flag){
		let top1=$(window).scrollTop()
	for(let i=0;i<$(".louceng>div").length;i++){
		let min=$(".lll").eq(i).offset().top
		let max=min+$(".lll>div").eq(i).outerHeight()
		if(top1>=min && top1<max){
//		$(".louceng>div").eq(i).css("background","red").siblings().css("background","orange")
		}
	}
//flag=true
	}
})














}

