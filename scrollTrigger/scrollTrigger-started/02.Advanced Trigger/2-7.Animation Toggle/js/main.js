// ScrollTrigger.create({
// 	trigger : '.scroll-content',
// 	start : 'top top',
// 	end : 'bottom bottom',
// 	animation : gsap.from('.progress',{scaleY:0,transformOrigin:'center top', ease :'none'}),
// 	scrub:true,
// })
//
// markers();
//
//
//
//
//
// ScrollTrigger.create({
// 	trigger : '.section02',
// 	start : 'top center',
// 	end : 'bottom center',
// 	animation : gsap.to('.section02',{
// 		backgroundColor : 'black'
// 	}),
// 	markers : true,
// 	// toggleActions : 'restart reverse restart reverse'
// 	onToggle : (self) => {
// 		console.log(self)
//
// 	}
//
// })
//
// gsap.utils.toArray('.section').forEach((section, index) => {
//
//
// 	const lnbAnimation = gsap.timeline()
// 			.to(`.lnb li:nth-child(${index +1 }) .dot`,{scale : 2,})
// 			.to(`.lnb li:nth-child(${index + 1}) span`,{
// 				opacity:1,
// 				x:40,
// 				// color : () => {
// 				// 	if(index == 1){
// 				// 		return 'white'
// 				//
// 				// 	}
// 				// }
// 				color : index == 1 && 'white'
//
// 			},0)
//
// 	ScrollTrigger.create({
// 		trigger : section,
// 		start : 'top center',
// 		end : 'bottom center',
// 		animation : lnbAnimation,
// 		// markers : true,
// 		toggleActions : 'restart reverse restart reverse'
// 	})
//
// })
//
//
//
//


ScrollTrigger.create({
	trigger: '.section02',
	start: 'top center',
	end: 'bottom center',
	// animation : gsap.to('.section02',{
	// 	backgroundColor : 'black'
	// }),
	markers : true,
	// toggleActions : 'restart reverse restart reverse'
	onToggle : ({isActive, animation}) => {

		// animation.reversed(true); // 리버스 하라구!

		gsap.to('.section02' , {backgroundColor : isActive ? 'black' : 'white'})

		// if(isActive){
		// 	animation.reversed(false);
		// }else{
		// 	animation.reversed(true);
		// }





	}

})



markers();