/*
STORE `result` without value
STORE `awal` with 7
STORE `akhir` with 31
STORE `i` with awal
WHILE `i` less than equals `akhir`
  SET `result` with `result` + "Tanggal " + `i` + ": "
  IF `i` modulo 5 equals 0
    SET `result` with result + "Tempat Fitness Tutup"
  ELSE
    IF (`i` - `awal`) modulo 2 equals 0 AND ((`i` - `awal`) modulo 4 equals 0 OR (`i` - `awal`) modulo 5 equals 0)
      SET `result` with result  + "Tono, "
    ELSE IF (`i` - `awal`) modulo 2 equals 0
      SET `result` with result  + "Tono"
    END IF
    IF (`i` - `awal`) modulo 4 equals 0 AND (`i` - `awal`) modulo 5 equals 0
      SET `result` with result  + "Anton, "
    ELSE IF (`i` - `awal`) modulo 4 equals 0
      SET `result` with result  + "Anton"
    END IF
    IF (`i` - `awal`) modulo 5 equals 0
      SET `result` with result  + "Budi"
    END IF
  END IF
  IF `i` not equals `akhir`
    SET `result` with `result` + '\n'
  END IF
END OF WHILE
RETURN `result`

*/

function problemSolving(){
  var result = '';
  var awal = 7;
  var akhir = 31;
  for(var i = awal; i <= akhir; i++){
    result += 'Tanggal ' + i + ': ';
    if(i % 5 === 0){
        result += 'Tempat Fitness Tutup';
    } else {
      if((i - awal) % 2 === 0 && ((i - awal) % 4 === 0 || (i - awal) % 5 === 0)){
        result += 'Tono, ';
      } else if((i - awal) % 2 === 0){
        result += 'Tono';
      }

      if((i - awal) % 4 === 0 && (i - awal) % 5 === 0){
        result += 'Anton, ';
      } else if((i - awal) % 4 === 0){
        result += 'Anton';
      }

      if((i - awal) % 5 === 0){
        result += 'Budi'
      }
    }

    if(i != akhir){
      result += '\n';
    }
  }
  return result;
}
console.log(problemSolving());
