import { Agent } from './Agent';

export interface AgentManager {
    agentList: Agent[];
    addAgent(agent:Agent):number;
}