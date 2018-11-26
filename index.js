/*
PSEUDOCODE 

STORE 'tono' with 0
STORE 'budi' with 0
STORE 'anton' with 0

FOR i = 7 to 32 do
  STORE 'member' to empty string
  IF i equals to 7, then
    member += 'Tono, Anton, Budi'
  ELSE
    add 'tono' with 1
    add 'budi' with 1
    add 'anton' with 1
    IF 'tono' equals to 2, then
      'member' += 'Tono, '
      SET 'tono' to 0
    ENDIF
    IF 'budi' equals to 5, then
      'member' += 'Budi, '
      SET 'budi' to 0
    ENDIF
    IF 'anton' equals to 4, then
      'member' += 'Anton, '
      SET 'anton' to 0
    ENDIF
  ENDIF 
  IF i modulo 5 equals to 0, then
    SET 'member' to 'Tempat Fitness Tutup'
  ENDIF
  
  STORE 'memberNew' with member.split(', )
  IF memberNew[memberNew.length - 1].length === 0
    memberNew.splice(memberNew.length - 1, 1)  
    SET 'member' to memberNew.join(', ')
  ENDIF
  PRINT 'Tanggal ' + i + ' ' + member
ENDFOR

*/
var tono = 0
var budi = 0
var anton = 0

for (let i = 7; i <= 31; i++) {
  var member = ''
  if (i === 7) {
    member += 'Tono, Anton, Budi'
  }
  else {
    tono++
    anton++
    budi++
    if (tono === 2) {
      member += 'Tono, '
      tono = 0
    }
    if (budi === 5) {
      member += 'Budi, '
      budi = 0
    }
    if (anton === 4) {
      member += 'Anton, '
      anton = 0
    }
  }
  if (i % 5 === 0) {
    member = 'Tempat Fitness Tutup'
  }

  var memberNew = member.split(', ')
  if (memberNew[memberNew.length - 1].length === 0) {
    memberNew.splice(memberNew.length - 1, 1)  
    member = memberNew.join(', ')
  }
  console.log('Tanggal ' + i + ' ' + member)
}