/*
STORE 'output' with blank string
STORE 'counterLibur' with 0
STORE 'counterTono' with 0
STORE 'counterAnton' with 0
STORE 'counterBudi' with 0

FOR i = 7 until i < 32
  IF i equals to 7 THEN
    SET 'output' with "Tono, Anton, Budi"
  ELSE
    ADD 'counterLibur' by 1
    ADD 'counterTono' by 1
    ADD 'counterAnton' by 1
    ADD 'counterBudi' by 1

    IF 'counterTono' equals to 2 THEN 
      ADD 'output' with "Tono "
      RESET 'counterTono'
    END IF
    IF 'counterAnton' equals to 4 THEN 
      ADD 'output' with "Anton "
      RESET 'counterAnton'
    END IF
    IF 'counterBudi' equals to 5 THEN 
      ADD 'output' with "Budi "
      RESET 'counterBudi'
    END IF

    IF 'counterLibur' mod 5 equals to 0 THEN
        SET 'output' with "Tempat Fitness Tutup"
        RESET 'counterLibur'
    ELSE
      STORE 'splitOutput' with the result of SPLIT 'output' by ' '
      DELETE the last value of array 'splitOutput' by using POP
      SET 'output' with the result of JOIN 'splitOutput' by ', '
    END IF
  END IF

  DISPLAY "Tanggal " + i + ": " + 'output'

END LOOP
*/

var tono = 0;
var budi = 0;
var libur = 0;
var anton = 0;

for (var i = 7; i < 32; i++) {
  var output = '';
  if (i === 7) {
    output = 'Tono, Budi, Anton';
  } else {
    tono++; budi++; anton++; libur++;
    // console.log('======',output);
    if (tono === 2) {
      output += 'Tono ';
      tono = 0;
    }
    if (budi === 5) {
      output += 'Budi ';
      budi = 0;
    }
    if (anton === 4) {
      output += 'Anton ';
      anton = 0;
    }
    if (i % 5 === 0) {
      output = 'Tempat Fitness Tutup';
      libur = 0;
    } else {
      var splitOutput = output.split(' ');
      splitOutput.pop();
      output = splitOutput.join(', ');
    }
  }
  console.log('Tanggal ' + i + ': ' + output);
}
