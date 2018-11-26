/*
PSEUDOCODE FUNCTION GYMDATE
------------------------
STORE "objMember" as Object with "name" and "repDays" as "objMember" keys.
STORE "firstDay" with Number value
STORE "closingDay" with Number value
STORE "member" with '' String value

FOR i = 0 to 31
  IF i mod "closingDay" equals to zero
    DISPLAY 'Tanggal ' + i + ': Tempat Fitness Tutup'
  ELSE IF i equals to "firstDay"
    FOR j = 0 to "objMember" length-1
      "member" add by objMember[j] + ", "
    ENDFOR
    DISPLAY 'Tanggal ' + i + ': '+ ("member" String from 0 to member.length -2)
  ELSE
    FOR j = 0 to "objMember" length-1
      "member" add by objMember[j] + ", "
    ENDFOR
    DISPLAY 'Tanggal ' + i + ': '+ ("member" String from 0 to member.length -2)
ENDFOR
*/
var objMember = [
  { name: 'Tono',
    repDays: 2},
  { name: 'Anton',
    repDays: 4},
  { name: 'Budi',
    repDays: 5},
  ];

//Code
function gymDate(firstDay,objMember,closingDay){
  var member = '';
  for (var i = firstDay; i <= 31; i++) {
    if (i % closingDay === 0){
      console.log('Tanggal '+i+': Tempat Fitness Tutup');
    }
    else if (i === firstDay){
      for (var j = 0; j < objMember.length; j++) {
        member = member + objMember[j].name + ', ';
      }
      console.log('Tanggal '+i+': '+member.substr(0,member.length-2));
      member ='';
    }
    else {
      for (var k = 0; k < objMember.length; k++) {
        if ((i-firstDay) % objMember[k].repDays === 0){
          member = member + objMember[k].name + ', ';
        }
      }
      console.log('Tanggal '+i+': '+member.substr(0,member.length-2));
      member='';
    }
  }
}

gymDate(7,objMember,5);
