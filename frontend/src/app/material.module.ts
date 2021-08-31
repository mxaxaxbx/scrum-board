import { NgModule } from '@angular/core';
// Material
import { MatCardModule }      from "@angular/material/card";
import { MatToolbarModule }   from "@angular/material/toolbar";
import { MatButtonModule }    from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule }      from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatIconModule,
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
