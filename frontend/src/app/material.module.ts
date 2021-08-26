import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatCardModule }      from "@angular/material/card";
import { MatToolbarModule }   from "@angular/material/toolbar";
import { MatButtonModule }    from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSnackBarModule }  from '@angular/material/snack-bar';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
]

@NgModule({
  imports: [
    modules,
  ],
  exports: [
    modules,
  ]
})
export class MaterialModule { }
