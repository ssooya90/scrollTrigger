



const h2 = document.querySelector('.section02 h2');



gsap.to(h2,{
  x : 200,
  scrollTrigger : {
    trigger : '.section02',
    start : '20% center',
    end : '80% center',
    markers : true,
    scrub : true,
    // onEnter : (e) => {
    //   console.log('enter');
    //   h2.textContent = 'enter';
    // }, onLeave : (e) => {
    //   console.log('leave')
    //   h2.textContent = 'Leave';
    //
    // }, onEnterBack : (e) => {
    //   console.log('enterBack')
    //   h2.textContent = 'EnterBack';
    // }, onLeaveBack : (e) => {
    //   console.log('leaveBack')
    //   h2.textContent = 'leaveBack';
    // },

    onToggle : (e) => {
      console.log('toggle!')
      console.log(e.direction)

      if(e.direction == 1){

        h2.style.color = 'red'
      }else{
        h2.style.color = 'blue'

      }
      // console.log(direction)
    },

    onRefresh : () => {
      console.log("refresh")
    },

    onUpdate : (e) => {

      const progress = e.progress;

      let percentage = Math.round(progress * 100);

      h2.textContent = `${percentage}%`





    }
  }

})


markers()
