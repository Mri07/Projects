console.log("\n\n\t\t\t\t HANG-MAN GAME\n");
let given="abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").join("         ");

let lives=10,word=[],str,count=0;
    const choice=Math.floor(Math.random()*3);
    switch(choice)
    {
        case 0:
            str="football".split(""),j=0;
            while(j<str.length)//For blanks
                {
                  word.push("_");
                  j++;
                }
            console.log("ONE OF THE FAVORITE SPORTS OF INDIA..!\n");
        do{
         const obj=require('readline-sync');
         console.log(given);
         const ans=obj.question("\nGuess the word by selecting the alphabets one by one.  ");
         console.log("\nYou Select :- "+ans.toUpperCase());
        
         let flag=0;
         for(let i=0;i<str.length;i++)//Comparision
           {
              if(ans===str[i])
                {            
                    word[i]=ans.toUpperCase();
                    delete str[i];                                                                
                    flag=1;
                    count++;
                }
           }    
           console.log("\t--------------");
           console.log("\t|  "+word.join(" ")+"  |");
           console.log("\t--------------");
         if(flag===0)        
         console.log("\nWRONG..!\nYou Have "+(--lives)+" Lives Remaining.\n");                                     
         else
         console.log("\nCORRECT..!\nYou Have "+(lives)+" Lives Remaining.\n");

         if(count===str.length)
         {
           console.log("\n!!! YOU WON !!!");
           break;
         }
         if(lives===0)
         {
          console.log("!!! GAME OVER !!!");
          break;
         }       
        }while(lives>0);        
        break;

        //New-Word
        case 1:
            str="saturn".split(""),j=0;
            while(j<str.length)//For blanks
                {
                  word.push("_");
                  j++;
                }
            console.log("WHICH PLANET HAS MOST MOONS..?\n");
        do{
         const obj=require('readline-sync');
         console.log(given);
         const ans=obj.question("\nGuess the word by selecting the alphabets one by one.  ");
         console.log("\nYou Select :- "+ans.toUpperCase());
        
         let flag=0;
         for(let i=0;i<str.length;i++)//Comparision
           {
              if(ans===str[i])
                {            
                    word[i]=ans.toUpperCase();
                    delete str[i];                                                                
                    flag=1;
                    count++;   
                }
           }    
           console.log("\t--------------");
           console.log("\t|  "+word.join(" ")+"  |");
           console.log("\t--------------");
         if(flag===0)        
         console.log("\nWRONG LETTER..!\nYou Have "+(--lives)+" Lives Remaining.\n");                                     
         else
         console.log("\nCORRECT LETTER..!\nYou Have "+(lives)+" Lives Remaining.\n");

         if(count===str.length)
         {
           console.log("\n!!! YOU WON !!!");
           break;
         }
         if(lives===0)
         {
          console.log("!!! GAME OVER !!!");
          break;
         }       
        }while(lives>0);
        break;

        //New Word
        case 2:
            str="aron".split(""),j=0;
            while(j<str.length)//For blanks
                {
                  word.push("_");
                  j++;
                }
            console.log("NAME OF AUSTRALIAN CAPTAIN..?\n");
        do{
         const obj=require('readline-sync');
         console.log(given);
         const ans=obj.question("\nGuess the word by selecting the alphabets one by one.  ");
         console.log("\nYou Select :- "+ans.toUpperCase());
        
         let flag=0;
         for(let i=0;i<str.length;i++)//Comparision
           {
              if(ans===str[i])
                {            
                    word[i]=ans.toUpperCase();
                    delete str[i];                                                                
                    flag=1;
                    count++;
                }
           }    
           console.log("\t--------------");
           console.log("\t|  "+word.join(" ")+"  |");
           console.log("\t--------------");
         if(flag===0)        
         console.log("\nWRONG LETTER..!\nYou Have "+(--lives)+" Lives Remaining.\n");                                     
         else
         console.log("\nCORRECT LETTER..!\nYou Have "+(lives)+" Lives Remaining.\n");

         if(count===str.length)
         {
           console.log("\n!!! YOU WON !!!");
           break;
         }
         if(lives===0)
         {
          console.log("!!! GAME OVER !!!");
          break;
         }
        }while(lives>0);          
        break;
    }
                        
