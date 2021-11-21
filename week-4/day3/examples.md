#Promises

- What is a promise?
A promise in programming, the data comes at a later time. If it is denied, the denial will come also at at later time.
-Async Behavior
A delay in data when a certain action is called. A function that tires and continues to go throufh the rest of the code, but then later on, it finishes.
## A promise has three statuses:
-'pending'
-'fulfilled'
-'rejected'

let joe = joe

function joeIsSleeoping() {

}
joeIsSleeping() => {return true}
joeIsSnoring
-Fetch( that is used for async behavior). fetch returns a promise as well
-Syntax
    'const jonSnowData = fetch("https://anapioficeandfire.com/api/characters/583")'
    .then(response*any word* => response.json)
    .then(data = console.log(data))
    
    
    
ES6 file of fetching, handling, async behavior
'Async/Await'
 synthatic sugar makes things look prettier ex:
    
    async fucntion getJonSnowData(){
        const jonSnowData = await fetch(url ling)
        const json = await jonSnowDate.json()
        return jonSnowData
    }


HTTP Methods
google http methods 
-Get "Asking for data to come to you"
-Post "Sending data somewhere, typically a database"
-Put "Used to modify existing data"
-Delete "Delete data"