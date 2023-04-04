const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '赴命',
        artist: '山猫',
        url: 'http://music.163.com/song/media/outer/url?id=34228736.mp3',
        cover: '',
      },
      {
        name: 'นิทานพันดาว ',
        artist: '千星传说',
        url: 'http://music.163.com/song/media/outer/url?id=1813436237.mp3',
        cover: '',
      }
    ]
});