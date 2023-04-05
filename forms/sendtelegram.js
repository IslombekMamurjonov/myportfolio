//bot token
var telegram_bot_id = "5516343245:AAFwZDMVkYt4Zl1nqsEARzFTIdOjadPbzEM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1396019648; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, telegram, subject, message;
var ready = function() {
    u_name = document.getElementById("fname").value;
    telegram = document.getElementById("link").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelegram: " + telegram + "\nSubject: " + subject + "\nMessage: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("fname").value = "";
    document.getElementById("link").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};

// audio
var audio = document.getElementById("myAudio");
		var toggleButton = document.getElementById("toggleButton");
		var audioIcon = document.getElementById("audioIcon");

		window.addEventListener('load', function() {
			audio.play();
			toggleButton.classList.add("active");
		});

		function toggleAudio() {
			if (audio.paused) {
				audio.play();
				audioIcon.classList.remove("bx-play");
				audioIcon.classList.add("bx-pause");
				toggleButton.classList.add("active");
			} else {
				audio.pause();
				audioIcon.classList.remove("bx-pause");
				audioIcon.classList.add("bx-play");
				toggleButton.classList.remove("active");
			}
		}

		audio.addEventListener('ended', function() {
			audio.currentTime = 0;
			audio.play();
		});

		toggleButton.addEventListener("click", toggleAudio);

    // modal 
    $("#btn").click(function() {

      var name = $("#fname").val();
      var link = $("#link").val()
      var subject = $("#subject").val()
      var msg = $("#message").val()

      if(name == '' || link == '' || subject == '' || msg == '') {
        swal({
          title: "Fields empty!!!",
          text: "Please check the missing field!!!",
          icon: "warning",
          button: "OK!",
        });
      }else {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
      }

  });