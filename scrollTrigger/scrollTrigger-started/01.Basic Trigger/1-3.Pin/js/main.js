const split = new SplitText('h3',{type : 'chars'})
console.log(split)

const tl = gsap.timeline()
		.from('.tiger',{scale:0, ease:'back(3)'})
		.from(split.chars,{y:60,opacity:0,ease : 'back(3)',stagger:0.1})



ScrollTrigger.create({
	trigger : '.banner',
	start : 'top center', // 스크롤 시작 위치 , 뷰포트
	end : '200% center',
	// end : '+=1000',
	// markers : true,
	pin : true,
	animation : tl,
	scrub: 1,
	// pinSpacing : false // 기본값 true (ex헤더에서 사용) , true일때 패딩으로 공간을 확보
	// pinType : 'transform'
})




ScrollTrigger.create({
	trigger : '.section03',
	start : 'top',
	// end : 'bottom',
	end : '+=2000',
	markers : true,
	pin : true,
	animation : gsap.to('.section03 h2',{rotation:360}),
	scrub : 1,
})
