const times = document.querySelector('#times')
const likeIt = document.querySelector('.likeIt')

let clickTime = 0

likeIt.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const y = e.clientY
  const x = e.clientX

  const topOffset = e.target.offsetTop
  const leftOffset = e.target.offsetLeft

  const yInside = y - topOffset
  const xInside = x - leftOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  likeIt.appendChild(heart)

  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 2000)
}
