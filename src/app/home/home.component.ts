import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import SwiperCore, {Navigation} from 'swiper';

SwiperCore.use([Navigation])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Array<Activity> = [
    {venue: 'sunbear SHIATSU', location: 'HAWTHORN', rating: 4.6, name: 'Naturopathic Consultation', 
    pricePerHour: 50, availablity: new Date(), imageUrl: '../../assets/image1.png'},
    {venue: 'SUNBEAR SHIATSU', location: 'HAWTHORN', rating: 4.6, name: 'Naturopathic Consultation', 
    pricePerHour: 50, availablity: new Date(), imageUrl: '../../assets/image2.png'},
    {venue: 'SUNBEAR SHIATSU', location: 'HAWTHORN', rating: 4.6, name: 'Naturopathic Consultation', 
    pricePerHour: 50, availablity: new Date(), imageUrl: '../../assets/image3.png'},
    {venue: 'SUNBEAR SHIATSU', location: 'HAWTHORN', rating: 4.6, name: 'Naturopathic Consultation', 
    pricePerHour: 50, availablity: new Date(), imageUrl: '../../assets/image4.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
