// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  // load voices into dropdown
  function loadVoices() {
    voices = synth.getVoices();
    document.getElementById('voice-select').innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      document.getElementById('voice-select').appendChild(option);
    }
  }

  loadVoices();
  synth.onvoiceschanged = loadVoices;

  document.querySelector('#explore button').addEventListener('click', function() {
    let text = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(text);

    let selectedIndex = document.getElementById('voice-select').value;
    if (selectedIndex !== 'select') {
      utterance.voice = voices[selectedIndex];
    }

    utterance.onstart = function() {
      document.querySelector('#explore img').src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function() {
      document.querySelector('#explore img').src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}