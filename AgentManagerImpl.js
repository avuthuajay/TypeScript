"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        return agent.id;
    }
}
let manager = new AgentManagerImpl();
let manager1Id = manager.addAgent({ id: 101, mobileNumber: 1234567890, name: "Ajay", category: "ChairMan 1" });
let manager2Id = manager.addAgent({ id: 102, mobileNumber: 1023456789, name: "Ramesh", category: "ChairMan 2" });
console.log("manager1Id: " + manager1Id);
console.log("manager2Id: " + manager2Id);
manager.agentList.forEach(element => {
    console.log(element.id);
    console.log(element.name);
    console.log(element.category);
    console.log(element.mobileNumber);
});
