const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resultDiv = document.querySelector('#result-div');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = ''; // 確定した(黒の)認識結果

recognition.onresult = (event) => {
  let interimTranscript = ''; // 暫定(灰色)の認識結果
  for (let i = event.resultIndex; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript;stopBtn.disabled=false;
    } else {
      interimTranscript = transcript;stopBtn.disabled=true;
    }
  }
  
  recognition.onsoundend = (event) => {Create(finalTranscript);
  }
  recognition.onstart = (event) => { finalTranscript ="";startBtn.disabled=true;
  }


  recognition.onstop = (event) => { 
  }



}


startBtn.onclick = () => {
  recognition.start();startBtn.disabled=true;
  stopBtn.disabled=true;
}
stopBtn.onclick = () => {
  recognition.stop();startBtn.disabled=false;
  stopBtn.disabled=true;
}