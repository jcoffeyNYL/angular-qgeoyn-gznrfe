export class Policy {
  contractId: string;
  assignedSuccessorAgentCodes?: string[][];
  
  constructor(contractId){
    this.contractId = contractId;
  }
}