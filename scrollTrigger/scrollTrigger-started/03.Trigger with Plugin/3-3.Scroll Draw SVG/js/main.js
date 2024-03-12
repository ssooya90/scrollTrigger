

function drawSVG(element){

	let pathLength;

	if(typeof element !== 'string'){
		throw new TypeError('drawSVG 함수에 전달된 인수는 string 타입 이어야 합니다.');
	}
	if(element.includes(',')){


		const arr = element.split(',').map((target)=>{
			pathLength = document.querySelector(target).getTotalLength();
			gsap.set(target,{
				strokeDashoffset:pathLength,
				strokeDasharray:pathLength
			})
			return pathLength
		})

		console.log(arr)
		return arr;
	}


	pathLength = document.querySelector(element).getTotalLength();

	gsap.set(element,{
		strokeDashoffset:pathLength,
		strokeDasharray:pathLength
	})

	console.log(pathLength)

	return pathLength;

}


drawSVG('.path,.line01,.line02');


// const line = gsap.timeline({
// 	defaults : {
// 		strokeDashoffset : 0,
// 	}
// })
// .to('.line01',{},0.84)
// .to('.line02',{},1.2)
// .to('.line03',{},)
// .to('.line04',{},)

const line = gsap.timeline({
	defaults:{
		strokeDashoffset:0
	}
})
		.to('.line01',{},0.84)
		.to('.line02',{},1.2)
		.to('.line03',{},1.92)
		.to('.line04',{},2.46)
		.to('.line05',{},3.08)


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

// const line = gsap.timeline({})
// 		.from('.line01',{drawSVG:0},0.84)
// 		.from('.line02',{drawSVG:0},1.2)
// 		.from('.line03',{drawSVG:0})
// 		.from('.line04',{drawSVG:0})




const master = gsap.timeline()
		.to('.ball01',{autoAlpha:1,duration:0.05})
		.to('.path',{strokeDashoffset:0,duration:4},0)
		.to('.ball01',{
			motionPath:{
				path:'.path',
				align:'.path',
				alignOrigin: [0.5, 0.5]
			},
			duration:4
		},0)
		.add(pulse,0)
		.add(line,0)


master.eventCallback('onUpdate',function(){
	console.log( this._time );
})



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

