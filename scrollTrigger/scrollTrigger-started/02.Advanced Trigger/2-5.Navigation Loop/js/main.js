


const navColor = ["#ebdec1", "#e9aab1", "#92e0d3", "#52becb", "#f17683"];

// const section = gsap.utils.toArray('.section').map((section) => section.getBoundingClientRect().top)



const nav = document.querySelector('.nav')


// ScrollTrigger.create({
// 	trigger : '.section02',
// 	start : () => `top ${nav.offsetHeight}`,
// 	end : () => `bottom ${nav.offsetHeight}`,
// 	animation : gsap.to(nav,{backgroundColor:navColor[1]}),
// 	markers : true,
//
// 	//               E       L    EB    LB
// 	toggleActions : 'restart none none reverse'
// })


gsap.utils.toArray('.section').forEach((section ,index) => {


	ScrollTrigger.create({
		trigger : section,
		start : () => `top ${nav.offsetHeight}`,
		end : () => `bottom ${nav.offsetHeight}`,
		animation : gsap.to(nav,{backgroundColor:navColor[index]}),
		markers : true,

		//               E       L    EB    LB
		toggleActions : 'restart none none reverse',
		immediateRender : false,
	})

})


gsap.utils.toArray('.nav li').forEach((li ,index) => {

	li.addEventListener('click',function (){


		// ScrollTrigger.getAll() -> 반응형 대응(리사이즈 시 위치값 재조정 함)

		scrollbar.scrollTo(0, ScrollTrigger.getAll()[index].start + nav.offsetHeight, 600)


	})




})



markers();
