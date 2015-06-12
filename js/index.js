


window.onload=function(){
	toCarousel();
}

//广告轮换

toCarousel = function(){
	var oCarousel = document.getElementById('carousel');
	var aLi = oCarousel.getElementsByTagName('li');
	var aSpan = oCarousel.getElementsByTagName('span');
	
	var iNow = 0;
	
	var timer = setInterval(auto, 3000);
	
	//自动播放
	function auto(){
		if(iNow == aLi.length-1){
			iNow = 0;
		}else{
			iNow++;
		}
		
		for(var i=0; i<aLi.length; i++){
			fadeOut(aLi[i]);
			aSpan[i].className = '';
		}
		
		fadeIn(aLi[iNow]);
		aSpan[iNow].className = 'sel';
		
	}
	
	oCarousel.onmouseover = function(){
		clearInterval(timer);
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(auto, 3000);
	}
	//按钮切换
	aSpan[0].onclick = function(){
		
		var iClass = this.className;
		
		if(iClass == 'sel'){return }
		
		fadeOut(aLi[iNow]);
		aSpan[iNow].className = '';

		iNow = 0;
		
		fadeIn(aLi[iNow]);

		aSpan[iNow].className = 'sel';
		
	}
	aSpan[1].onclick = function(){
		
		var iClass = this.className;
		
		if(iClass == 'sel'){return }
		
		fadeOut(aLi[iNow]);
		aSpan[iNow].className = '';

		iNow = 1;
		
		fadeIn(aLi[iNow]);

		aSpan[iNow].className = 'sel';
		
	}
	aSpan[2].onclick = function(){
		
		var iClass = this.className;
		
		if(iClass == 'sel'){return }
		
		fadeOut(aLi[iNow]);
		aSpan[iNow].className = '';

		iNow = 2;
		
		fadeIn(aLi[iNow]);

		aSpan[iNow].className = 'sel';
		
	}

}

//淡入
fadeIn = function(obj){
	clearInterval(obj.timer);
	
	var iCur = getStyle(obj,'opacity');
	if(iCur == 1) {return false;}
	
	var value = 0;
	
	obj.timer = setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timer);
		}else{
			value +=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+');';
		}
	},30)
};
//淡出
fadeOut = function(obj){
	clearInterval(obj.timer);
	
	var iCur = getStyle(obj,'opacity');
	if(iCur == 0) {return false;}
	
	var value = 100;
	
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}else{
			value +=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+');';
		}
	},30)
};


//获取样式
getStyle = function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}