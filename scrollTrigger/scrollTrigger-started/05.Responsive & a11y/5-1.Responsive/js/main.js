













const box = document.querySelector('.box');


// gsap.to(box,{
// 	x:'100vw',
// 	xPercent:-100,
// 	yoyo : true,
// 	repeat : -1, // 무한반복
// 	duration : 2,
// 	ease : 'power3.inOut',
// })


/*
mm.add("(max-width:500px)", (context) => {

	// context.spin2 = function Tiger () {
	// 	return 'tiger';
	// }

	context.add('spin',() => {
		gsap.to(box,{
			rotation: 360,
			duration : 2,
			repeat : -1,
			ease : 'none'
		})
	})

	box.addEventListener('click',context.spin)


	// 클린업
	return () => {
		box.removeEventListener('click',context.spin)
		console.log('clean up')

	}


})
*/


// mm.add("(min-width:501px)", () => {
// 	gsap.to(box,{
// 		rotation: -360,
// 		duration : 2,
// 	})
// })


const options = {
	isMobile : '(max-width:500px)',
	isDesktop : '(min-width:501px)'
}

//
// mm.add(options,(ctx)=>{
// 	console.log(ctx)
//
// 	const {isMobile,isDesktop} = ctx.conditions;
//
// 	gsap.to(box,{
// 		rotation: () => {
//
// 			if(isMobile){
// 				return 360
// 			}else{
// 				return -360
// 			}
// 		},
// 		duration : 2,
// 		ease : 'none',
// 	})
//
//
// })

const wrapper = document.querySelector('.wrapper');
const mm = gsap.matchMedia(wrapper); // 매개변수를 넣으면 디폴트 스포크, 안넣으면 스포크 없음


mm.add(options,(ctx)=>{
	console.log(ctx)

	const {isMobile,isDesktop} = ctx.conditions;

	gsap.to('.green',{
		rotation: () => {

			if(isMobile){
				return 360
			}else{
				return -360
			}
		},
		duration : 2,
		ease : 'none',
	})


})
// 3번째 인자는 해당 스코프 내에서만 작동