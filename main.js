window.onload = function() {
  const audio = document.querySelector('audio')
  audio.controls = false
  const buttonPlay = document.querySelector('.buttonPlay')
  const buttonPrev = document.querySelector('.buttonPrev')
  const buttonNext = document.querySelector('.buttonNext')
  const Lista = document.querySelectorAll('source')

  let songIndex = 0;
  let songs = ['01_MeryBlues_ManuChao.mp3', '02_Bixo_ManuChao.mp3', '03_Eldorado1997_ManuChao.mp3']
  console.log(songs)

  
  buttonPlay.onclick = function audioPlayPause() {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }  
  }

  buttonNext.onclick = function audioNext() {
    
    songIndex++
    if (songIndex > 2) {
        songIndex = 0
    }
    audio.src = songs[songIndex]

    audio.play()
  }

   buttonPrev.onclick = function audioPrev() {
    
    songIndex--
    if (songIndex < 0) {
        songIndex = 2
    }
    audio.src = songs[songIndex]

    audio.play()
  }
}