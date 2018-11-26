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
        IF i modulus 'tonoPeriode' equals to 0
            DO 'result' equals to 'result' + 'Tono'
        END IF
        IF i modulus 'antonPeriode' equals to 0
            DO 'result' equals to 'result' + 'Anton'
        END IF
        IF i modulus 'budiPeriode' equals to 0
            DO 'result' equals to 'result' + 'Budi'
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



var result =''

//do loop from tanggal 7 sampe 31
for (var i = 7; i < 32; i++){
    result += 'Tanggal '+i+ ': '
    if (i % 5 === 0) {
        result += 'Tempat Fitness Tutup'
    }
    else {
        if ((i - 7 ) % tonoPeriode === 0) {
            result += ' Tono'            
        }
        if ((i - 7 ) % antonPeriode === 0) {
            result += ' Anton'
        }
        if ((i - 7 ) % budiPeriode === 0) {
            result += ' Budi'
        }
    }
    if (i !== 31){
        result += '\n'
    }    
    
}

console.log(result)