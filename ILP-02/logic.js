const bodyContainer = document.querySelector('body');

const notification = (message, time) => {
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.innerText = message;

  bodyContainer.append(notif);

  setTimeout(() => {
    notif.style.opacity = '1';
    setTimeout(() => {
      notif.style.opacity = '0';
    }, time);
  }, time / 3);
}

const anim = document.querySelector('#anim').animate([
  { transform: "scale(1,1)" },
  { transform: "scale(5,5)" },
  { transform: "scale(10,10)" },
  { transform: "scale(5,5)" },
  { transform: "scale(1,1)" },
  { transform: "translateX(500px)" },
  { transform: "translateX(-500px)" }
], {
  duration: 5000,
  iterations: 30
})

document.querySelector('#play').addEventListener('click', () => {
  anim.play();
  notification('Animation Started', 2000);
})


document.querySelector('#pause').addEventListener('click', () => {
  anim.pause();
  notification('Animation Paused', 2000);
})

document.querySelector('#cancel').addEventListener('click', () => {
  anim.cancel();
})

document.querySelector('#finish').addEventListener('click', () => {
  anim.finish();

})

document.querySelector('#reverse').addEventListener('click', () => {
  anim.reverse();
  notification('Animation Reversed', 2000);
})

anim.oncancel = () => {
  notification('Animation Canceled', 2000);
}

anim.onfinish = () => {
  notification('Animation Finished', 2000);
}