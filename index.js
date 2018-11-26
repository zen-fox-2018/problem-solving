/*
STORE `start` with value 7
STORE `opening` with value 7
STORE `end` with value 31

WHILE `start` LESS THAN OR EQUALS TO `end`
    STORE `event` with empty array
    
    IF `start` MODULO 5 EQUALS TO ZERO THEN
        DISPLAY 'Tanggal' + `start` + ':' + 'Tempat Fitness Tutup'
    ELSE

        IF `i` - `start` MODULO 2 EQUALS TO ZERO
            `member`.push 'Tono'
        IF `i` - `start` MODULO 4 EQUALS TO ZERO
            `member`.push 'Anton'
        IF `i` - `start` MODULO 5 EQUALS TO ZERO
            `member`.push 'Budi'
        
        DISPLAY 'Tanggal ' + `start` + ':' + `member`.join(', ')

ENDWHILE
*/

var start = 7;
var end = 31;

for (var i = start; i <= end; i++) {
  var member = [];

  if (i % 5 === 0) {
    console.log('Tanggal ' + i + ': ' + 'Tempat Fitness Tutup')
  } else {

    if ((i - start) % 2 === 0) {
      member.push('Tono')
    }

    if ((i - start) % 4 === 0) {
      member.push('Anton')
    }

    if ((i - start) % 5 === 0) {
      member.push('Budi')
    }

    console.log('Tanggal ' + i + ': ' + member.join(', '))

  }
}