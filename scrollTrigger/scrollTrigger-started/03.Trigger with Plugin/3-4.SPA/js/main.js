






function pageLeave(target){

	const tl = gsap.timeline()
			.to('h2',{y:30})
			.to(target,{opacity:0},0)

	return tl;

}

function pageEnter(target){

	const tl = gsap.timeline()
			.from('h2',{y:30})
			.from(target,{opacity:0},0)
}

function home () {
	ScrollTrigger.create({
		trigger : ' .section03',
		start : 'top center',
		end : 'bottom center',
		animation : gsap.to('.box',{x:300}),
		markers : true,
		scrub : true
	})
}

function about () {
	ScrollTrigger.create({
		trigger : ' .section03',
		start : 'top center',
		end : 'bottom center',
		animation : gsap.to('.box',{y:300}),
		markers : true,
		scrub : true
	})
}

function contact () {
	ScrollTrigger.create({
		trigger : ' .section03',
		start : 'top center',
		end : 'bottom center',
		animation : gsap.to('.box',{x:200, rotation:180, y:100}),
		markers : true,
		scrub : true
	})
}


barba.hooks.leave(() => {
	ScrollTrigger.getAll().forEach(t => t.kill());
})

// 모든 DOM 호출 이후
barba.hooks.after(() => {

	scrollbar.update();
	scrollbar.scrollTo(0,0);

	console.log("AFTER")
	markers();

})



barba.init({

	views: [
			{namespace : "home", beforeEnter: () => home()},
			{namespace : "about", beforeEnter: () => about()},
			{namespace : "contact", beforeEnter: () => contact()}
	],

	transitions : [
		{
			name:'opacity-transition',
			leave : (data) => pageLeave(data.current.container),
			enter (data) {
				pageEnter(data.next.container)
			},
			once : () => {
				console.log("로드 됐을 때 딱 한번")
				markers();
			}
		}
	]
})













