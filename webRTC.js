let videoElement;
navigator.mediaDevices.getUserMedia({
	audio:true,
	video:true
}).then(stream=>{
	videoElement=document.createElement('video');
	videoElement.srcObject=stream;
	videoElement.muted=true;
	videoElement.play();
	let content=document.querySelector('#content');
	content.appendChild(videoElement);
}
);
