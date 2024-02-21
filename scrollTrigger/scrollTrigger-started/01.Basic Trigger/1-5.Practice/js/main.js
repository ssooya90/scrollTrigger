



gsap.from(".demo-text .text",{
	x () {
		return this.targets()[0].scrollWidth * -1
	},
	scrollTrigger : {
		trigger : '.demo-text',
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

gsap.fromTo(text.querySelector('.text'),{
	x: '100%',
	// x () {
	// 	return this.targets()[0].scrollWidth - innerWidth
	// },
},{
	x () {
		return -(this.targets()[0].scrollWidth - innerWidth)
	},
	scrollTrigger:{
		trigger:text,
		scrub:0.5
	}
})


console.log(`위너위드 ${innerWidth}`)

const tl = gsap.timeline({
	defaults : {
		ease : 'none'
	}
})
		.from('.awsome .text',{x:innerWidth})
		.to('.awsome .text',{scale:50, xPercent:-50})
		.to('body',{duration:0.3, backgroundColor:'black'},'-=0.5')

ScrollTrigger.create({
	trigger : '.awsome',
	pin : true,
	start : 'top top',
	end : '+=3000',
	animation: tl,
	scrub : 0.5
})


const img = gsap.utils.toArray('img')
const loader = document.querySelector('.loader--text')

const updateProgress = (instance) => {
	console.log(instance)
	console.log(instance.progressedCount)
	loader.textContent = `${Math.round(instance.progressedCount * 100 / img.length)}%`
}

imagesLoaded(img)
		.on('progress',updateProgress)
