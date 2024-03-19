



// const tl = gsap.timeline();


gsap.utils.toArray('.section').forEach((section , index) => {




	ScrollTrigger.create({
		trigger:section,
		start : 'top top',
		// end : '+=5000',
		pin : true,
		pinSpacing : false,
		// animation : tl,
		scrub : true,
		snap : {

			snapTo : 1,
			duration : 1,
			ease : 'power2.inOut'

		},
		markers : true,
	})

})
//
// ScrollTrigger.create({
// 	trigger:'.wrapper',
// 	start : 'top top',
// 	end : '+=5000',
// 	animation : tl,
// 	scrub : true,
// })






markers()

