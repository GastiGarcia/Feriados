import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../../../../services/holiday.service';
import {IFechas} from '../../../../fechas';
@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.styl']
})
 export class TabTwoComponent implements OnInit {
   console = console;
  public fechas: any = [];
  constructor(
    private router: Router,
    private holidayService: HolidayService,
  ) { }



  ngOnInit() {
    this.holidayService.list().subscribe(result => {this.AsignarDatos(result); });
    // console.log(this.fechas);
  }
  public AsignarDatos (datos) {
    this.fechas = datos;
    console.log(this.fechas);
    return this.fechas;

  }
  // console.log('data' , holidays);
  public goTo(url) {
    this.router.navigate([url]);
  }

}
