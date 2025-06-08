
  window.onload = function () {
    const myAudio = new Audio('U.mp3');
    myAudio.loop = true;

    // พยายามเล่นเมื่อผู้ใช้โต้ตอบ (สำคัญสำหรับ Chrome/Safari)
    document.body.addEventListener('click', function () {
      myAudio.play().catch(function(error) {
        console.log('ไม่สามารถเล่นเสียงได้: ', error);
      });
    }, { once: true }); // ให้คลิกครั้งเดียวพอ

    // หรือถ้าเบราว์เซอร์อนุญาต autoplay
    myAudio.play().catch(function (e) {
      console.log('เบราว์เซอร์บล็อก autoplay จนกว่าจะคลิก');
    });
  };

$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

 
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
