import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private httpClient: HttpClient,private router:Router,private transferService:TransferServiceService) {
    this.httpClient.get("assets/data.json")
      .subscribe(data => {
        this.reviewForm = data;
      }, (error: any) => {
        alert("Could not read from local data");
      })
  }
  ngOnInit(): void {

  }
  reviewForm: any = [];
  
  OnItemChange(value) {
    if (value===this.reviewForm.answer) {
      this.transferService.setData(true);  
      this.router.navigateByUrl('/result');
    }else{
      this.transferService.setData(false);
      this.router.navigateByUrl('/result');
    }
  }
}
