import * as image from "./imageCoffes";


interface CoffesProps {
    id: number

    image: string
    name: string
    tags: string[]
    text: string  
}

export const Cooffes: CoffesProps[] = [
    {
        id: 1,
        name:"Expresso Tradicional",
        image: image.Image1,
        tags: ["Tradicional", ],
        text: "O tradicional café feito com água quente e grãos moídos"

    },

    {
        id: 2,
        name:"Expresso Americano",
        image: image.Image2,
        tags: ["Tradicional", ],
        text: "Expresso diluído, menos intenso que o tradicional"

    },

    {
        id: 3,
        name:"Expresso Cremoso",
        image: image.Image3,
        tags: ["Tradicional", ],
        text: "Café expresso tradicional com espuma cremosa"

    },

    {
        id: 4,
        name:"Expresso Gelado",
        image: image.Image4,
        tags: ["Tradicional", "Gelado" ],
        text: "Bebida preparada com café expresso e cubos de gelo"
    },

    {
        id: 5,
        name:"Café com Leite",
        image: image.Image5,
        tags: ["Tradicional", "Com Leite" ],
        text: "Meio a meio de expresso tradicional com leite vaporizado"
    },

    {
        id: 6,
        name:"Latte",
        image: image.Image6,
        tags: ["Tradicional", "Com Leite" ],
        text: "Uma dose de café expresso com o dobro de leite e espuma cremosa"
    },

    {
        id: 7,
        name:"Capuccino",
        image: image.Image7,
        tags: ["Tradicional", "Com Leite" ],
        text: "Bebida com canela feita de doses iguais de café, leite e espuma"
    },

    {
        id: 8,
        name:"Macchiato",
        image: image.Image8,
        tags: ["Tradicional", "Com Leite" ],
        text: "Café expresso misturado com um pouco de leite quente e espuma"
    },

    {
        id: 9,
        name:"Mocaccino",
        image: image.Image9,
        tags: ["Tradicional", "Com Leite" ],
        text: "Café expresso com calda de chocolate, pouco leite e espuma"
    },

    {
        id: 10,
        name:"Chocolate Quente",
        image: image.Image10,
        tags: ["Especial", "Com Leite" ],
        text: "Bebida feita com chocolate dissolvido no leite quente e café"
    },

    {
        id: 11,
        name:"Cubano",
        image: image.Image11,
        tags: ["Especial", "Alcoólico", "Gelado" ],
        text: "Drink gelado de café expresso com rum, creme de leite e hortelã"
    },

    {
        id: 12,
        name:"Havaiano",
        image: image.Image12,
        tags: ["Especial", ],
        text: "Bebida adocicada preparada com café e leite de coco"
    },

    {
        id: 13,
        name:"Árabe",
        image: image.Image13,
        tags: ["Especial", ],
        text: "Bebida preparada com grãos de café árabe e especiarias"
    },

    {
        id: 14,
        name:"Irlandês",
        image: image.Image14,
        tags: ["Especial", "Alcoólico" ],
        text: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
    }
]