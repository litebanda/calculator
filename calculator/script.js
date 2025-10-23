const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = 'Error';
  }
}

// Optional: Allow keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[\d+\-*/.%]/.test(key)) append(key);
  else if (key === 'Enter') calculate();
  else if (key === 'Backspace') backspace();
  else if (key === 'Escape') clearDisplay();
});
