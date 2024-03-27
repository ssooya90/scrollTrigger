

gsap.defaults({
	ease : 'none',
})

/**  전체 wrapper를 밀기 **/

//
// const horizontal = gsap.to('.wrapper',{
//
// 	// 매개변수를 사용하지 않겠다 -> _로 표시
//
// 	x : (_,t) => {
// 		console.log(t.scrollWidth)
// 		return -(t.scrollWidth - innerWidth)
// 	}
// })
//
//
// ScrollTrigger.create({
// 	trigger : '.hero',
// 	start : 'top top',
// 	end : () => '+=' + innerHeight * 3,
// 	animation : horizontal,
// 	pin : true,
// 	markers : true,
// 	scrub : true,
//
// })


const sections = gsap.utils.toArray('.section');
const tween = gsap.to(sections,{
	xPercent : -100 * (sections.length-1),
	scrollTrigger : {
		trigger : '.hero',
		scrub : 1,
		pin : true,
		end : () => '+=' + innerWidth * 2,
	}
})



ScrollTrigger.create({
	trigger : '.section02',
	start : 'left center',
	end : 'right center',
	horizontal : true,
	animation : gsap.to('.box' ,{rotation : 360}),
	scrub: true,
	markers : true,

	containerAnimation : tween,

})

markers();
