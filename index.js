// share screen

// function streamVideo(){
//   let video = document.querySelector('video')
//   let option = {video:true}
//   navigator.mediaDevices.getDisplayMedia(option)
//   .then(stream=>video.srcObject=stream)
//   .catch(err=>console.log("error"))
// }

// camera on

function streamVideo(){
  let video = document.querySelector('video')
  let option = {video:true}
  navigator.mediaDevices.getUserMedia(option)
  .then(stream=>video.srcObject=stream)
  .catch(err=>console.log("error"))
}