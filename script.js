/* Reset generale */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #fcfbfa;
    color: #333;
}

/* Navigazione */
.navbar {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    z-index: 10;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}

.navbar nav a, .lang-selector {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-left: 20px;
    text-transform: uppercase;
}

/* Sezione Principale con Sfondo */
.hero-section {
    position: relative;
    height: 100vh;
    /* Sostituisci 'background.jpg' con il link della tua foto di sfondo */
    background: url('background.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25); /* Scurisce leggermente l'immagine per leggere i testi */
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
}

.logo {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin-bottom: 30px;
}

.names {
    font-family: 'Cinzel', serif;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 2px;
}

.and {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.5rem;
}

.date {
    font-size: 1.2rem;
    letter-spacing: 4px;
    margin: 30px 0;
}

.quote {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 40px;
    opacity: 0.9;
}

/* Contatore */
.countdown-container {
    margin-bottom: 40px;
}

.faltan {
    font-size: 0.8rem;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.time-box span {
    display: block;
    font-size: 2rem;
    font-family: 'Cinzel', serif;
}

.time-box small {
    font-size: 0.65rem;
    letter-spacing: 1px;
    opacity: 0.8;
}

/* Bottone RSVP */
.btn-rsvp {
    display: inline-block;
    padding: 12px 35px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    letter-spacing: 2px;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.btn-rsvp:hover {
    background: white;
    color: #333;
}

/* Griglia inferiore informativa */
.info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #f4ede4;
    padding: 40px 20px;
    text-align: center;
    border-top: 1px solid #e1d6c7;
}

.grid-item {
    padding: 20px;
    border-right: 1px solid #e1d6c7;
}

.grid-item:last-child {
    border-right: none;
}

.grid-item h3 {
    font-family: 'Cinzel', serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
    margin-bottom: 15px;
    color: #555;
}

.grid-item p {
    font-size: 0.8rem;
    color: #777;
    line-height: 1.6;
}

/* Ottimizzazione Mobile */
@media (max-width: 768px) {
    .info-grid {
        grid-template-columns: 1fr;
    }
    .grid-item {
        border-right: none;
        border-bottom: 1px solid #e1d6c7;
    }
    .navbar nav {
        display: none; /* Nasconde il menu esteso su mobile per semplicità */
    }
    .names {
        font-size: 2.8rem;
    }
}
