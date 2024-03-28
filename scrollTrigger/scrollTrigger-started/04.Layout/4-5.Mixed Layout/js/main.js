


gsap.defaults({
	ease : 'none'
})


const sections = gsap.utils.toArray('.horizontal .section');

const end = document.querySelector('.last').getBoundingClientRect().left;

console.log(end)



const tween = gsap.to(sections,{
	x : () => {
		const wrapper = document.querySelector('.horizontal');

		return -(wrapper.offsetWidth - innerWidth)

	}}
)


ScrollTrigger.create({
	trigger : '.section02',
	start : 'top top',
	end : '+=3000',
	animation : tween,
	pin : true,
	scrub : true,
})


const boxEnd = gsap.getProperty('.h-section02' , 'width');
const boxWidth = gsap.getProperty('.box' , 'width');

console.log(boxEnd)


ScrollTrigger.create({
	trigger : '.h-section02',
	horizontal : true,
	start : 'left left',
	// end : 'right center',
	end : `+=${boxEnd - boxWidth}`,
	markers : true,
	animation : gsap.to('.box',{
		x : (_,t) => {
			return boxEnd - t.offsetWidth

		},
		// rotate : 360
	}
	),
	// pin : true,
	scrub : true,
	containerAnimation : tween
})




markers();
