class Gym {
    constructor(days) {
        days = days
    }
    generateDays (days) {
        for (var i = 7; i <= days; i++) {
            let member = [];
            if (i % 5 === 0) {
                member.push('Tempat Fitness Tutup')
            } else {
                if ((i - 7) % 2 === 0) {
                    member.push('Tono')
                } if ((i - 7) % 4 === 0) {
                    member.push('Anton')
                } if ((i - 7) % 5 === 0) {
                    member.push('Budi')
                }
            }
        console.log(`Taggal ${i}: ${member.join(', ')}`)
        } 
    }
}

const newgym = new Gym 
newgym.generateDays(31)

/*
PSEUDOCODE

LOOP i from 7 to equals to 31
    SET member with empty array
    IF i MOD 5 is qual to 0
        CALCULATE jadwal with 'Tempat Fitness Tutup
    ELSE
        IF (i - 7) MOD 2 is equal to 0
            PUSH 'Tono' to member
        IF (i - 7) MOD 4 is equal to 0
            PUSH 'Anton' to member
        IF (i - 7) MOD 5 is equal to 0
            PUSH 'Budi' to member
    END IF
    DISPLAY 'Tanggal i: join member'
END LOOP
*/