var tono = 2
var anton = 4
var budi = 5
var libur = 5

var buka = 7
var akhir = 31 - buka

for (let i = 0; i <= akhir; i++) {

    var member = []

    if (i == 0) {
        member.push('Tono, Anton, Budi')
        console.log('Tanggal ' + buka + ': ' + member);
    } else if (buka % libur == 0) {
        console.log('Tanggal ' + buka + ': Tempat Fitness Tutup');
    } else {
        if (i % tono == 0) {
            member.push('Tono')
        }

        if (i % anton == 0) {
            member.push('Anton')
        }

        if (i % budi == 0) {
            member.push('Budi')
        }

        if (member.length == 0) {
            console.log('Tanggal ' + buka + ': ')
        } else {
            console.log('Tanggal ' + buka + ': ' + member.join(', '));
        }
    }
    buka++
}

/**
 #PSEUDOCODE
 STORE 'tono' to 2
 STORE 'anton' to 4
 STORE 'budi' to 5
 STORE 'libur' to 5
 STORE 'buka' to 7
 STORE 'akhir' to 31 reduce 'buka'
 
     WHILE 'i' <= 'akhir'
         STORE 'member' to []
 
         IF 'i' == 0
             PUSH 'Tono, Anton, Budi' to 'member'
             DISPLAY "Tanggal " + 'buka' + ": " + 'member'
         ELSE IF 'buka' mod 'libur' == 0
             DISPLAY "Tanggal " + 'buka' + ": Tempat Fitness Tutup"
         ELSE 
             IF 'i' mod 'tono' == 0
                 PUSH 'Tono' to 'member'
             IF 'i' mod 'anton' == 0
                 PUSH 'Anton' to 'member'
             IF 'i' mod 'budi' == 0
                 PUSH 'Budi' to 'member'
 
             IF length of 'member' == 0
                 DISPLAY "Tanggal " + 'buka' + ": "
             ELSE
                 DISPLAY "Tanggal " + 'buka' + ": " + JOIN 'member' with ","
     ADD 'buka' with 1
 */