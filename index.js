// PSEUDOCODE
/*
STORE `startDay` with value 7
STORE `endDay` with value 31
STORE `tutup` with value 5
STORE `tono` with value 2
STORE `anton` with value 4
STORE `budi` with value 5
STORE `output` with empty string
STORE `days` with `endDay` - `startDay`
STORE `j` with `startDay`

FOR `i` to equals `days`
  STORE `tanggal` to 'Tanggal ' plus string `j` plus ': '
  STORE `member` with empty string
  IF `j` modulus `tutup` equals to 0
    THEN ADD `output` with 'Tempat Fitness Tutup'
  ELSE
    ADD `output` with `tanggal`
    IF `i` modulus `tono` equals to 0
      THEN ADD `member` with 'Tono, '
    IF `i` modulus `anton` equals to 0
      IF length of `member` equals to 0
        THEN ADD `member` with ' Anton'
      ELSE ADD `member` plus by ', Anton'
    IF `i` modulus `budi` equals to 0
      IF length of `member` equals to 0
        THEN ADD `output` with `startDay` + 'Budi, '
      ELSE ADD `member` plus by `, Budi`

    ADD `j` plus by 1
    ADD `output` with `member` plus '\n'
ENDFOR
END PROGRAM
*/


function fitnessDay(startDay, endDay, tutup, tono, anton, budi){
  let output = ''
  let days = endDay - startDay
  let j = startDay

  for (let i = 0 ; i <= days ; i++){

    let tanggal = 'Tanggal ' + j + ':'
    let member = ''

    if (j % tutup === 0){
      output += tanggal + ' Tempat Fitness Tutup'
    } else {

      output += tanggal

      if (i % tono === 0){
        member+= ' Tono'
      }
      if (i % anton === 0){
        if (member.length === 0){
          member+= ' Anton'
        } else {
          member += ', Anton'
        }
      }

      if (i % budi === 0){
        if (member.length === 0){
          member += ' Budi'
        } else {
          member += ', Budi'
        }
      }
    }

    j++
    output += member + '\n'

  }

  return output
}

console.log(fitnessDay(7, 31, 5, 2, 4, 5))
