const queens = []

const createQueen = (queenId,queenName) => {
    const queenObject = {
        id:queenId,
        name:queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Katherine G")
createQueen(45,'reine')

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}


for (const queenObject of queens) {
    const hailMessage= hailTheQueen(queenObject.name)
    console.log(hailMessage)
}


const tributeChest = []

const payTribute = (tributeId,message,queenId) => {
    // Create a tribute object
    const tributeObject= {
        id:tributeId,
        description:message,
        queenId:queenId

    }

    // Add the tribute object to the tribute chest
        tributeChest.push(tributeObject)
}

payTribute(100,"gold chest",1)
payTribute(100,"A tropical island",2)
payTribute(100,"world's best chef",45)

//iterate the queen object to show tribute for each one
for (const queenObject of queens) {
    //each queen will look at every item to see if it is hers
    for (const tributeObject of tributeChest){
        if( queenObject.id=== tributeObject.queenId){
            console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
        }
    }
}