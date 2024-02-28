



ScrollTrigger.create({
	trigger : '.demo-text',
	start : 'bottom bottom',
	end : 'bottom top',
	animation : gsap.from('.demo-text .text',{
		x () {
			return -(this.targets()[0].scrollWidth)
		},
	}),
	scrub : 1,
	markers : true
})