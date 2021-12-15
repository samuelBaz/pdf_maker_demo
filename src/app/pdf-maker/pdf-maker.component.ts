import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf-maker',
  templateUrl: './pdf-maker.component.html',
  styleUrls: ['./pdf-maker.component.sass']
})
export class PdfMakerComponent implements OnInit {

  name: string = ''
  content: string = ''

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.name = params.name
        this.content = params.content
        console.log(this.name, this.content);
        this.createPdf(this.name, this.content)
      }
    )
  }

  createPdf(name: string, content: string){
    const document = {
      content: [
        name,
        {text: content, fontSize: 18},
      ]
    }
    pdfMake.createPdf(document).download()
  }

}
