 let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit
Necessitatibus perspiciatis explicabo hic ratione cum`;
let arr = ['a','o','u','i','e'];
let result = '';

function checkString(str){
    for (let i = 0; i < str.length; i++){
        if(arr.includes(str[i])){
            result += '*';
        }else{
            result +=str[i]
        }
    }
    console.log(result);
}
checkString(str)

// RegEx bilan qilingan

// let newstr = str.replace(/[aeiou]/gi,'*')
//  console.log( newstr.toLowerCase());

