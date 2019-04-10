import { Astro } from "./astro";
import { Day } from "./day";

export class NumberOfDay{
    public constructor(public day:Day, public date:Date, public astro:Astro){}
}