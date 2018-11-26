function generateCalender(){

    for(let i = 7 ; i <= 31; i++){
        let print = `Tanggal ${i}:`
        let arr = []
        let awal = 7
        if(i % 5 === 0){
            arr.push('Tempat Fitnes Tutup')
        }else if(i === 7){
            arr.push('Tono')
            arr.push('Anton')
            arr.push('Budi')
        }else{
            if(i % 2 !== 0 ){
                arr.push(`Tono`)
            }
            if((i-awal)% 4 === 0){
                arr.push(`Anton`)
            }
            if((i-awal) % 5 === 0){
                arr.push(`Budi`)
            }
        } 
       console.log(`${print} ${arr.join(', ')}`)
    }

}

generateCalender()