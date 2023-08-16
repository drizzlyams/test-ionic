import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Swiper} from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
  
@ViewChild('swiper')
swiperRef:ElementRef | undefined;
swiper?:Swiper;
swiperModules=[IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
