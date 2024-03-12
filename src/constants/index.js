import picBiography01 from '../../public/images/biography01.JPG'
import picBiography02 from '../../public/images/biography02.JPG'
import picContacts from '../../public/images/pic-contacts.jpg'


export const imageLinks = {
    PIC_CONTACTS: picContacts,
    PIC_BIOGRAPHY01: picBiography01,
    PIC_BIOGRAPHY02: picBiography02,
}

export const socialLinks = [
    {
        instagramURL: "https://www.instagram.com/bernardosantotirso_/",
        facebookURL: "https://www.facebook.com/bernardo.ribeiro.14",
        instagramDeveloper: "https://instagram.com/tiagolyner",
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

export const biographyAccordion = [
    {
        title: "Início da Carreira e Educação",
        content: [
            "Bernardo Santo Tirso Ribeiro é ator, nasceu em Aveiro – São Bernardo, em 1995.",
            "Concluiu o curso profissional de artes do espetáculo – interpretação em 2015,no Conservatório de Música da Jobra.",
            "Frequentou aulas de formação musical e trompete na escola PALCO CENTRAL.",
            "Frequentou o primeiro ano de Interpretação na ESMAE.",
        ],
    },
    {
        title: "Formação Avançada e Workshops",
        content: [
            "Licenciou-se em Teatro – variante Luz e Som na ESMAE em 2023.",
            "Participou em vários workshops, dos quais salienta: Julieta Rodrigues e António Oliveira (Teatro Físico), Marcelo Lafontana,\
            Jordi Bertran, Tommy Luther (Manipulação de Formas Animadas), Paulo Ferreira (Interpretação para câmera).",
        ]
    },
    {
        title: "Experiência Profissional em Teatro",
        content: [
            "Frequentou a Formação Avançada de Interpretação e Criação Coreográfica (Companhia Instável).",
            "Como ator, já colaborou com: Viv’arte; Cabeças no Ar e Pés na Terra; ASSéDIO; Radar 360o, Companhia Historioscopio, Companhia do Jogo.",
        ]
    },
    {
        title: "Experiência em Cinema e Música",
        content: [
            "No cinema realça a participação no Filme de Animação – RIDE – realizado por Paul Bush em 2017 e a primeira curta metragem realizada por Henrique Vilão “O céu aqui é mais baixo”.",
            "Como possível músico, atuou como baixista em Gold Note Diggers (2012-2015) e foi banjoísta em Mimo’s Dixie Band (2017 – 2019).",
            "Assumiu a direção artística do projeto Erasmus+ “Music For Chameleons” (contava com 60 pessoas de 6 países diferentes)."
        ]
    }]

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
    { href: '/staging', title: 'Encenação' },
];