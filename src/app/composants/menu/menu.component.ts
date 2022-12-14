import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties:Array<Menu> = [
    {
    id:'1',
    titre:'Tableau de bord',
    icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu:[
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:''
      },
      {
        id:'12',
        titre:'statistiques',
        icon:'fa-solid fa-chart-column',
        url:'statistiques'
      }
    ]

  },
    {
      id:'2',
      titre:'Articles ',
      icon:'fa-solid fa-box',
      url:'',
      sousMenu:[

        {
          id:'21',
          titre:'Articles',
          icon:'fa-solid fa-boxes-stacked',
          url:'articles'
        },
        {
          id:'22',
          titre:'Mouvements du stock',
          icon:'fa-solid fa-box',
          url:'mvtstk'
        }
      ]
    },
    {
      id:'3',
      titre:'Clients ',
      icon:'fa-solid fa-users',
      url:'',
      sousMenu:[

        {
          id:'31',
          titre:'Clients',
          icon:'fa-solid fa-user-check',
          url:''
        },
        {
          id:'32',
          titre:'Commande clients',
          icon:'fa-solid fa-cart-arrow-down',
          url:''
        }
      ]
    },
    {
      id:'4',
      titre:'Fournisseur ',
      icon:'fa-solid fa-users',
      url:'',
      sousMenu:[

        {
          id:'41',
          titre:'Fournisseur',
          icon:'fa-solid fa-user-check',
          url:''
        },
        {
          id:'42',
          titre:'Commande fournisseur',
          icon:'fa-solid fa-truck',
          url:''
        }
      ]
    },
    {
      id:'5',
      titre:'Parametrage',
      icon:'fa-solid fa-gears',
      url:'',
      sousMenu:[

        {
          id:'51',
          titre:'Categories',
          icon:'fa-solid fa-screwdriver-wrench',
          url:''
        },
        {
          id:'52',
          titre:'Utilisateurs',
          icon:'fa-solid fa-users-line',
          url:''
        }
      ]
    },
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {

    this.router.navigate([url]);
  }
}
