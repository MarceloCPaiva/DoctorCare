window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  backToTopButtonOnScroll()

  activateManuAtCurrentSection(home)
  activateManuAtCurrentSection(services)
  activateManuAtCurrentSection(about)
  activateManuAtCurrentSection(contact)
}

function activateManuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  console.log(
    `O fundo da seção passou da linha ? ${sectionEndPassedTargetLine}`
  )
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopButtonOnScroll() {
  if (scrollY > 450) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content
`)
