

const state = {
	isPlaying : true
}
let currentPageIndex = 1;
const sections = gsap.utils.toArray('.section')

const pages = {

	page01 : {

		enter : () => {

			console.log("enter page01")

		},

		leave : () => {

			console.log("leave page01")


		}

	},

	page02 : {

		enter : () => {

			console.log("enter page02")

		},

		leave : () => {

			console.log("leave page02")


		}

	},

	page03 : {

		enter : () => {

			console.log("enter page03");

			// 한번만 생성해야 함
			// 여러개 생성 시 충돌 및 메모리 누수 발생
			if(!ScrollTrigger.getById('section03')){
				ScrollTrigger.create({
					trigger : '.depth_wrapper',
					start : 'top top',
					end : 'bottom bottom',
					markers : true,
					id:'section03',
					onLeaveBack : () => {

						console.log('leave back')

						transition(2, 'up');

					},

					// 마지막을 찍었을 때
					onLeave : () => {

						console.log('leave')

						transition(4, 'down');
					},
				})

				markers();

			}





		},

		leave : () => {

			console.log("leave page03")


		}

	},

	page04 : {

		enter : () => {

			console.log("enter page04")

		},

		leave : () => {

			console.log("leave page04")


		}

	},

}

function transition(index, direction){

	const {page01, page02, page03, page04} = pages;


	currentPageIndex = index;

	gsap.to('.wrapper',{
		y : -innerHeight * (index - 1),
		duration : 1,
		ease : 'expo.inOut',
		onStart : () => {

			globalLeave();

			switch (direction == 'up' ? index + 1 : index -1) {

				case 1 : page01.leave(); break;
				case 2 : page02.leave(); break;
				case 3 : page03.leave(); break;
				case 4 : page04.leave(); break;
			}

		},
		onComplete : () => {
			state.isPlaying = true;

			globalEnter();

			switch (index) {

				case 1 : page01.enter(); break;
				case 2 : page02.enter(); break;
				case 3 : page03.enter(); break;
				case 4 : page04.enter(); break;
			}
		}


	})

}

function handleWheel(e){

	let direction = e.deltaY < 0 ? 'up' : 'down'

	console.log(currentPageIndex)

	if(state.isPlaying){

		state.isPlaying = false;

		if(currentPageIndex == 3) return;


		if(direction == 'up'){

			if(currentPageIndex <= 1) return;
			--currentPageIndex

		}else{

			if(currentPageIndex >= sections.length) return;
			++currentPageIndex

		}


		transition(currentPageIndex, direction);


	}







}

container.addEventListener('wheel',handleWheel)


function globalEnter(){
	// console.log('globalEnter');
	gsap.to('h2',{opacity:1,y:0})
}

function globalLeave(){
	// console.log('globalLeave');
	gsap.to('h2',{opacity:0,y:30})
}

markers()

