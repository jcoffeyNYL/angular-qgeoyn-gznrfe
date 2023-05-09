export class Agent {
  agentCode: string;
  lastName: string;
  firstName: string;

  constructor(agentCode:string, lastName:string, firstName:string){
    this.agentCode = agentCode;
    this.lastName = lastName;
    this.firstName = firstName;
  }
}