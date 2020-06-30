interface Response {
    message : string,
    i : number;
}

function print(response : Response) : void{
    if(response.message != ""){
        console.log(response.message);
    }
    else{
        console.log(response.i);
    }
}

function print1(message : string, i : number) : void{
    if(message != ""){
        console.log(message);
    }
    else{
        console.log(i);
    }
}

function FizzBuzz() : void{
    let n : number = +process.argv[2];
    let set = new Set();
    for (let i = 3; i < process.argv.length; i++){
        set.add(+process.argv[i]);
    }
    for(let i : number = 1; i <= n; i++){
        let message : string = "";
        if (!(i % 3) && set.has(3)){
            message += "Fizz";
        }
        if (!(i % 5) && set.has(5)){
            message += "Buzz";
        }
        if (!(i % 7) && set.has(7)){
            message += "Bang";
        }
        if (!(i % 11) && set.has(11)){
            message = "Bong";
        }
        if (!(i % 13) && set.has(13)){
            let index : number = message.indexOf("B")
            if(index == -1){
                message = "Fezz" + message;
            }
            else{
                let beginPartOfMessage = message.substring(0, index);
                let endPartOfMessage = message.substring(index, message.length);
                message = beginPartOfMessage + "Fezz" + endPartOfMessage;
            }
        }
        if(!(i % 17) && set.has(17)){
           let newMessage : string = "";
           while(message){
               let firstIndex = message.search(/[A-Z]/);
               let secondIndex = message.slice(1).search(/[A-Z]/) + 1;
               if(firstIndex == secondIndex){
                   newMessage = message + newMessage
                   message = null;
               }
               else{
                   newMessage = message.substr(firstIndex, secondIndex) + newMessage;
                   message = message.substr(secondIndex, message.length);
               }
           }
           message = newMessage
        }

        print1(message, i);

    }
}

FizzBuzz();