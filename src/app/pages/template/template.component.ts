import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SettingService } from '@lamnhan/ngx-useful';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public readonly templateData$ = this.activatedRoute.params.pipe(
    map(params => this.data.templateItems[params.id]),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    public readonly setting: SettingService,
    public readonly data: DataService,
  ) { }

  ngOnInit(): void {
  }

  activateTemplate(id: string) {
    alert('// TODO: ....');
  }

}
