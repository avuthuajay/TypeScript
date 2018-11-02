export interface Agent {
    id:number, name:string,mobileNumber:number,category:string;
}

function printAgent(agent:Agent){
    console.log(agent.name);
}

let ajay:Agent = {id:101, mobileNumber:1234567890,name:"Ajay",category:"ChairMan"};

printAgent(ajay);