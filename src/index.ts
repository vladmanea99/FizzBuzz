interface MyData {
    message : string,
    i : number;
}
interface CheckRule{
    rule:(message:string,  i:number) => string
    message : string
    i : number
}

function doRule(data : CheckRule): string {
    //return data.rule({data.message, data.i});
    return "DEBUG";
}

const set = new Set();

function print(response : MyData): void {
    if (response.message != "") {
        console.log(response.message);
    }
    else {
        console.log(response.i);
    }
}

function print1(message : string, i : number): void {
    if (message != "") {
        console.log(message);
    }
    else {
        console.log(i);
    }
}

function rule3(data : MyData): string {
    if (!(data.i % 3) && set.has(3)) {
        return data.message + "Fizz";
    }
    return data.message;
}

function rule5(data : MyData): string {
    if (!(data.i % 5) && set.has(3)) {
        return data.message + "Buzz";
    }
    return data.message;
}

function rule7(data : MyData): string {
    if (!(data.i % 7) && set.has(3)) {
        return data.message + "Bang";
    }
    return data.message;
}

function rule11(data : MyData): string {
    if (!(data.i % 11) && set.has(3)) {
        return data.message + "Bong";
    }
    return data.message;
}

function rule13(data : MyData): string {
    if(!(data.i % 13) && set.has(13)) {
        const index: number = data.message.indexOf("B")
        if (index == -1) {
            return "Fezz" + data.message;
        } else {
            const beginPartOfMessage = data.message.substring(0, index);
            const endPartOfMessage = data.message.substring(index, data.message.length);
            return beginPartOfMessage + "Fezz" + endPartOfMessage;
        }
    }
    return data.message;
}

function rule17(data : MyData): string {
    let message = data.message
    if (!(data.i % 17) && set.has(3)) {
        let newMessage : string = "";
        while(message) {
            const firstIndex = message.search(/[A-Z]/);
            const secondIndex = message.slice(1).search(/[A-Z]/) + 1;
            if (firstIndex == secondIndex) {
                newMessage = message + newMessage
                message = null;
            }
            else {
                newMessage = message.substr(firstIndex, secondIndex) + newMessage;
                message = message.substr(secondIndex, message.length);
            }
        }
        message = newMessage
    }
    return message;
}

function FizzBuzz(): void {
    const n : number = +process.argv[2];

    for (let i = 3; i < process.argv.length; i++) {
        set.add(+process.argv[i]);
    }
    const rules = [rule3, rule5, rule7, rule11, rule13, rule17];
    for (let i : number = 1; i <= n; i++) {
        let message : string = "";
        for (const rule of rules){
            message = rule({message, i})

        }
        print({message, i});

    }
}

FizzBuzz();