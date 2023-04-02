import CasinoGame from "./juegoDeCasino"

export class Craps extends CasinoGame{
    rollName: string;

    constructor(name: string, bet: number, rollName: string){
        super(name, bet)
        this.rollName= rollName
    };

    getInfo(): Craps{
        return this;
    }
}