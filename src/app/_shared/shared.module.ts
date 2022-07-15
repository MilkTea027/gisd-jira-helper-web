import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [ ],
    imports: [
      FormsModule,
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
      ToastrModule.forRoot({
        closeButton: true,
        newestOnTop: false,
        disableTimeOut: true
      }),
    ],
    exports: [
      FormsModule,
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
    ],
  })
  export class SharedModule {
    static forRoot(): any {
      return { ngModule: SharedModule };
    }
  }
  