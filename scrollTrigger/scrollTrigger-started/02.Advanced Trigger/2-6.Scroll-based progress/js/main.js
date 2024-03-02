








const progress = document.querySelector('.progress');






console.log(innerHeight)

ScrollTrigger.create({
	trigger : '.progressHolder',
	start : 'top ' + (document.querySelector('.section01').offsetHeight - 150),
	endTrigger : '.section03', // endTigger를 지정하면 end의 위치가 변경됨 , 변경 안할 경우 tigger 기준
	end : 'bottom bottom',
	// end : '+=2000',
	// end : `+=${innerHeight*3}`,

	once : true, // 실행이 되면 스크롤 트리커 kill 옵션
	pin : true,
	markers : true,
	animation : gsap.to(progress,{
		scaleX : 1,
		ease : 'none'
	}),
	id : 'pro',
	onUpdate : ({progress}) => {

		document.querySelector('.percent span').textContent = Math.round(progress * 100)







	},
	scrub : true,
})



const circle = document.querySelector('.circleContainer circle')
const rect = document.querySelector('.rectContainer rect')


const circleLength = circle.getTotalLength() + 1;
const rectLength = rect.getTotalLength() + 1;


gsap.set(circle,{
	strokeDashoffset : circleLength,
	strokeDasharray : circleLength
})

gsap.set(rect,{
	strokeDashoffset : rectLength,
	strokeDasharray : rectLength
})

// gsap.to(circle, {
// 	strokeDashoffset:  0,
// 	duration :2,
// })

const progressSVG = gsap.timeline({
	defaults : {
		strokeDashoffset : 0,
		ease : 'none'
	}})
		.to(circle,{})
		.to(rect,{},0)


ScrollTrigger.create({
	trigger : '.scroll-content',
	start : 'top top',
	end : 'bottom bottom',
	animation : progressSVG,
	scrub: true,
	markers : true,

})




ScrollTrigger.create({
	trigger : '.scroll-content',
	start : 'top top',
	end : 'bottom bottom',
	animation : progressSVG,
	scrub: true,
	markers : true,

})






markers()


