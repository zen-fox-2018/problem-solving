/*
//Pseudocode

SET "output" to 0

FOR "i"=7 to "i" less than or equal to 31
    SET "output" to 'tanggal' + "i" + ': '

    IF "i" mod 5 = 0THEN
        ADD "output with 'Tempat Fitness Tutup'
    ELSE
        IF ("i" - 7) mod 4 = 0 AND ("i" - 7) mod 5 = 0 THEN
            ADD "output" with 'Tono, Anton, '
        ELSE IF ("i" - 7) mod 4 = 0 AND ("i" - 7) mod 5 not equal to 0  THEN 
            ADD "output" with 'Tono, Anton'
        ELSE IF ("i" - 7) mod 2 = 0 AND ("i" - 7) mod 5 = 0  THEN 
            ADD "output" with 'Tono, '
        ELSE IF ("i" - 7) mod 4 = 0 AND ("i" - 7) mod 5 not equal to 0  THEN 
            ADD "output" with 'Tono'
        ELSE IF("i" - 7) mod 5 = 0  THEN
            ADD "output" with 'Budi'
        ENDIF
    ENDIF

    DISPLAY "output"

*/




var output = ""

for (var i = 7; i <= 31; i++) {
    output = "tanggal " + i + ": "

    if (i % 5 === 0) {
        output += "Tempat Fitness Tutup"
    }
    else {
        if((i-7) % 4 === 0 && (i-7) % 5 === 0 ){
            output += "Tono, Anton, "
        }   
        else if((i-7) % 4 === 0 && (i-7) % 5 !== 0 ){
            output += "Tono, Anton"
        }
        else if((i-7) % 2 === 0 && (i-7) % 5 === 0 ){
            output += "Tono, "
        }
        else if((i-7) % 2 === 0 && (i-7) % 5 !== 0 ){
            output += "Tono"
        }
        if((i-7) % 5 === 0){
            output += "Budi"
        }
        
    }
    
    console.log(output)
}