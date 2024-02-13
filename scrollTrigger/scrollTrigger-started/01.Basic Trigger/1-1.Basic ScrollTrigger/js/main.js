








gsap.to('.tiger',{
	x : 500,
	rotation : 360,
	duration : 3,
	scrollTrigger : {
		trigger : '.tigerSection', // 기본값은 지점에 도달했을 때 발생함
		start : 'top center', // top : 트리거 대상의 시작위치 즉 (tigerSection의 시작 지점), center : 뷰포트 위치
		end : 'bottom top', // 기본값
		markers : true, // 마커의 start와 scroll-start가 맞닿았을 때 시작됨
		id : 'tiger'
	}
})