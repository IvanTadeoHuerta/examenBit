import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {
  private Cliente_ID: number = 59;
  private Edad: number = 39;
  private GEB: number = 1500;
  private Estatura: number;
  private Peso: number;

  constructor() { }

  ngOnInit() {
  }

}
