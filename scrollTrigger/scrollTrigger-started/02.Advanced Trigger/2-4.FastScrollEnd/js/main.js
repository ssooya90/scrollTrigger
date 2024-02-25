



const gotoTop = gsap.timeline()
		.to('.goToTop img',{y:0, opacity:1, ease:'back(3)'})
		.to('.gotoTop a',{y:0, opacity: 1, ease : 'back(3)'},'-=0.3')


ScrollTrigger.create({
	trigger : '.scroll-content',
	start : '75% center',
	end : 'bottom center',
	animation : gotoTop,
	pin : false,
	markers : true,
	//                 E    L   EB    LB
	toggleActions : 'play none none reverse'
})







markers()