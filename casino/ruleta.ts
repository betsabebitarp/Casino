import CasinoGame from "./juegoDeCasino"


export class Roulette extends CasinoGame {
    number: number;
    isRed: boolean;

    constructor(name: string, bet: number, number: number, isRed: boolean){
        super(name, bet)
        this.number = number;
        this.isRed = isRed
    };

getInfo(): Roulette {
    return this;
}

}