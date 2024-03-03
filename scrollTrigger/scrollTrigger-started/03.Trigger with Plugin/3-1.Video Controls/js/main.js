

// gsap.to('.box',{
// 	x:500,
// 	duration:3,
//
// 	snap:{ // 증가분 설정
// 		x: [0,50,150,500],
// 	}
// })
//




// const value = {
// 	number : 0
// }

// const test = [1,2,3]

//
// gsap.to(value,{
// 	number : frameCount,
// 	duration : 3,
// 	ease : 'none',
// 	snap : 'number', // 정수로 활용
// 	onUpdate : () => {
// 		console.log("넘버" + value.number)
//
// 		console.log()
//
// 	}
// })





const frameCount = 141;


const video = document.querySelector('#video');
const canvs = document.querySelector('#canvas')
const ctx = canvs.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight;


const videoSection = {
	frame : 0
}

// const images = [];

// for(let i = 0; i < frameCount; i++){
// 	const img = new Image();
// 	img.src = currentFrame(1);
//
// 	images.push(img);
// }

const currentFrame = (index) => {
	index = (index+1).toString().padStart(3,'0');
	return `./assets/frames/ezgif-frame-${index}.jpg`
}


const images = Array(frameCount).fill(null).map((_,i)=>{
	const img = new Image();
	img.src = currentFrame(i);
	return img
})


const tl = gsap.timeline()
		.to(videoSection,{
			frame : frameCount - 1, // 배열을 0부터 가져와야 해서 -1을 함,
			snap : 'frame',
			ease : 'none',
			onUpdate : () => {
				// console.log(videoSection.frame)
				// console.log(`프레임 카운터 ${frameCount}`)

			}
		})
		// .to('#canvas',{filter : 'brightness(2)'},0)


ScrollTrigger.create({
	trigger : '.section02',
	start : 'top top',
	end : '+=3000',
	animation : tl,
	pin : true,
	scrub:  true,
	onUpdate : render,

})

function render (){

	console.log(videoSection.frame)

	ctx.drawImage(images[videoSection.frame],0,0); // 왼쪽 위
}

// gsap.to(videoSection, {
// 	frame : frameCount - 1,
// 	snap : 'frame',
// 	ease : 'none',
// 	scrollTrigger : {
// 		trigger : '.section02',
// 		start : 'top top',
// 		pin : true,
// 		endpoint : "+=3000",
// 		scrub:true,
// 		onUpdate : () =>{
// 			console.log(videoSection.frame)
// 			render();
// 		}
// 	}
// })



images[0].onload = render

// ScrollTrigger.create({
// 	trigger : '.section03',
// 	start : 'top center',
// 	end : 'bottom center',
// 	markers : true,
// 	onToggle : ({isActive}) => {
// 		console.log(isActive)
// 		isActive ? video.play() : video.pause();
// 	}
// })


markers()