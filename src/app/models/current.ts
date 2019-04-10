import { Condition } from "./condition";

export class Current{
    public constructor(public temp_c:number, public condition:Condition, public last_updated:Date){}
}