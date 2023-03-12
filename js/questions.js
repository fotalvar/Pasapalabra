const questions = [
    {
        letter: "a",
        answer: [
            "amor",
            "abundancia",
            "aventura"
        ],
        status: 0,
        question: [
            "Con la A. Sentimiento de cariño y afecto hacia otra persona.",
            "Con la A. Cantidad suficiente o excesiva de algo.",
            "Con la A. Experiencia emocionante y riesgosa"
        ],
    },
    {
        letter: "b",
        answer: [
            "belleza",
            "bondad",
            "bienestar"
        ],
        status: 0,
        question: [
            "Con la B. Cualidad de algo o alguien que produce una sensación de agrado y admiración.",
            "Con la B. Cualidad de una persona que actúa con generosidad y compasión hacia los demás.",
            "Con la B. Estado de salud y felicidad."
        ],
    },
    {
        letter: "c",
        answer: [
            "coraje",
            "creatividad",
            "comunidad"
        ],
        status: 0,
        question: [
            "Con la C. Valor y determinación para enfrentar situaciones difíciles.",
            "Con la C. Capacidad para generar ideas y soluciones originales.",
            "Con la C. Grupo de personas que comparten intereses y objetivos comunes."
        ],
    },
    {
        letter: "d",
        answer: [
            "diversión",
            "dignidad",
            "descanso"
        ],
        status: 0,
        question: [
            "Con la D. Actividad que produce alegría y entretenimiento.",
            "Con la D. Respeto y valor propio de una persona.",
            "Con la D. Tiempo de reposo y relajación para recuperar energías."
        ],
    },
    {
        letter: "e",
        answer: [
            "esperanza",
            "empatía",
            "exito"
        ],
        status: 0,
        question: [
            "Con la E. Sentimiento de optimismo y confianza en el futuro.",
            "Con la E. Capacidad para entender y compartir los sentimientos de otras personas.",
            "Con la E. Logro de metas y objetivos personales o profesionales."
        ],
    },
    {
        letter: "f",
        answer: [
            "felicidad",
            "fortaleza",
            "familia"
        ],
        status: 0,
        question: [
            "Con la F. Estado emocional de satisfacción y alegría.",
            "Con la F. Capacidad para resistir y superar situaciones difíciles.",
            "Con la F. Grupo de personas unidas por lazos de sangre o afecto."
        ],
    },
    {
        letter: "g",
        answer: [
            "gratitud",
            "generosidad",
            "genuino"
        ],
        status: 0,
        question: [
            "Con la G. Sentimiento de agradecimiento hacia alguien o algo.",
            "Con la G. Actitud de dar y compartir con los demás.",
            "Con la G. Auténtico y sincero en sentimientos y acciones."
        ],
    },
    {
        letter: "h",
        answer: [
            "honestidad",
            "humildad",
            "humor"
        ],
        status: 0,
        question: [
            "Con la H. Cualidad de una persona que actúa con verdad y transparencia.",
            "Con la H. Virtud que consiste en reconocer nuestras limitaciones y debilidades.",
            "Con la H. Capacidad de reír y encontrar lo divertido en situaciones cotidianas."
        ],
    },
    {
        letter: "i",
        answer: [
            "inteligencia",
            "ilusión",
            "integridad"
        ],
        status: 0,
        question: [
            "Con la I. Capacidad para comprender y aprender con rapidez y eficacia.",
            "Con la I. Esperanza y entusiasmo por algo que deseamos alcanzar.",
            "Con la I. Coherencia y honestidad en nuestras acciones y principios."
        ],
    },
    {
        letter: "j",
        answer: [
            "justicia",
            "júbilo",
            "juventud"
        ],
        status: 0,
        question: [
            "Con la J. Equidad y rectitud en el trato y la aplicación de las leyes.",
            "Con la J. Alegría y satisfacción por un logro o acontecimiento importante.",
            "Con la J. Etapa de la vida que se caracteriza por la vitalidad y energía."
        ],
    },
    {
        letter: "k",
        answer: [
            "kárate",
            "kermesse",
            "kiwi"
        ],
        status: 0,
        question: [
            "Con la K. Arte marcial japonés que se enfoca en golpes con las manos y pies.",
            "Con la K. Evento de caridad y entretenimiento que se realiza en una iglesia o escuela.",
            "Con la K. Fruta pequeña, ovalada y de piel marrón con interior verde y sabor dulce."
        ],
    },
    {
        letter: "l",
        answer: [
            "libertad",
            "lealtad",
            "liderazgo"
        ],
        status: 0,
        question: [
            "Con la L. Derecho a la independencia y autodeterminación de cada individuo.",
            "Con la L. Fidelidad y compromiso con una causa, persona o grupo.",
            "Con la L. Capacidad de influir y guiar a otros en una dirección determinada."
        ],
    },
    {
        letter: "m",
        answer: [
            "música",
            "mascota",
            "moda"
        ],
        status: 0,
        question: [
            "Con la M. Arte que se expresa mediante la combinación de sonidos y ritmos.",
            "Con la M. Animal de compañía que se tiene en el hogar.",
            "Con la M. Tendencia o estilo en la vestimenta y el aspecto físico."
        ],
    },
    {
        letter: "n",
        answer: [
            "naturaleza",
            "nostalgia",
            "novela"
        ],
        status: 0,
        question: [
            "Con la N. Conjunto de seres vivos y elementos que conforman el medio ambiente.",
            "Con la N. Sentimiento de tristeza o añoranza por algo que ya no está presente.",
            "Con la N. Obra literaria que narra una historia ficticia o basada en hechos reales."
        ],
    },
    {
        letter: "o",
        answer: [
            "ocio",
            "ola",
            "orgullo"
        ],
        status: 0,
        question: [
            "Con la O. Tiempo libre que se dedica a actividades de entretenimiento y descanso.",
            "Con la O. Movimiento ondulatorio que se produce en la superficie del mar.",
            "Con la O. Sentimiento de satisfacción y autoestima por las propias acciones o logros."
        ],
    },
    {
        letter: "p",
        answer: [
            "palabra",
            "paz",
            "película"
        ],
        status: 0,
        question: [
            "Con la P. Unidad lingüística que tiene un significado.",
            "Con la P. Estado de tranquilidad y armonía entre las personas o los países.",
            "Con la P. Obra cinematográfica que cuenta una historia a través de imágenes en movimiento."
        ],
    },
    {
        letter: "q",
        answer: [
            "química",
            "queja",
            "quinteto"
        ],
        status: 0,
        question: [
            "Con la Q. Ciencia que estudia la composición, estructura y propiedades de la materia.",
            "Con la Q. Manifestación de descontento o malestar por algo que no se considera adecuado.",
            "Con la Q. Grupo musical compuesto por cinco instrumentos o cantantes."
        ],
    },
    {
        letter: "r",
        answer: [
            "reloj",
            "risa",
            "rio"
        ],
        status: 0,
        question: [
            "Con la R. Instrumento que se utiliza para medir el tiempo.",
            "Con la R. Reacción emocional que se produce ante algo divertido o gracioso.",
            "Con la R. Corriente de agua que fluye de forma natural y desemboca en el mar o en un lago."
        ],
    },
    {
        letter: "s",
        answer: [
            "salud",
            "sonrisa",
            "sueño"
        ],
        status: 0,
        question: [
            "Con la S. Estado de bienestar físico, mental y social.",
            "Con la S. Expresión facial que se produce al mostrar alegría o satisfacción.",
            "Con la S. Estado de reposo y relajación en el que se encuentra el cuerpo y la mente durante la noche."
        ],
    }, {
        letter: "t",
        answer: [
            "televisión",
            "trabajo",
            "tiempo"
        ],
        status: 0,
        question: [
            "Con la T. Sistema de transmisión de imágenes y sonidos que se utiliza para la difusión de programas y noticias.",
            "Con la T. Actividad que se realiza para producir bienes o servicios a cambio de una remuneración.",
            "Con la T. Magnitud física que se utiliza para medir la duración o intervalo entre dos sucesos."
        ],
    },
    {
        letter: "u",
        answer: [
            "universo",
            "unico",
            "uva"
        ],
        status: 0,
        question: [
            "Con la U. Conjunto de todo lo que existe, incluyendo el espacio, las estrellas, planetas y galaxias.",
            "Con la U. Que no tiene igual.",
            "Con la U. Fruto de la vid que se utiliza para elaborar vino u otros productos"
        ],
    },
    {
        letter: "v",
        answer: [
            "vida",
            "viaje",
            "ventana"
        ],
        status: 0,
        question: [
            "Con la V. Conjunto de procesos biológicos que caracterizan a los seres vivos.",
            "Con la V. Desplazamiento de una persona o un grupo de personas de un lugar a otro.",
            "Con la V. Abertura en una pared que permite la entrada de luz y aire."
        ],
    },
    {
        letter: "w",
        answer: [
            "wagyu",
            "wuxia",
            "waffle"
        ],
        status: 0,
        question: [
            "Con la W. Raza de vacas japonesas conocida por su carne marmoleada y de alta calidad.",
            "Con la W. Género literario y cinematográfico de artes marciales y fantasía en la cultura china.",
            "Con la W. Postre de origen belga, consistente en una masa cocida en una plancha con relieves que le dan forma de rejilla."
        ],
    },
    {
        letter: "x",
        answer: [
            "xenofobia",
            "xilófono",
            "xenón"
        ],
        status: 0,
        question: [
            "Con la X. Actitud o comportamiento hostil hacia personas o grupos de origen extranjero.",
            "Con la X. Instrumento musical de percusión compuesto por láminas de madera dispuestas en orden de altura.",
            "Con la X. Gas noble de la tabla periódica utilizado en iluminación y en lámparas de plasma."
        ],
    },
    {
        letter: "y",
        answer: [
            "yakitori",
            "yate",
            "yogur"
        ],
        status: 0,
        question: [
            "Con la Y. Plato de origen japonés que consiste en brochetas de pollo asadas a la parrilla.",
            "Con la Y. Embarcación de lujo destinada al ocio y al transporte de personas en alta mar.",
            "Con la Y. Alimento fermentado obtenido a partir de la leche, rico en proteínas y probióticos."
        ],
    },
    {
        letter: "z",
        answer: [
            "zafiro",
            "zapatería",
            "zoología"
        ],
        status: 0,
        question: [
            "Con la Z. Gema preciosa de color azul o incolora, utilizada en joyería y relojería de alta gama.",
            "Con la Z. Establecimiento donde se venden calzados de todo tipo.",
            "Con la Z. Ciencia que estudia los animales y su comportamiento."
        ],
    }

];