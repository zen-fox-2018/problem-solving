/**
pseudocode
STORE 'tonoPeriode' with value 2
STORE 'antonPeriode' with value 4
STORE 'budiPeriode' with value 5

STORE 'dateOpenStart' with value 7

STORE 'result' with empty string

FOR 'i' EQUALS to 'dateOpenStart' TO 'i' less than 32
    'result' equals to 'result' + 'tanggal ' + i
    IF i modulus 5 equals to 0 
        DO 'result' equals to 'result' + 'Tempat Fitness Tutup'
    ELSE
        STORE 'gymArray' with empty array
        IF i-dateOpenStart modulus 'tonoPeriode' equals to 0
            DO push 'Tono' to 'gymArray'
        END IF
        IF i-dateOpenStart modulus 'antonPeriode' equals to 0
            DO push 'Anton' to 'gymArray'
        END IF
        IF i-dateOpenStart modulus 'budiPeriode' equals to 0
            DO push 'Budi' to 'gymArray'
        'result' equals to 'result' + 'gymArray'.join(', ')
        END IF
    END IF
    IF i not equals to 31
        DO 'result' equalst to 'result' + '\n'
    END IF
END FOR
    
 */


var tonoPeriode = 2
var antonPeriode = 4
var budiPeriode = 5

var dateOpenStart = 7


var result =''

//do loop from tanggal 7 sampe 31
for (var i = dateOpenStart; i < 32; i++){
    result += 'Tanggal '+i+ ': '
    if (i % 5 === 0) {
        result += 'Tempat Fitness Tutup'
    }
    else {
        var gymArray = []
        if ((i - dateOpenStart ) % tonoPeriode === 0) {
            gymArray.push('Tono')
        }
        if ((i - dateOpenStart ) % antonPeriode === 0) {
            gymArray.push('Anton')
        }
        if ((i - dateOpenStart ) % budiPeriode === 0) {
            gymArray.push('Budi')
        }
        result += gymArray.join(', ')
    }
   
    if (i !== 31){
        result += '\n'
    }
        
}

console.log(result)