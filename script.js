const frases = [
    "Acredite no seu potencial!",
    "Cada dia é uma nova oportunidade.",
    "Nunca pare de aprender.",
    "Pequenos passos também levam longe.",
    "O esforço de hoje constrói o amanhã."
];

function sortearFrase() {
    const sorteio = Math.floor(
        Math.random() * frases.length
    );

    document.getElementById("frase").innerText =
        frases[sorteio];
}