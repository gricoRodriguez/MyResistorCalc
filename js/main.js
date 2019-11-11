'use strict'
{
  const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white',];
  const color_sel = [0, 0, 0, 0,]
  const bands = ['c0', 'c1', 'c2',];

  function convertToNumber(band_id, span_id){
    const n = color_sel[band_id];
    const pos = document.getElementById(span_id);
    pos.textContent = String(n);
    pos.style.color = colors[n];
    return n;
  }

  function showResult() {
    const prefix = document.getElementById('prefix');
    const a = convertToNumber(0, 'tens');
    const b = convertToNumber(1, 'ones');
    const c = convertToNumber(2, 'exp');
    var d = (a*10 + b) * 10**c;
    if (d >= 1000000) {
      d /= 1000000;
      prefix.textContent = 'M';
    }
    else if (d >= 1000) {
      d /= 1000;
      prefix.textContent = 'k';
    }
    else {
      prefix.textContent = '';
    }
    document.getElementById('value').textContent = String(d);
    document.getElementById('ans').style.textDecoration = 'underline';
    document.getElementById('result').style.display = 'unset';
  }

  let updateAccuracyColor = function() {
    const acc = this.options[this.selectedIndex].value;
    let color = 'moccasin';
    switch (acc) {
      case '5':
        color = 'gold';
        break;
      case '10':
        color = 'silver';
        break;
    }
    document.querySelector('#c3').style.backgroundColor = color;
  }

  window.onload = function () {
    const accuracy = document.getElementById('accuracy');
    accuracy.addEventListener('change', updateAccuracyColor);
  }

  bands.forEach((name, idx) => {
    const l = document.getElementById(name);
    l.addEventListener('click', () => {
      const sel = (color_sel[idx] + 1) % colors.length;
      color_sel[idx] = sel;
      l.style.backgroundColor = colors[sel]
      showResult();
    });
  });

}