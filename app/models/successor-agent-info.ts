import {Agent} from '../models/agent';
export class SuccessorAgentInfo {
  agent: Agent;
  agentCode: string;
  firstName?: any;
  lastName?: any;

  constructor(agentCode, firstName, lastName){
    this.agentCode = agentCode;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}