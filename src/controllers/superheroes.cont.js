
class SuperHeroesController {
    getHero(req, res, next) {
        try {
            console.log(req.params.id + req.params.nickname);
        
            res.status(200).send({ id:req.params.id, nickname:req.params.nickname });
        } catch (error) {
            next(error);
        }
    }

    createHero(req, res, next) {
        try {
            const heroes = [
                {
                    "id": 1,
                    "nickname": "Superman",
                    "realName": "Clark Kent",
                    "origin": "Krytpon",
                    "description": "Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 2,
                    "nickname": "Spiderman",
                    "realName": "Piter Parker",
                    "origin": "Earth",
                    "description": "Piter Parker was born on the Earth in USA.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 3,
                    "nickname": "Batman",
                    "realName": "Bruce Wein",
                    "origin": "Earth",
                    "description": "Bruce Wein was born on the Earth. He live in New York",
                    "image":"https://www.comicbookraw.com/wp-content/uploads/2020/02/kostyum-novogo-betmena.jpg"
                },
                {
                    "id": 4,
                    "nickname": "Aquamen",
                    "realName": "Artur Karri",
                    "origin": "Earth",
                    "description": "Artur Karri was born on the Earth under the water in Atlantida.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 5,
                    "nickname": "Wolverine",
                    "realName": "James Howlett",
                    "origin": "Earth",
                    "description": "James Howlett was born on the Earth.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 6,
                    "nickname": "Storm",
                    "realName": "Aprill Eliston-Enaharo",
                    "origin": "Earth",
                    "description": "Aprill Eliston-Enaharo was born on the Earth.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 7,
                    "nickname": "Cyclop",
                    "realName": "Skot Sammers",
                    "origin": "Earth",
                    "description": "Skot Sammers was born on the Earth.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 8,
                    "nickname": "Doktor Strendg",
                    "realName": "Benedikt Kamberbetch",
                    "origin": "Earth",
                    "description": "Benedikt Kamberbetch was born on the Earth in USA.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 9,
                    "nickname": "Vanda Maksimoff",
                    "realName": "Elizabet Olsen",
                    "origin": "Earth",
                    "description": "Elizabet Olsen was born on the Earth.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                },
                {
                    "id": 10,
                    "nickname": "Sokol",
                    "realName": "Klint Barton",
                    "origin": "Earth",
                    "description": "Klint Barton was born on the Earth under.",
                    "image":"https://klike.net/uploads/posts/2019-03/1551427576_7.jpg"
                }
            ];
        
            res.status(200).send({ data: [heroes] });
        } catch (error) {
            next(error);
        }
    }

    
    
}

module.exports = new SuperHeroesController();
