

const markers = () => {

  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');


    const scrollMakers = markers.filter((m) => m.className.includes('scroller'))

    console.log(scrollMakers)


    // const arr = [];
    // markers.forEach((m) => {
    //
    //   if(m.className.includes('scroller')){
    //     arr.push(m)
    //   }
    // })

    // console.log(arr)

    scrollbar.addListener(({ offset }) => {
      // gsap.set(markers, { marginTop: -offset.y });
      gsap.set(scrollMakers, { marginLeft: -offset.y });
    });
  }
}




const arr = ['hi-sim','hi-beom','hello-sim','hi-tiger','hello-tiger']

console.log(arr)

// forEach : 배열을 순환하는 메서드 - > 반환값이 없음
// filter : 배열을 순환하는 메서드 -> 반환값이 배열
// filter : 배열을 순환하는 메서드 -> 반환값이 배열


const newArr = []
arr.forEach( (str) => {
  if((str.includes('hi'))){
    newArr.push(str);
  }
})


// 참만 배열로 만듬
const filter = arr.filter((str) => {

  return str.includes('hi');

})

console.log(filter)





