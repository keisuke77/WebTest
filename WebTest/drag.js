



function dragSet(ball){

    ball.onmousedown = function(event) {
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;
      
        ball.style.position = 'absolute';
        document.body.append(ball);
      
        moveAt(event.pageX, event.pageY);
      
        // ボールを（pageX、pageY）座標の中心に置く
        function moveAt(pageX, pageY) {
          ball.style.left = pageX - shiftX + 'px';
          ball.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (3) mousemove でボールを移動する
        document.addEventListener('mousemove', onMouseMove);
      
        // (4) ボールをドロップする。不要なハンドラを削除する
        ball.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          ball.onmouseup = null;
          
        };
      
      };
      
      ball.ondragstart = function() {
        return false;
      };
}



let balls = document.getElementsByClassName('drag');

for (let ball of balls) {
dragSet(ball);
}