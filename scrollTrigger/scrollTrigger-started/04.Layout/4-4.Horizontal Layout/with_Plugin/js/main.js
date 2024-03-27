




ScrollTrigger.create({

	trigger : '.section02',
	start : 'left center',
	end : 'right center',

	markers : true,
	horizontal : true,

	animation : gsap.to('.box',{rotation:360}),
	scrub : true

})




markers()

