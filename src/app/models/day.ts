import { Condition } from "./condition";


export class Day{
    public constructor( public maxtemp_c:string,  public mintemp_c:string, public avgtemp_c:string, public condition:Condition, public avghumidity:string, public maxwind_kph:string){}
}