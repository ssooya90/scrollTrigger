


ScrollTrigger.create({
	trigger : '.demo-text',
	start : 'top bottom',
	end : 'bottom center',
	markers : true,
	scrub : 1,
	animation : gsap.from('.demo-text .text',{
		x () {
			return this.targets()[0].scrollWidth * -1
		}
	})
})


gsap.utils.toArray('.demo-gallery').forEach((section , index) => {

	const wrapper = section.querySelector('.wrapper')

	console.log(index)
	console.log(index % 2)


	const [x,xEnd] = index % 2 ? [-(wrapper.scrollWidth), 0] : ['100%',-(wrapper.scrollWidth - innerWidth)]

	console.log([x,xEnd])

				gsap.fromTo(wrapper, {
				x
			},{
				x:xEnd,
				scrollTrigger: {
					trigger : section,
					scrub: 0.5
				}
			})


	// if(even == 0){
	//
	// 	ScrollTrigger.create({
	// 		trigger : section,
	// 		animation :
	// 				gsap.fromTo(wrapper,{
	// 					x : '100%',
	// 				}, {
	// 					x () {
	// 						return -(wrapper.scrollWidth - innerWidth)
	// 					},
	// 				})
	// 		,
	// 		scrub: 1,
	// 	})
	//
	//
	// }else{
	//
	// 	ScrollTrigger.create({
	// 		trigger : section,
	// 		animation :
	// 				gsap.fromTo(wrapper,{
	// 					x () {
	// 						return -(wrapper.scrollWidth - innerWidth)
	// 					},
	// 				}, {
	// 					x : 0
	// 				})
	// 		,
	// 		scrub: 1,
	//
	// 	})
	//
	// }




})