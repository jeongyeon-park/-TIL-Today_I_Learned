const {writeFile, writeFileSync} = require('fs');

const newContent = 'This is some new text';

writeFile('hi.txt', newContent, (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Content Written!');
});