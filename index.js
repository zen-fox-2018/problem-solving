/*
PSEUDOCODE
STORE 'tono' with 7
STORE 'anton' with 7
STORE 'budi' with 7
STORE 'result' with an empty string

FOR each value of 'i' from 7 until 31
    ADD result with "Tanggal " AND 'i' AND ": "
    STORE 'customers' with an empty string

    IF 'i' is equal to 7
        ADD 'result' with "Tono, Anton, Budi" 
    ELSE IF 'i' modulus 5 is equal to 0
        ADD 'result' with "Tempat fitness tutup"
    ENDIF

    IF 'i' is equal to 'tono' plus 2
        ADD 'result' with "Tono"
        SET 'tono' to 'i'
    ENDIF

    IF 'i' is equal to 'anton' plus 4
        IF 'customers' length is not equal to 0
            ADD 'customers' with ", "
        ENDIF
        ADD 'result' with "Anton"
        SET 'anton' to 'i'
    ENDIF

    IF 'i' is equal to 'budi' plus 5
        IF 'customers' length is not equal to 0
            ADD 'customers' with ", "
        ENDIF
        ADD 'result' with "Budi"
        SET 'budi' with 'i'
    ENDIF

    IF 'i' modulus 5 is not equal to 0
        ADD 'result' with 'customers' 
        IF 'i' is not equal to 31
            ADD result with new line
        ENDIF
    ELSE
        IF 'i' is not equal to 31
            ADD result with new line
        ENDIF
    ENDIF
ENDFOR

DISPLAY 'result'

*/
function schedule() {
    var tono = 7
    var anton = 7
    var budi = 7
    var result = ""

    for (var i = 7; i <= 31; i++) {
        result += "Tanggal " + i + ": "
        var customers = ""
        if (i == 7) {
            result += "Tono, Anton, Budi"
        } else if (i % 5 == 0) {
            result += "Tempat fitness tutup"
        }
        if (i == tono + 2) {
            customers += "Tono"
            tono += 2
        }
        if (i == anton + 4) {
            if (customers.length != 0) {
                customers += ", "
            }
            customers += "Anton"
            anton += 4
        }
        if (i == budi + 5) {
            if (customers.length != 0) {
                customers += ", "
            }
            customers += "Budi"
            budi += 5
        }
        if (i % 5 != 0) {
            result += customers 
            if (i != 31) {
                result += "\n"
            }
        } else {
            if (i != 31) {
                result += "\n"
            }
        }
    }
    return result
}
console.log(schedule())
