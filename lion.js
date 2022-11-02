let lion = {
    name: 'Simba',
    status: 'healthy',
    pride: true,
    Bellwether: true,
    boodyChar: {
        height: 2.6,
        weit: 350,
        color: 'white',
    },
    protection: false,
    congition: {
        energy: 10,
        hunger: 8,
        mood: 9,
    },
    guard(stat) {
        if (stat == '?') {
            console.log(`Лев обходит територии protection: ${this.protection} `)

        } else if (stat == '!') {
            this.protection = true
            console.log(`the lion gues to guard protection: ${this.protection}`)

        }
    },
    hunts(stat) {
        this.congition.energy -= 1 ;
        let energyp = this.congition.energy * 10;
        console.log(`Your energy ${energyp}% . Keep in mind hunting will spend a tenth. If you want to send a lion to hunt write true in method argument if not then false`)
        if (stat == true) {
            if (this.congition.hunger == 10) {
                this.congition.mood -= 1
                console.log(`Simba: Don't annoy me man. Mood mins 10%`)
            } else if (this.congition.hunger > 6) {

                let randomh = Math.floor(Math.random() * 10001)
                if (randomh > 2) {
                    if (this.congition.hunger <= 8) {
                        let randomh = Math.floor(Math.random() * 3)
                        this.congition.hunger += randomh
                        console.log(`The hunt is successful, you raised your satiety level to ${energyp}%`)
                        let randomm = Math.floor(Math.random() * 10001)
                        if (randomm > 1000) {
                            this.congition.mood += 1
                            console.log(`Simba is happy his mood has risen by 10%`)
                        } else if (randomm > 10) {
                            this.congition.mood += 2
                            console.log(`Zebra meat was incredibly delicious Simba's mood went up by 20%`)
                        } else if (randomm > 1) {
                            this.congition.mood -= 1
                            console.log(`the meat of the caught zebra was tough Simba's mood decreased by 10%`)
                        } else if (randomm == 1) {
                            this.congition.mood -= 2
                            console.log(`The zebra caught by Simba was in formation, his mood dropped by 20%`)
                        }
                    } else {
                        console.log(`the direction of the wind suddenly changed, the zabra smelled the lion and fled`)
                        this.congition.mood -= 1
                    }
                } else {
                    console.log(`Prey fled Simba is not happy minus 10% mood`)
                    this.congition.mood -= 1
                }


            } else if (this.congition.hunger < 6) {
                if (this.congition.hunger > 3) {
                    let randomh = Math.floor(Math.random() * 10001)
                    if (randomh > 2) {
                        let randomh = Math.floor(Math.random() * 4)
                        this.congition.hunger += randomh
                        console.log(`The hunt is successful, you raised your satiety level to ${energyp}%`)
                        let randomm = Math.floor(Math.random() * 3)
                        this.congition.mood += randomm
                    } else {
                        console.log(`Prey fled Simba is not happy minus 10% mood`)
                        this.congition.mood -= 1
                    }
                }
            }else if(this.congition.hunger < 3){
                console.log(`Симба голоден и он счастлив от предстоящей охоты`)
                if(this.congition.mood < 10){
                    console.log(`Simba's mood increased by 10%`)
                    this.congition.mood += 1
                }
                let randomh = Math.floor(Math.random() * 10001)
                if(randomh > 100){
                    console.log(`Simba caught a buffalo, its meat is juicy and tasty, the lion's satiety level has risen by 20%`)
                    this.congition.hunger += 2;
                }else if(randomh > 10){
                    console.log(`Simba caught a buffalo, its meat is juicy and tasty, the lion's satiety level has risen by 20%`)
                    console.log(`prey did not have time to react simba did not spend energy`)
                    this.congition.hunger += 2;
                    this.congition.energy += 1;

                }else if(randomh > 1){
                    console.log(`today the meat was especially satisfying in this characteristic has risen by 30%`)
                    console.log(`prey did not have time to react simba did not spend energy`)
                    this.congition.hunger += 3;
                    this.congition.energy += 1;
                }

            }
    
        }else if(stat == false) {
            this.congition.mood -= 1
            console.log(`Simba: Deep man don't bother me. Leo is not happy minus 10% of mood`)
        }
    },
    sliping(){
        this.congition.energy +=2
        this.congition.hunger -=1
    },
    fight(){
        this.congition.energy -=6
        this.congition.hunger -=6
    },
    retreat(){
        this.congition.mood -= 8
    },
    accept(){
        this.congition.mood += 2
    },












}

console.log(`Здесь я буду описывать вам возможности обекта `)

























































// nodelName: 'Эльдорадо',
// brandcar: 'Кадилак',
// yearissue: 1985,
// color: 'brown',
// housigChar: [
//     {},
//     {},
//     {},
// ],
// motorChar: [
//     {},
//     {},
//     {}
// ],



