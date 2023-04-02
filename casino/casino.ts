import {Roulette} from "./ruleta"
import {Craps} from "./craps"

export class Casino{
    private name: string;
    private adress: string;
    private isOpen: boolean;
    private roulette: Roulette;
    private craps: Craps

    constructor(name: string, adress: string, isOpen: boolean, roulette: Roulette, craps: Craps){
        this.name = name;
        this.adress = adress;
        this.isOpen = isOpen;
        this.roulette = roulette;
        this.craps = craps 
    }

    getInfo(): Casino{
        return this;
    }

}
