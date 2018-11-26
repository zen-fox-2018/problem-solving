// pseudocode

// function gymMember

// var = array with value string 'budi' 'tono' and 'anton'


function gymMember(startDate,endDate){
    var result = ''
    var day = endDate-startDate

    var name = ['tono','anton','budi']
    
    var tanggal = startDate
        for(i = 0; i <= day; i ++){
            var cekTono = false
            let cekAnton= false
            let cekBudi = false
            var holder = 'tanggal '
                if((i + tanggal) % 5 === 0){
                    holder +=  (i+tanggal) + ': ' +'tempat fitness tutup   '
                }
                else {
                    holder += (i+startDate) +': '
                }
                if(i % 2 === 0 && (i + tanggal) % 5 !== 0 ){
                 holder += name[0] +', '
                }
                if (i % 4 === 0 && (i + tanggal) % 5 !== 0) {
                   holder += name[1]+', '
                }
                if (i % 5 === 0 && (i + tanggal) % 5 !== 0) {
                    holder += name[2] + ', '           
                }

        
            result += holder.slice(0,holder.length-2)
            result += '\n'
    }
        
    return result
}
    console.log(gymMember(7,31))