import { Component, OnInit } from '@angular/core';
import { TrayServices } from '../../Servicios/tray-services';
import { Lightbox } from 'ngx-lightbox';




@Component({
  selector: 'app-tray-list',
  templateUrl: './tray-list.component.html',
  styleUrls: ['./tray-list.component.css']
})
export class TrayListComponent implements OnInit {
  imagesBasic = [
    {
      img: '../../../assets/captura.png',
      thumb: '../../../assets/captura.png',
      description: 'Image 1'
    }];
tray: any = [];
images: any = [];

  constructor(
    private trayApi: TrayServices,
    private lbx: Lightbox
  ) {}
  ngOnInit() {
  this.LoadTray();
  //this.LoadImage();

  }
  LoadTray() {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.tray = data;
          //console.log(this.tray);
    });
  }
loadImages()
{
  this.trayApi.getImagesTray().subscribe(images => {
    this.images = images;

  });
}
}
  
  /*
  LoadImage()
  {
    return this.trayApi.getImagesTray().subscribe(datos => {
      this.imageTray = datos;
      console.log(this.imageTray);
    });
  

  }
*/



// buscar una imagen image = this.actRoute.snapshot.params['id'];
// Buscar una Imagen imageData:{};


    // obtener todas las imagenes this.LoadImage();
  /*
  obtener una imagen
  this.trayApi.getImageTray(this.image).subscribe((data:{})=>{
    this.imageData=data;
    console.log(this.imageData)
    
  })*/
//mostrar imagen
    //public actRoute:ActivatedRoute,
    //public router:Router