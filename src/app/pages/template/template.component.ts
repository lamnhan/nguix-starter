import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public readonly templateData$ = this.activatedRoute.params.pipe(
    map(params => ({id: params.id})),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    public readonly data: DataService,
  ) { }

  ngOnInit(): void {
  }

}
