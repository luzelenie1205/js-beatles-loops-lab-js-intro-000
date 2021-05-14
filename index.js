musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musician,instruments)
{
var arr=[];
for (let i=0; i < musicians.length, i++){
console.log( musicians[i] + "plays "+instruments[i]);
//arr.push(str);
}
return arr;
}
