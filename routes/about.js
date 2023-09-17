const express = require('express');
const router = express.Router();

// Define la función para seleccionar una imagen al azar
function seleccionarImagenAlAzar(imagenes) {
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

// Lista de URLs de imágenes
var imagenes = [
    'https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/375283500_962995884793566_7334318670345734634_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeH4jjJMbCPXd3EQoOb1rsdBDKyytd99z_QMrLK1333P9Bun202i8c9FnbySVi43aA42SR74-7WDtksWIrlvKG3w&_nc_ohc=WXeQBsX8bXkAX8yVj91&_nc_ht=scontent.fmex26-1.fna&oh=00_AfDeoFCvFaCwJJwecAx9_0GDqUWerdpkrjl-9JhSoDMorQ&oe=6506816A',
    'https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/376234617_962905484802606_294988109443782249_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEoTSuegSr2C0W-09O-CXFFI3Fah8KXH_YjcVqHwpcf9ngYFeJjyhbhrsgR4cht3TQJ0wGkdvN5TJ2U_o6hB_G-&_nc_ohc=aa7AV_I70SwAX9wdXsE&_nc_ht=scontent.fmex26-1.fna&oh=00_AfBO9LoZV8GRo-6tB5IpUHCx6vauoK71s25pgWifMuJDAg&oe=65069B19',
    'https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/377767098_966635074429647_1479219930058632638_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeH0CLfhwLKdl3h48vJv2vWILlVA-wLVh7QuVUD7AtWHtPJR0NW4kff9ZuPaG03f16SPavkkMvOaeFow29RKNVtf&_nc_ohc=yGsUr_HdtSQAX_dgAMl&_nc_ht=scontent.fmex36-1.fna&oh=00_AfCGpF4qq5IoV7cSvi-Dt89_1XMxtrAfUuRwAQX4PgfYPg&oe=650549EA',
    'https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/377447451_966627961097025_7411426129244335220_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGc-mVysj2zczYoY38FlhKbg-0k48QMvkCD7STjxAy-QEEu7Y3RY82lhMTPmKe943hIQqv6WsLsEHT3H4D7ZgLl&_nc_ohc=C3yMc-k-kvEAX_mrrKB&_nc_ht=scontent.fmex23-1.fna&oh=00_AfBYXCYQVdm51XAKCqcS7rmeaY14_7T5W4zmCDWRaxQoFA&oe=650556C8',
    'https://scontent.fmex22-1.fna.fbcdn.net/v/t39.30808-6/378091855_966120514481103_6275407607102999315_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeH66tpqg2371Wpzpjlt5oZSg6UaDAtYvLSDpRoMC1i8tCQZntIlOek2bYRx2lOd5x_IMBDO_rxdJNa7NSojJ-A1&_nc_ohc=VhKl4ciRCtUAX9adI_E&_nc_oc=AQnziWY18ttj5rMnjPlcNgzXcTNMiKspaXwzlo3KaIIbctKORlv0R-1d256zWLbnJ14P2Jg8Uoz5o7BabIxl6_yR&_nc_ht=scontent.fmex22-1.fna&oh=00_AfBWTMeL8mNb4t2dhiky9SaNud_6G4lbAoheJ4_XxUxE7w&oe=650586FD',
    // Agrega más URLs de imágenes aquí
];

const tecInfo = {
    name: "Instituto Tecnológico de Gustavo A Madero",
    description: "El Tecnológico Nacional de México (TecNM) es una Institución de Educación Superior Tecnológica, órgano desconcentrado de la Secretaria de Educación Pública (SEP), que fue creada por decreto presidencial el 23 de julio de 2014. El Instituto Tecnológico de Gustavo A. Madero es uno de los 254 institutos y centros ubicados en todo el país, que tiene presencia en más de 600 localidades, en los 32 estados de todo el país.",
    mission: "“Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional.”",
    values: "*Respeto    *Liderazgo    *Perseverancia    *Responsabilidad",
    //image: imagenAleatoria
};

router.get('/api/tec', function (req, res, next) {
    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];
    res.send({
        tecInfo,
        image: imagenRandom
    });
});

router.get('/tec', function (req, res, next) {
    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];
    res.render('about', {
        ...tecInfo,
        image: imagenRandom
    });
});

module.exports = router;
