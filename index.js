
// STORE i WITH 7
// LOOP i untill greater equals to 31
//     STORE "print" WITH `tanggal i :`
//     STORE 'arr' WITH empty Array
//     STORE "awal" WITH 7
//     IF i modulus 5 equals to 0
//         PUSH 'Tempat fitness Tutup' to "arr"
//     ELSE IF i equals to 7
//         PUSH 'Tono, Anton,Budi' to "arr"
//     ELSE 
//         IF i modulus 2 NOT EQUALS to 0
//             PUSH "Tono" to "arr"
//         END IF
//         IF Substract i WITH "awal" modulus WITH 4 equals to 0
//             PUSH "Anton" to "arr"
//         END IF
//         IF Substract i WITH "awal" modulus WITH 5 equals to 0
//         PUSH "Budi" to "arr"
//         END IF
//     END IF
//     DISPLAY "print" + "arr" JOIN WITH ","
// END LOOP
    


function generateCalender(){

    for (let i = 7 ; i <= 31; i++) {
        let print = `Tanggal ${i}:`
        let arr = []
        let awal = 7
        if (i % 5 === 0) {
          arr.push('Tempat Fitnes Tutup')
        } else if (i === 7) {
            arr.push('Tono')
            arr.push('Anton')
            arr.push('Budi')
        } else {
            if (i % 2 !== 0 ) {
                arr.push(`Tono`)
            }
            if ((i-awal)% 4 === 0) {
                arr.push(`Anton`)
            }
            if ((i-awal) % 5 === 0) {
                arr.push(`Budi`)
            }
        } 
       console.log(`${print} ${arr.join(', ')}`)
    }

}

generateCalender()