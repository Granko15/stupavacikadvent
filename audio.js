var hudba = {

  subory: ['jingle_bells_sms.mp3', 'jingle_bells_sms-1.mp3'],

  audio: null,

  togglePause: function() {
    if (hudba.audio.paused) {
      hudba.audio.play();
    } else {
      hudba.audio.pause();
    }
	},

	start: function() {
//    hudba.audio = new Audio('jingle_bells_sms.mp3');
    i = Math.round(Math.random() * 1)
    hudba.audio = new Audio(this.subory[i]);
    hudba.audio.play();
	}

};
