

const tween = gsap.to('.tiger',{
	x : 500,
	rotation : 360,
	duration : 3,


	// 애니메이션 안에 스크롤 트리거를 넣을 수 있음

	// scrollTrigger : {
	// 	trigger : '.tigerSection', // 기본값은 지점에 도달했을 때 발생함
	// 	start : 'top center', // top : 트리거 대상의 시작위치 즉 (tigerSection의 시작 지점), center : 뷰포트 위치
	// 	end : 'bottom top', // 기본값
	// 	markers : true, // 마커의 start와 scroll-start가 맞닿았을 때 시작됨
	// 	id : 'tiger'
	// }
})


ScrollTrigger.create({

	trigger : '.tigerSection',
	start : 'top center',
	end : 'bottom 25%',
	markers : true,
	animation : tween,

	// 기본적으로 4가지를 받음 [enter(들어온 시점), leave(떠난 시점), enterBack(다시 들어옴), leaveBack(다시 떠났을 떄)
	toggleActions : 'restart pause reverse pause'
})