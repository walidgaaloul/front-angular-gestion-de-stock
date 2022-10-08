export interface Menu{
  id?:string;
  titre?:string;
  icon?:string;
  url? : string;
  sousMenu?:Array<Menu>;

}
//POUR rendre ces champs nom obligatoir en mettre "?"
