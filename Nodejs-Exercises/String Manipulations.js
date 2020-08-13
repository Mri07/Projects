//......STRING MANIPULATIONS......
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.log("STRING MANIPULATIONS:-")
console.log("-----------------------------------------------------------------------------------------------------------------------------");
// Write a function to manipulate the provided string
// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => {
let temp=0;
for(let i=0;i<text.length;i++)
{
    if(text[i]<10)
    {
        temp=text[i];
        temp='0'+temp;        
        text[i]=temp;
    }
    
}
for(let i=0;i<text.length;i++)
console.log(text[i]);
}
paddedNum(nums)
console.log("-----------------------------------------------------------------------------------------------------------------------------");

// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best";
const titleCase = text => {
  let ans=[],j=0,ans2="",ans3="",k=0;
let temp=text.split(" ");
for(let i=0;i<temp.length;i++)
 {   
   j=0;
   if(temp[i].charCodeAt(j)>=97 && temp[i].charCodeAt(j)<=122)
   { 
     k=0;     
     while(temp[i].charCodeAt(k)>=97 && temp[i].charCodeAt(k)<=122)
     {      
       k++;
     }
     ans2=temp[i].slice(0,k);
     ans.push(ans2);   
     if(temp[i].charCodeAt(k)>=65 && temp[i].charCodeAt(k)<=90)
     {
       ans2=temp[i].slice(k,temp[i].length);
       ans.push(ans2);
     }  
     j++;
   } 
   if(temp[i].charCodeAt(j)>=65 && temp[i].charCodeAt(j)<=90)
   {      
     ans3=temp[i].slice(j,temp[i].length);
     ans.push(ans3);
   }   
 }
 ans=ans.join(" ").toLowerCase().split(" "); 
for(let i=0;i<ans.length;i++)
  {
ans[i]=ans[i][0].toUpperCase()+ans[i].slice(1);                 
  }
console.log(ans.join(" "));
};
titleCase(camelCase);
console.log("-----------------------------------------------------------------------------------------------------------------------------");

// 3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Paris"
const newCamel = text => {
  let first="",second="",arr=[];
let temp=text.toLowerCase().split(" "); 
  for(let i=0;i<temp.length;i++)
  {
    first=temp[i];second=temp[++i];
    second=second[0].toUpperCase()+second.slice(1);
    arr.push(first+second);
  }
  console.log(arr.join(" ")); 
}
newCamel(newTitle)
console.log("-----------------------------------------------------------------------------------------------------------------------------");

// 4. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = "kunal";
const pigLatin = text => {
  let ans1='';
  let ans2='';
  let i=0;
  while(text[i]!=='a' && text[i]!=='e'&& text[i]!=='i'&& text[i]!=='o'&& text[i]!=='u')
    {        
          //console.log(text[i]);
          ans1+=text[i];         
          i++;      
    }  
  while(i<text.length)
    {
      ans2+=text[i];
      i++;
    }
  console.log(ans2+ans1+'ay');
}
pigLatin(word);
console.log("-----------------------------------------------------------------------------------------------------------------------------");
