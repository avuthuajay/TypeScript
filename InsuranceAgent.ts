class InsuranceAgent {
    public _agentCode: number;
    public _agentName: string;

    constructor(agentCode: number = 1, agentName: string = "Ajay") {
        this._agentCode = agentCode;
        this._agentName = agentName;
        console.log(InsuranceAgent.toString());
    }

    set agentCode(agentCode: number) {
        if (agentCode < 0 || agentCode > 2000) {
            throw Error("This is invalid agent code");
        }
        this._agentCode = agentCode
    }

    get agentCode() {
        return this._agentCode;
    }

    set agentName(agentName: string) {
        this._agentName = agentName;
    }

    get agentName() {
        return this._agentName.toUpperCase();
    }

    toString() {
        return `${this._agentCode},${this._agentName}`
    }
}