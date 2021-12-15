import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PdfMakerComponent } from './pdf-maker/pdf-maker.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: "pdfMaker/:name/:content",
    component: PdfMakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
