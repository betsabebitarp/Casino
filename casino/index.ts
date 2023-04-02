import {Roulette} from "./ruleta"
import {Craps} from "./craps"
import {Casino} from "./casino"

const craps1 = new Craps ("Craps", 2000, "Linea de pase");
//console.log(craps1.getInfo());

const roulette1 = new Roulette ("Roulette1", 1500, 4, true);
////console.log(roulette1.getInfo());

const casino01 = new Casino ("Baden-Baden", "Las Vegas", true, roulette1, craps1)
console.log(casino01.getInfo());



