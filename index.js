let days = 31
for (let i = 7; i <= days; i++) {
    let name = []
    let day = i-7
    if(i % 5 === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
    } else {
        if (day % 2 === 0) {
            name.push("Tono")
        }
        if (day % 4 === 0) {
            name.push("Anton")
        }
        if (day % 5 === 0) {
            name.push("Budi")
        }
        let result = `Tanggal ${i}: ${name.join(', ')}`
        console.log(result);
    }
}
