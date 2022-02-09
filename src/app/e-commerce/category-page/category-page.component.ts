import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  grid = true;
  productData: any
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/product.json").subscribe(data => {
      this.productData = data
    })
  }

  cons(type: any) {
    if (type == 'col') {
      this.grid = false;
    }
    else {
      this.grid = true;
    }
  }
  sort(val: any) {
    switch (val) {
      case "Low":
        {
          this.productData = this.productData.sort((low: any, high: any) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productData = this.productData.sort((low: any, high: any) => high.price - low.price);
          break;
        }

      default: {
        this.productData = this.productData.sort((low: any, high: any) => low.price - high.price);
        break;
      }

    }
    return this.productData;

  }
}
