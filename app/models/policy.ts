export class Policy {
  contractId: string;
  contractIssueCode: string;
  sourceCode: string;
  contractIssueDate: Date;
  productCode: string;
  productType: String;
  marketSegmentType: string;
  clientTypeCD: string;
  permissionedAgentName: string;
  clientFirstName: string;
  clientLastName: string;
  clientFullName: String;
  clientSuffix: string;
  clientId: string;
  assignedSuccessorAgentCodes?: string[][];
  householdType?: string;
  state?: string;
  
  constructor(contractId){
    this.contractId = contractId;
  }
}