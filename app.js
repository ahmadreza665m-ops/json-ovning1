// const user = {id: 1, role: "admin"}
// const jsonstring = JSON.stringify(user)
// console.log(jsonstring)

// const parseduser = JSON.parse(jsonstring)
// console.log(parseduser)

// const person = {nman:"erik",alder:25}
// const jasontext = JSON.stringify(person)
// console.log(jasontext)

// const jsonText = '{"namn":"erik","alder":25}'

// try {
//     const person = JSON.parse(jsonText)
//     console.log(person.namn)
// } catch (error) {
//     console.log ("något gick fel")
// } finally {
//     console.log("färdig")
// }

const withdrawmoney = (balance,amount) => {
    if (amount<= 0) {
        throw new Error ("ogiltig belopp")
    }
    if (amount>balance) {
        throw new Error ("du är fattig")
    }
    return balancec- amount
}
 try {
    withdrawmoney(500,1200)
 } catch (err) {
    console.log(err.message)
 }
 