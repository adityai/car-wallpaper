import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '../manufacturer.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  public manufacturerList: any;

  constructor(private service: ManufacturerService) { }

  ngOnInit(): void {
    this.service.getManufacturerList().subscribe(data => {
      let jsonObject = JSON.parse(JSON.stringify(data));
      this.manufacturerList = jsonObject.items;
      console.log("MANUFACTURER_LIST: " + this.manufacturerList);
    });
  }

}
