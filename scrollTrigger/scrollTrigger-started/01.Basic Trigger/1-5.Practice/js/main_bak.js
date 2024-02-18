
//
//
// ScrollTrigger.create({
// 	trigger : '.demo-text',
// 	// start : 'top bottom',
// 	// end : 'bottom center',
// 	// markers : true,
// 	scrub : true,
// 	// animation : gsap.fromTo('.wrapper.text',{
// 	// 	x:'100%'
// 	// }, {
// 	// 	x () {
// 	// 		return -(this.targets()[0].scrollWidth - innerWidth);
// 	//
// 	// 	}
// 	// })
//
// 	animation : gsap.fromTo('.wrapper.text',{
// 		x () {
// 			return -(this.targets()[0].scrollWidth - innerWidth);
// 		}
// 	}, {
// 		x : 0
// 	})
// })

const showDemo = () => {

	gsap.to('.loader',{autoAlpha:0});
	document.body.style.overflow = 'auto',
	document.scrollingElement.scrollTo(0,0)

	gsap.utils.toArray('section').forEach((section, index) => {
		console.log(section)

		const w = section.querySelector('.wrapper');

		if(w){

			const [x,xEnd] = index % 2 ? ['100%',-(w.scrollWidth - innerWidth)] : [-(w.scrollWidth - innerWidth), 0]

			gsap.fromTo(w, {
				x
			},{
				x:xEnd,
				scrollTrigger: {
					trigger : section,
					scrub: 0.5
				}
			})


		}
	})

}



const awsome = () => {

	const tl = gsap.timeline({
		defaults : {
			ease : 'none',
		}
	})
		.from('.awsome .text',{
		x : innerWidth})
			.to('.awsome .text',{
				scale : 50
				, xPercent : -200
			})
			.to('body',{
				backgroundColor:'black'
				, duration : 0.3
			},'-=0.5')


	// const tween = gsap.from('.awsome .text',{
	// 	x : innerWidth
	// })

	ScrollTrigger.create({
		trigger : '.awsome',
		start : 'top top',
		end : '+=3000',
		pin : true,
		// markers : true,
		scrub : 1,
		animation: tl,

	})

}


const tryNow = () => {

	ScrollTrigger.create({
		trigger : '.try',
		start : 'top top',
		end : '+=2000',
		pin : true,
		markers : true,
		// scrub : 1,
		// animation: tl,

		animation : gsap.from('.try .text',{y:50, opacity:0}),
		scrub : true,

	})

}


function init(){
	showDemo();
	awsome();
	tryNow();
}


// const img = gsap.utils.toArray('img')
const img = Array.from(document.querySelectorAll('img'))
const loader = document.querySelector('.loader--text');

const updateProgress = (instance, test) => {
	loader.textContent = `${Math.round(instance.progressedCount * 100 / img.length)}%`
}

imagesLoaded(img)
		.on('progress',updateProgress)
		.on('always',init)

