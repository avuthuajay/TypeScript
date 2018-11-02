"use strict";
class InsuranceAgent {
    constructor(agentCode = 1, agentName = "Ajay") {
        this._agentCode = agentCode;
        this._agentName = agentName;
        console.log(InsuranceAgent.toString());
    }
    set agentCode(agentCode) {
        if (agentCode < 0 || agentCode > 2000) {
            throw Error("This is invalid agent code");
        }
        this._agentCode = agentCode;
    }
    get agentCode() {
        return this._agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentName() {
        return this._agentName.toUpperCase();
    }
    toString() {
        return `${this._agentCode},${this._agentName}`;
    }
}
