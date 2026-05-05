// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  // set default volume on load
  document.querySelector('audio').volume = document.getElementById('volume').value / 100;

  // horn selection
  document.getElementById('horn-select').addEventListener('change', function() {
    let horn = document.getElementById('horn-select').value;
    document.querySelector('#expose img').src = 'assets/images/' + horn + '.svg';
    document.querySelector('audio').src = 'assets/audio/' + horn + '.mp3';
  });

  // volume slider
  document.getElementById('volume').addEventListener('input', function() {
    let vol = parseInt(document.getElementById('volume').value);
    document.querySelector('audio').volume = vol / 100;

    if (vol === 0) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-2.svg';
    } else {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-3.svg';
    }
  });

  // play button
  document.querySelector('button').addEventListener('click', function() {
    document.querySelector('audio').play();
    if (document.getElementById('horn-select').value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}