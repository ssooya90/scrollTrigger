const theme = {
	primary: "#6067f3",
	secondary: "#e8e2da",
};

const keywords = ['Jeju', 'Yang-yang', 'Mokpo', 'Busan']

function heroAnimation() {
	gsap.set('.logo', {
		width: '100%',
		yPercent: -90
	})

	ScrollTrigger.create({
		trigger: '.hero',
		start: 'top top',
		end: 'bottom 20%',
		animation: gsap.to('.logo', {width: '12%', yPercent: 0}),
		markers: true,
		scrub: true
	})

}

function textAnimation() {

	gsap.utils.toArray('.header_text-wrap').forEach((text, index) => {

		const target = text.querySelector('.header_text-move');

		console.log(target)

		ScrollTrigger.create({
			trigger: text,
			start: 'top center',
			end: 'bottom center',
			animation: gsap.fromTo(text, {
				x: index % 2 ? innerWidth : -innerWidth
			}, {
				x: 0
			}),
			scrub: true
		})


	})


}

function maskAnimation () {


  const circleTween = gsap.timeline()
      .to('.circle_element', {
        borderRadius: 0,
        width: innerWidth,
        heroAnimation: innerHeight
      })
      .add(changeTheme(),0)



  ScrollTrigger.create({
    trigger: '.circle_wrap',
    start: 'top top',
    end: '+=2000',
    animation: circleTween,
    pin : true,
    scrub: true
  })

}

function fixedHeader (){

  ScrollTrigger.create({
    trigger: '.nav_container',
    start: 'top top',
    // endTrigger: '.footer',
    // end: 'bottom bottom',
    end : 'max',
    pin : true,
    pinSpacing : false,
  })

}

function changeTheme(themeMode = 'light'){

  const tween = gsap.to('body,.nav_container',
      {
        backgroundColor:themeMode == 'light' ? theme.secondary : theme.primary,
        color:themeMode == 'light' ? theme.primary : theme.secondary
      })

  return tween;

}


function categorieAnimation(){


  const tween = gsap.from('.categories > a',{
    opacity :0,
    filter : 'blur(3px)',
    stagger : {
      each : 0.1
    }
  })

  ScrollTrigger.create({
    trigger: '.catories_container',
    start: 'top top',
    end: '+=2000',
    animation: tween,
    pin : true,
    scrub : true,
  })

}

function gallaryAnimation () {

  ScrollTrigger.create({
    trigger: '.text_container',
    start: 'top top',
    endTrigger : '.image_container',
    end: 'bottom bottom',
    animation : gsap.to('.front_image',{yPercent :-20}),
    pin : true,
    pinSpacing: false,
    scrub : true,
    onUpdate : ({progress}) => {


      const ratio = Math.round(progress * 100)
      let mode = 'light';
      let index = 0;


      if(ratio > 0 && ratio < 25){
        index = 0;
        mode = 'light';
      }else if(ratio >= 25 && ratio < 50){
        index = 1;
        mode = 'dark';

      }else if(ratio >= 50 && ratio < 75){
        mode = 'light';
        index = 2;
      }else if(ratio >= 75 && ratio <= 100){
        index = 3;
        mode = 'dark';
      }

      changeTheme(mode);
      document.querySelector('.text_container span').textContent = keywords[index]


    }
  })


}


heroAnimation();
textAnimation();
maskAnimation();
fixedHeader();
categorieAnimation();
gallaryAnimation();




markers();
