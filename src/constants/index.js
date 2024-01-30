// Photography
import bernie from '../../public/images/bernie.jpg'
import pic1 from '../../public/images/pic1.jpg'
import pic2 from '../../public/images/pic2.jpg'
import pic3 from '../../public/images/pic3.jpg'
import pic4 from '../../public/images/pic4.jpg'
import photo1 from '../../public/images/fotografias/05_11_2023.jpg'
import photo2 from '../../public/images/fotografias/05_11_2023_2.jpg'
import photo3 from '../../public/images/fotografias/14_11_2023.jpg'
import photo4 from '../../public/images/fotografias/14_12_23.jpg'
import photo5 from '../../public/images/fotografias/IMG_5229.jpg'
import photo6 from '../../public/images/fotografias/Untitled-1.png'
// import photo7 from '../../public/images/fotografias/'
// import photo8 from '../../public/images/fotografias/'
// import photo9 from '../../public/images/fotografias/'
// import photo10 from '../../public/images/fotografias/'

export const imageLinks = {
    PROFILE_PIC: bernie,
    PIC_1: pic1,
    PIC_2: pic2,
    PIC_3: pic3,
    PIC_4: pic4,
}

export const photography = {
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
    photo5: photo5,
    photo6: photo6,
    photo7: pic1,
    photo8: pic2,
    photo9: pic3,
    photo10: pic4,
}


export const socialLinks = [
    {
        instagramURL: "https://www.instagram.com/bernardosantotirso_/",
        facebookURL: "https://www.facebook.com/bernardo.ribeiro.14"
    }
]

export const emailAddress = {
    email: "taplino@gmail.com",
}

export const videoLinks = {
    URL_1: "https://www.youtube.com/watch?v=FVoTtWoMkaU",
    URL_2: "https://vimeo.com/572113578",
    URL_3: "vid1",
}

export const biographyText = {
    paragraphs: [
        "Bernardo Santo Tirso Ribeiro é ator, nasceu em Aveiro – São Bernardo, em 1995.",
        "Concluiu o curso profissional de artes do espetáculo – interpretação em 2015,no Conservatório de Música da Jobra.",
        "Frequentou aulas de formação musical e trompete na escola PALCO CENTRAL.",
        "Frequentou o primeiro ano de Interpretação na ESMAE.",
        "Licenciou-se em Teatro – variante Luz e Som na ESMAE em 2023.",
        "Participou em vários workshops, dos quais salienta: Julieta Rodrigues e António Oliveira (Teatro Físico), Marcelo Lafontana,\
            Jordi Bertran, Tommy Luther (Manipulação de Formas Animadas), Paulo Ferreira (Interpretação para câmera).",
        "Frequentou a Formação Avançada de Interpretação e Criação Coreográfica (Companhia Instável).",
        "Como ator, já colaborou com: Viv’arte; Cabeças no Ar e Pés na Terra; ASSéDIO; Radar 360o, Companhia Historioscopio, Companhia do Jogo.",
        "No cinema realça a participação no Filme de Animação – RIDE – realizado por Paul Bush em 2017 e a primeira curta metragem realizada por Henrique Vilão “O céu aqui é mais baixo”.",
        "Como possível músico, atuou como baixista em Gold Note Diggers (2012-2015) e foi banjoísta em Mimo’s Dixie Band (2017 – 2019).",
        "Assumiu a direção artística do projeto Erasmus+ “Music For Chameleons” (contava com 60 pessoas de 6 países diferentes)."
    ]
}

export const quotes = {
    author: "O Credo do Lobo",
    quote1: {
        line1: "Respeita os mais velhos",
        line2: "Ensina os mais novos",
        line3: "Coopera com a alcateia",
    },
    quote2: {
        line1: "Brinca quando podes",
        line2: "Caça quando deves",
        line3: "Descansa entretanto",
    },
    quote3: {
        line1: "Partilha os teus afectos",
        line2: "Exprime os teus sentimentos",
        line3: "Deixa a tua marca",
    },
}

export const projectsSubMenu = [
    { href: '/cinema', title: 'Cinema' },
    { href: '/theater', title: 'Teatro' },
    { href: '/light', title: 'Luz' },
    { href: '/photography', title: 'Fotografia' },
    { href: '/staging', title: 'Encenação' },
];

export const projects = [
    { id: 1, title: "Project 1", imageURL: photography.photo1 },
    { id: 2, title: "Project 2", imageURL: photography.photo2 },
    { id: 3, title: "Project 3", imageURL: photography.photo3 },
    { id: 4, title: "Project 4", imageURL: photography.photo4 },
    { id: 5, title: "Project 5", imageURL: photography.photo5 },
    { id: 6, title: "Project 6", imageURL: photography.photo6 },
    { id: 7, title: "Project 7", imageURL: photography.photo7 },
    { id: 8, title: "Project 8", imageURL: photography.photo8 },
    { id: 9, title: "Project 9", imageURL: photography.photo9 },
    { id: 10, title: "Project 10", imageURL: photography.photo10 },
];
