import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  answer: string;
  data = this.transferService.getData();

  constructor(private transferService: TransferServiceService) {
  }
  ngOnInit(): void {
    if (this.data) {
      this.answer = "Correct Answer";
    } else {
      this.answer="Incorrect Answer"
    }
  }




}
