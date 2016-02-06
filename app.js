(function() {
  'use strict';

  var conversionTable = {
    'a1': 'ā',
    'e1': 'ē',
    'i1': 'ī',
    'o1': 'ō',
    'u1': 'ū',
    'ü1': 'ǖ',
    'A1': 'Ā',
    'E1': 'Ē',
    'I1': 'Ī',
    'O1': 'Ō',
    'U1': 'Ū',
    'Ü1': 'Ǖ',
    'a2': 'á',
    'e2': 'é',
    'i2': 'í',
    'o2': 'ó',
    'u2': 'ú',
    'ü2': 'ǘ',
    'A2': 'Á',
    'E2': 'É',
    'I2': 'Í',
    'O2': 'Ó',
    'U2': 'Ú',
    'Ü2': 'Ǘ',
    'a3': 'ǎ',
    'e3': 'ě',
    'i3': 'ǐ',
    'o3': 'ǒ',
    'u3': 'ǔ',
    'ü3': 'ǚ',
    'A3': 'Ǎ',
    'E3': 'Ě',
    'I3': 'Ǐ',
    'O3': 'Ǒ',
    'U3': 'Ǔ',
    'Ü3': 'Ǚ',
    'a4': 'à',
    'e4': 'è',
    'i4': 'ì',
    'o4': 'ò',
    'u4': 'ù',
    'ü4': 'ǜ',
    'A4': 'À',
    'E4': 'È',
    'I4': 'Ì',
    'O4': 'Ò',
    'U4': 'Ù',
    'Ü4': 'Ǜ'
  };

  var input = document.getElementById('pinyinInput');
  var description = document.getElementById('pinyinDescription');

  input.addEventListener('keyup', convertNumberToMark);

  function convertNumberToMark () {
    var conversion = conversionTable[input.value];

    if (conversion) {
      input.value = conversion;
      input.select();
      description.classList.add('hide');
    } else {
      description.classList.remove('hide');
    }
  }


  input.focus();
}());
