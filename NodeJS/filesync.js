
// Include fs module
const fs = require('fs');
  
// Calling the fs.readFile() method
// for reading file 'input1.txt'
// fs.readFile('./input2.txt',
//         {encoding:'utf8', flag:'r'},
//         function(err, data) {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// });
fs.readFile('./input1.txt',
        {encoding:'utf8', flag:'r'},
        function(err, data) {
    if(err)
        console.log(err);
    else
        console.log(data);
});
  
// // Calling the fs.readFileSync() method
// // for reading file 'input2.txt'
const data = fs.readFileSync('./input3.txt',
              {encoding:'utf8', flag:'r'});
 
// Display data
console.log(data);
const data1 = fs.readFileSync('./input2.txt',
              {encoding:'utf8', flag:'r'});
 console.log(data1);             