import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  title = new FormControl("This a title example", Validators.required)
  content = new FormControl("Se puede aplicar estilos a estas secciones, como tamanho color posicion entre otras cosas", Validators.required)

  ngOnInit(): void {
    
  }

  download(){
    const document = {
      content: [
        this.title.value,
        {text: this.content.value, fontSize: 25},
        {
          // to treat a paragraph as a bulleted list, set an array of items under the ul key
          ul: [
            'Item 1',
            'Item 2',
            'Item 3',
            { text: 'Item 4', bold: true },
          ]
        },
    
        'Numbered list example:',
        {
          // for numbered lists set the ol key
          ol: [
            'Item 1',
            'Item 2',
            'Item 3'
          ]
        }
      ]
    }
    pdfMake.createPdf(document).download()
  }

  open(){
    const document = {
      content: [
        this.title.value,
        {text: this.content.value, fontSize: 25, color: 'red'},
        {
          // to treat a paragraph as a bulleted list, set an array of items under the ul key
          ul: [
            'Item 1',
            'Item 2',
            'Item 3',
            { text: 'Item 4', bold: true },
          ]
        },
    
        'Numbered list example:',
        {
          // for numbered lists set the ol key
          ol: [
            'Item 1',
            'Item 2',
            'Item 3'
          ]
        }
      ]
    }
    pdfMake.createPdf(document).open()
  }

}
