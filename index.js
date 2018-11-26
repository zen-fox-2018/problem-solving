/*
~~~Psuode Code
STORE User with array "Tono","Anton","Budi"
STORE Jadwal with array 2,4,5
STORE output with any value
STORE i to 7
WHILE i < 32 
    STORE keterangan with any value
    FOR each value j = 0 to Length user 
        IF (i-7) MODS Jadwal in index j EQUALS TO 0 THEN
            keterangan = keterangan + User in index j
        END IF
    END FOR
    IF i MODS 5 EQUALS TO 0 THEN
        output = output + "Tanggal " + i + ':' + 'Tempat Fitness Tutup' 
    ELSE 
        output = output + "Tanggal " + i + ':' + keterangan
    END IF
    i increment
END WHILE
DISPLAY OUTPUT
*/
function jadwal(){
    var User=["Tono","Anton","Budi"]
    var Jadwal=[2,4,5]
    var output=''
    var keterangan=''
    var i=7
        while(i<=31){
            keterangan=''
            for(var j=0;j<User.length;j++){
                if((i-7)%Jadwal[j]==0){
                    keterangan+= User[j]+','
                }
            }
            if(i%5==0){
                output+="Tanggal " + i + ':' + 'Tempat Fitness Tutup'+"\n"
            }else {
                
                output+="Tanggal "+ i + ':' + keterangan.substr(0,keterangan.length-1)+"\n"
            }
            i++
        }
        return output
    }
    console.log(jadwal())