import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
  ){}

  ngOnInit(){

  }
  // downloadPdf(){
  //   const url = '../../../assets/images/pdf/white-paper.pdf';
  //   this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
  //     const downloadUrl = URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = downloadUrl;
  //     a.download = 'file.pdf';
  //     document.body.appendChild(a);
  //     a.click();
  //     setTimeout(() => {
  //       document.body.removeChild(a);
  //       URL.revokeObjectURL(downloadUrl);
  //     }, 0);
  //   });
  // }
}
