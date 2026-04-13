// Funzione per l'ora (già vista)
async function aggiornaOra() {
    const res = await fetch('/ora');
    const json = await res.json();
    document.getElementById('orario').innerText = "Ora del server: " + json.orario;
}

// NUOVA FUNZIONE: Saluto
async function inviaSaluto() {
    // 1. Prendiamo quello che l'utente ha scritto
    const nomeUmano = document.getElementById('input-nome').value;

    if (nomeUmano === "") {
        alert("Ehi, inserisci un nome!");
        return;
    }

    // 2. Chiamiamo il server passando il nome nell'URL (?nome=...)
    const res = await fetch(`/saluta?nome=${nomeUmano}`);
    const json = await res.json();

    // 3. Mostriamo la risposta del server nella pagina
    document.getElementById('risposta-saluto').innerText = json.messaggio;
}

async function somma() {
    // 1. Prendiamo i numeri dagli input
    const n1 = document.getElementById('input-numero1').value;
    const n2 = document.getElementById('input-numero2').value;

    if (n1 === "" || n2 === "") {
        alert("Inserisci entrambi i numeri!");
        return;
    }

    // 2. Chiamata al server
    const res = await fetch(`/somma?numero1=${n1}&numero2=${n2}`);
    const json = await res.json();

    // 3. Mostriamo il risultato
    document.getElementById('risultato-somma').innerText =
        "Risultato: " + json.risultato;

}

async function sottrazione() {
    // 1. Prendiamo i numeri dagli input
    const n1 = document.getElementById('input-numero1').value;
    const n2 = document.getElementById('input-numero2').value;

    if (n1 === "" || n2 === "") {
        alert("Inserisci entrambi i numeri!");
        return;
    }

    // 2. Chiamata al server
    const res = await fetch(`/sottrazione?numero1=${n1}&numero2=${n2}`);
    const json = await res.json();

    // 3. Mostriamo il risultato
    document.getElementById('risultato-sottrazione').innerText =
        "Risultato: " - json.risultato;

}
// Colleghiamo i bottoni alle funzioni
document.getElementById('btn-ora').addEventListener('click', aggiornaOra);
document.getElementById('btn-saluto').addEventListener('click', inviaSaluto);
document.getElementById('btn-somma').addEventListener('click', somma);
document.getElementById('btn-sottrazione').addEventListener('click', sottrazione);