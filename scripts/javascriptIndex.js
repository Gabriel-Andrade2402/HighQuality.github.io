function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		var menu=document.getElementById('menu');
		menu.style.position="absolute";
		if (window.scrollY > 50){
			let article=document.getElementById('articleDatabase');
    		article.style.left="0px";
    	}
    	if(window.scrollY>200){
    		let article=document.getElementById('articleDesign');
    		article.style.left="0px";
    	}
    	if(window.scrollY>500){
    		let article=document.getElementById('articlePlanilhas');
    		menu.style.position="fixed";
    		article.style.left="0px";
    	}
    	if(window.scrollY>800){
    		let article=document.getElementById('articleMobile');
    		article.style.left="0px";
    	}
    	if(window.scrollY>1000){
    		let article=document.getElementById('articleWeb');
    		article.style.left="0px";
    	}
    	if(window.scrollY<500){
    		menu.style.position="absolute";
    	}

	})

}
