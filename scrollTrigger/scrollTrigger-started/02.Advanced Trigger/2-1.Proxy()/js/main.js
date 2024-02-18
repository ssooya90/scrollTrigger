gsap.registerPlugin(ScrollTrigger);




//
//
//
//
//
// const container = document.querySelector('#container')
// const deep = document.querySelector('.deep')



const options = {
	damping : 0.1,
	alwaysShowTracks : true
}

// const scrollbar = Scrollbar.init(container, {...options});
// const deepScrollbar = Scrollbar.init(deep,{...options});

const scrollElement = [
	{
		target : document.querySelector('#container'),
		scrollName : null,
		marker : 'main'
	},
	{
		target : document.querySelector('.deep'),
		scrollName : null,
		marker : 'deep'
	}
]

ScrollTrigger.scrollerProxy(container,{scrollTop(value){
		if(arguments.length){
			scrollbar.scrollTop = value; // setter
		}
		return scrollbar.scrollTop; // getter
	}
})

scrollElement.forEach((elem)=>{
	console.log(elem)

	elem.scrollName = Scrollbar.init(elem.target , { ...options})

	console.log(elem.scrollName)

	ScrollTrigger.scrollerProxy(elem.target,{
		scrollTop(value){
			if(arguments.length){
				elem.scrollName.scrollTop = value; // setter
			}
			return elem.scrollName.scrollTop; // getter
		}
	})

	elem.scrollName.addListener(ScrollTrigger.update)

})

//
// scrollbar.addListener(ScrollTrigger.update)
// deepScrollbar.addListener(ScrollTrigger.update)

// ScrollTrigger.defaults({
// 			scroller : container
// 		}
// )


ScrollTrigger.create({
	trigger : '.section02',
	start : 'top center',
	end : 'bottom center',
	scroller:scrollElement[0].target,
	animation : gsap.to('.section02 h2',{x:500}),
	scrub : true,
	markers : true,
	id:scrollElement[0].marker,
})


ScrollTrigger.create({
	trigger : '.d2',
	start : 'top center',
	end : 'bottom center',
	scroller:scrollElement[1].target,
	animation : gsap.to('.text',{x:200}),
	markers : true,
	scrub : true,
	id:scrollElement[1].marker
})



scrollElement.forEach((elem)=>{

if(document.querySelector('.gsap-marker-scroller-start')){
	const markers = gsap.utils.toArray(`[class *= "marker-${elem.marker}"]`);
	// console.log(markers)

	elem.scrollName.addListener(({offset}) => {
		gsap.set(markers,{marginTop : -offset.y})
	})
}




})


console.log(document.querySelector('.gsap-marker-scroller-start'))

// if(document.querySelector('.gsap-marker-scroller-start')){
// 	const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
// 	// console.log(markers)
//
// 	scrollbar.addListener(({offset}) => {
// 		gsap.set(markers,{marginTop : -offset.y})
// 	})
// }