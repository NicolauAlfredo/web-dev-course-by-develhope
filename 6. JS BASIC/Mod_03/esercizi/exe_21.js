const tariffa = "FB";

switch (tariffa) {
  case "BB":
    console.log("Prezzo della camera: 50€");
    break;
  case "HB":
    console.log("Prezzo della camera: 80€");
    break;
  case "FB":
    console.log("Prezzo della camera: 100€");
    break;
  default:
    console.log("Tariffa non valida");
}