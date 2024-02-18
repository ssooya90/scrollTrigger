







//
// const tl = gsap.timeline()
// 		.to('.layer-bg',{y:-100})
// 		.to('.layer-1',{y:-50},0)
// 		.to('.layer-2',{y:-80},0)
// 		.to('.layer-3',{y:-20},0)
// 		.to('.layer-4',{y(){
// 			return - this.targets()[0].offsetHeight
// 			}, ease : 'none'},0)
// 		.to('.layer-overlay',{y:-60},0)
//
//
// // const tween = gasp.to('.layer-bg',{
// // 	y : -2000,
// //
// // })
//
// ScrollTrigger.create({
// 	trigger : '#hero',
// 	start : 'top top',
// 	end : 'bottom top',
// 	animation : tl,
// 	markers : true,
// 	scrub:true,
//
//
// })

const tl = gsap.timeline({
	scrollTrigger : {
		trigger : '#hero',
		start : 'top top',
		end : 'bottom top',
		markers : true,
		scrub:true,
	}
})

// ScrollTrigger.create({
// 	trigger : '#hero',
// 	start : 'top top',
// 	end : 'bottom top',
// 	animation: tl,
// 	markers : true,
// 	scrub:true,
// })


console.log(gsap.utils.toArray('.parallax').forEach(layer => {
	const depth = layer.dataset.depth;
	console.log(layer.offsetHeight * depth)

	const movement = -(layer.offsetHeight * depth);
	tl.to(layer, {y:movement, ease:'none'},0)


}))