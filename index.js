/**
STORE 'i' equals to 7
STORE 'j' equals to 0
WHILE 'i' less than equals to 31
    STORE 'hasil' with empty value
    IF 'i' modulus 5 equals to 0
        PUT "Tempat Fitness Tutup" to 'hasil'
    ELSE
        IF 'j' modulus 2 equals to 0
            PUT "Tono" to hasil
        IF 'j' modulus 4 equals to 0
            PUT "Anton" to hasil
        IF 'j' modulus 5 equals to 0
            PUT "Budi" to hasil
    DIPLAY "Tanggal  PLUS 'i' + 'Hasil'"
    ADD 'i' by 1
    ADD 'j' by 1
END WHILE



 */
    var i = 7
    var j = 0
    var budi = 'Budi'
    var anton = 'Anton'
    var tono = 'Tono'
    while(i <=31){
        var hasil = []
        if (i % 5 === 0){
            hasil.push('Tempat Fitness Tutup')
        }else{
            if(j % 2 === 0){
                hasil.push('Tono')
            }
            if (j % 4 === 0){
                if(hasil.length === 0){
                    hasil.push('Anton')
                }else{
                    hasil.push(' Anton')
                }
               
            }
            if (j%5 === 0){
                if(hasil.length===0){
                    hasil.push('Budi')
                }else{
                    hasil.push(' Budi')
                }
            }
        }
        console.log('Tanggal '+ i + ': ' + hasil)
        i++
        j++
    }
   
