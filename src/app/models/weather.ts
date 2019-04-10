import { Location } from "./location";
import { Current } from "./current";
import { Forecast } from "./forecast";


export class Weather{
    public constructor(public location:Location,public current:Current,public forecast:Forecast){}
}