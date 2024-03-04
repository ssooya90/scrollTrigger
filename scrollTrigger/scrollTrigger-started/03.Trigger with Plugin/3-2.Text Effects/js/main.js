

let split

function init() {

	split = new SplitText('p',{type : 'lines'})
	const splitCover = new SplitText('p',{type : 'lines' , linesClass:'cover'})

	split.lines.forEach((line, index)=>{

		ScrollTrigger.create({
			trigger : splitCover.lines[index],
			start : 'top 90%',
			end : 'bottom center',
			animation : gsap.from(line,
					{
						opacity:0,
						filter:'blur(10px)',
						y:300,
						transformOrigin: '50% 50% -50%',
						rotateX :-180
					}
			),
			markers : true,
			scrub : true,

		})
	})

	markers();

}


const debounce = (callback, time = 500) => {

	let timeOut;

	// 클로저 형태
	return function (...args){
		clearTimeout(timeOut)
		timeOut = setTimeout( () => {
			callback.apply(this, args);
		} , time)
	}





}

// 이벤트가 끝나는 시점에 한번만 실행되도록
debounce( () => {
	console.log('hi')
},2000)

// const id = setTimeout(() => {
// 	console.log("hi")
// }, 5000)
//
// clearTimeout(3);


function killAll(){
	split.revert();
	ScrollTrigger.getAll().forEach((item) => {
		item.kill
	});
	init();
}


window.addEventListener('load',init);
window.addEventListener('resize',debounce(killAll))








