import { Component, Input, OnInit } from '@angular/core';
import { ImportFileDto } from '../model/importFileDto';

@Component({
  selector: 'app-import-result-table',
  templateUrl: './import-result-table.component.html',
  styleUrls: ['./import-result-table.component.scss']
})
export class ImportResultTableComponent implements OnInit {
  @Input() public importDto: ImportFileDto;


  displayedColumns: string[] = ['name', '1SP', '2SP', 'EURO', 'DUO'];

  constructor() { }

  ngOnInit() {
  }
}
