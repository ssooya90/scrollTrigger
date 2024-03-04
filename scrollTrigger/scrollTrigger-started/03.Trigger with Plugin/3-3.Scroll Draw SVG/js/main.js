


gsap.defaults({
	ease : 'none',
})

const pulse = gsap.timeline({
	defaults : {
		scale:2,
		autoAlpha: 1,
		transformOrigin : 'center',
		ease : 'elastic(2.5,1'
	}
})
		.to('.ball02,.text01',{},0.77)
		.to('.ball03,.text02',{},1.2)
		.to('.ball04,.text03',{},1.81)

const line = gsap.timeline({})
		.from('.line01',{drawSVG:0},0.84)
		.from('.line02',{drawSVG:0},1.2)
		.from('.line03',{drawSVG:0})
		.from('.line04',{drawSVG:0})


const master = gsap.timeline()
		.to('.ball01',{autoAlpha:1, duration:0.05})
		.from('.path',{drawSVG:0, duration: 4},0)
		.to('.ball01',{
			motionPath: {
				path : '.path',
				align : '.path',
				alignOrigin : [0.5, 0,5]
			},
			duration :4
		},0)
		.add(pulse,0)
		.add(line,0);





ScrollTrigger.create({
	trigger : '#svg',
	start : 'top center',
	end : 'bottom center',
	animation : master,
	scrub : true,
	markers : true,
})


GSDevTools.create()
markers()

