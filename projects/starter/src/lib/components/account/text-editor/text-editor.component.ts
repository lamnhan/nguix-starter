import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nguix-account-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnChanges {
  @Input() i18n = false;

  @Input() editable = true;
  @Input() label = 'Text';
  @Input() type = 'text';
  @Input() value?: string = '';
  @Output() save = new EventEmitter<string>();

  @Input() showPubliclyToggler = false;
  @Input() isPublicly = false;
  @Output() publiclyChanged = new EventEmitter<boolean>();

  isEdit = false;
  currentValue?: string;

  constructor() {}

  ngOnInit(): void {
    this.buildCurrentValue();
  }

  ngOnChanges(): void {
    this.buildCurrentValue();
  }

  submit() {
    this.save.emit(this.currentValue);
    this.isEdit = false;
  }

  togglePublicly(e: any) {
    this.publiclyChanged.emit(e.target.checked);
  }

  private buildCurrentValue() {
    this.currentValue = this.value;
  }

}
