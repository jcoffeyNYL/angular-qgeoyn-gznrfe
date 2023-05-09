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
  selectedPolicies: Policy[] = [new Policy("AN1234567")];
  selectedAgreement = new Agreement;
  successorList: string[] = ['111111', '222222', '333333', '444444'];
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

   //let policy1 = new Policy("AN1234567");
   //this.selectedPolicies[0] =  policy1;

 }

 addSuccessorToPolicy(e: any, policy: Policy): void {
 }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */