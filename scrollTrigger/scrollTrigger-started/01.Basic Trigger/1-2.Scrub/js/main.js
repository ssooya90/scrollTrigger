


// console.log(innerWidth)
//
//
// const textTween = gsap.to('.textContainer',{
// 	// x : -(document.querySelector('.textContainer').offsetWidth - window.innerWidth),
// 	// x : -500,
//
// 	x(){
// 		// console.log("ASDF")
// 		// console.log($(this.targets()))
// 		console.log(this.targets())
// 		return -(document.querySelector('.textContainer').offsetWidth - window.innerWidth)
// 	},
// })
//
// // 즉 뷰포트가 트리거 지점을 넘었을 때 스크롤 이벤트가 발생함
//
//
// ScrollTrigger.create({
// 		trigger : '.demo-text',
// 		start : '20% center', // 첫번째 인자 : 트리커 시작점, 두번재 인자 : 뷰포트 시작점
// 		end : '80% center',
// 		// scrub : true, // 애니메이션의 progress 지정
// 		scrub : 1, // 기본값 0.5
// 	animation : textTween
//
// })
//
//
//
// const imgTween = gsap.from('.imageContainer',{
// 	// x : -500,
// 	x () {
// 		return - (this.targets()[0].offsetWidth - innerWidth)
// 	}
// })
//
// ScrollTrigger.create({
// 	trigger : '.demo-image',
// 	start : '20% center',
// 	end : ' 80% center',
// 	scrub : 1,
// 	markers : true,
// 	animation: imgTween,
// })


gsap.utils.toArray('.section').forEach((section, index)=>{

	const w = section.querySelector('.wrapper')

	if(w){

		let [x, xEnd] = index % 2 ? ['0', (w.offsetWidth - innerWidth) * -1] : [(w.offsetWidth - innerWidth) * -1 , 0]

		console.log([x, xEnd])

		//

		// shorthand property
		// x : x 일 떄 x로 사용 가능

		gsap.fromTo(w,{x},{
			x:xEnd,
			scrollTrigger : {
				trigger : section,
				scrub : 1,
				start : '20% center',
				end : '80% center',
				markers : true,
			}
		})
	}


})

const getArea = ({ width, height = width }) => {
	return width * height;
};

console.log(getArea({ width: 10 }));


function generateObject(name, age, gender){

	// 변수와 키값이 동일할 때 생략할 수 있음

	// return {
	// 	name : name,
	// 	age : age,
	// 	gender : gender,
	// }

	// 이게 Object shorthand property
	return {
		name,
		age,
		gender,
	}
}

const person1 = generateObject('범쌤',36,'male');

console.log(person1)