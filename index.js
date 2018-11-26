/*

STORE "result" with the value of empty Array

FOR LOOP i from 7 to 31
IF i EQUALS TO 7 THEN 
"result" push "Tono, Anton, Budi"
ELSE IF i MOD 5 EQUALS TO 0 THEN 
"result" push "Tempat fitness tutup"
ELSE 
IF i-7 MOD 2 EQUALS TO 0 THEN 
"result" push "Tono"
IF i-7 MOD 4 EQUALS TO 0 THEN 
"result" push "Anton"
IF i-7 MOD 5 EQUALS TO 0 THEN
"result" push "Budi"
END IF 
DISPLAY "Tanggal i: "result" "
"result" = []
END IF
EXIT LOOP

*/

function fitnessClub() {
    let result = [];
    for(let i = 7; i <= 31; i++) {
        if(i === 7) {
            result.push("Tono, Anton, Budi")
        } else if (i%5 === 0) {
            result.push("Tempat Fitness Tutup")
        } else {
            if ((i-7)%2 === 0) {
                result.push("Tono");
            }
            if ((i-7)%4 === 0) {
                result.push("Anton");
            }
            if((i-7)%5 === 0) {
                result.push("Budi");
            }
        }
        console.log(`Tanggal ${i}: ${result}`);
        result = [];
    }
}

fitnessClub();

// self note:
// kelipatan 5 ====> fitness tutup!
// tono ===> 2 hari sekali
// anton ===> 4 hari sekali
// budi ====> 5 hari sekali
// buuuut tanggal 7 semua ketemu