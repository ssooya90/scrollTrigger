



gsap.from(".demo-text .text",{
	x () {
		return this.targets()[0].scrollWidth * -1
	},
	scrollTrigger : {
		trigger : '.demo-text',
		markers : true,
		scrub: 1,
	}
})

gsap.utils.toArray('.demo-gallery').forEach((section, index) => {

	console.log(section.querySelector('.wrapper'))
	let wrapper = section.querySelector('.wrapper');


	const [x, xEnd] = index % 2 ? [-(wrapper.scrollWidth), '0'] : ['100%', -(wrapper.scrollWidth - innerWidth)]

	let tween = gsap.fromTo(wrapper,
			{x},
			{x : xEnd}
	)

	ScrollTrigger.create({
		trigger : section,
		animation : tween,
		scrub:1
	})


})


const text = document.querySelectorAll('.demo-text')[1]
console.log(text)

gsap.from(text.querySelector('.text'),{
	x () {
		return this.targets()[0].scrollWidth - innerWidth
	},
	scrollTrigger : {
		trigger : text,
		markers : true,
		scrub: 1,
	}
})