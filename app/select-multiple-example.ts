import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import { Policy } from './models/policy';
import { Agreement } from './models/agreement';
import { Agent } from './models/agent';
import { SuccessorAgentInfo } from './models/successor-agent-info';
/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selected: string[] = this.toppingList.filter((item, i) => i % 2 === 0);

  successors = new FormControl();
  selectedPolicies: Policy[] = [];
  //p = new Policy("AN1234567");
  //selectedPolicies.push(p);
  //selectedPolicies: Policy[] = [new Policy("AN1234567")];


  selectedAgreement = new Agreement;
  successorList: string[] = ['111111'];
  selectedSuccessor: string[] = this.successorList.filter((item, i) => i % 2 === 0);
  
  ngOnInit(): void {
    let successorJoe = new SuccessorAgentInfo('111111', 'Doe', 'Joe');
    let successorMoe = new SuccessorAgentInfo("222222", "Doe", "Moe");
    let successorJane = new SuccessorAgentInfo('333333', 'Doe', 'Jane');
    let successorJanet = new SuccessorAgentInfo("444444", "Doe", "Janet");

   this.selectedAgreement.successorAgentInfo[0] = successorJoe;
   this.selectedAgreement.successorAgentInfo[1] = successorMoe;
   this.selectedAgreement.successorAgentInfo[2] = successorJane;
   this.selectedAgreement.successorAgentInfo[3] = successorJanet;

   let policy1 = new Policy("AN1234567");
   let policy2 = new Policy("AN1234568");
   let policy3 = new Policy("AN1234569");
   let currentRecord = "222222:Doe";
   let splitSuccesor = currentRecord.trim().split(":", 2);
   policy1.assignedSuccessorAgentCodes = [];
   policy2.assignedSuccessorAgentCodes = [];
   policy3.assignedSuccessorAgentCodes = [];
   policy3.contractIssueCode = "PNR";
   policy1.assignedSuccessorAgentCodes.push(splitSuccesor);
   policy2.assignedSuccessorAgentCodes.push(splitSuccesor);
   policy3.assignedSuccessorAgentCodes.push(splitSuccesor);

   this.selectedPolicies.push(policy1);
   this.selectedPolicies.push(policy2);
   this.selectedPolicies.push(policy3);

 }

 addSuccessorToPolicy(e: any, policy: Policy): void {
   console.log(policy);
   console.log(this.selectedSuccessor);
 }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */