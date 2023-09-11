import {Injectable} from "@angular/core";

export interface Menu{
  state:string;
  name:string;
  type:string;
  icon:string;
  role:string;
}
const MENUITEMS=[
  {state:'dashboard',name:'dashboard',type:'link',icon:'dashboard',role:''},
  {state:'manageUsers',name:'Manage Users',type:'link',icon:'people',role:''}

]
@Injectable()
export class MenuItems{
  getMenuItems():Menu[]{
    return MENUITEMS
  }
}
