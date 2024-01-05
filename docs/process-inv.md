// routes
get -> buscar perros -> name
https://api.thedogapi.com/v1/breeds/search?q=Affenpinscher

[
    {
        "weight": {
            "imperial": "6 - 13",
            "metric": "3 - 6"
        },
        "height": {
            "imperial": "9 - 11.5",
            "metric": "23 - 29"
        },
        "id": 1,
        "name": "Affenpinscher",
        "bred_for": "Small rodent hunting, lapdog",
        "breed_group": "Toy",
        "life_span": "10 - 12 years",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "origin": "Germany, France",
        "reference_image_id": "BJa4kxc4X"
    }
]   
    image : 
    => buscar imagen -> reference_image_id
    https://api.thedogapi.com/v1/images/BJa4kxc4X
    result image
    {
    "id": "BJa4kxc4X",
    "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X_1280.jpg",
    "breeds": [
        {
            "weight": {
                "imperial": "6 - 13",
                "metric": "3 - 6"
            },
            "height": {
                "imperial": "9 - 11.5",
                "metric": "23 - 29"
            },
            "id": 1,
            "name": "Affenpinscher",
            "bred_for": "Small rodent hunting, lapdog",
            "breed_group": "Toy",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "origin": "Germany, France",
            "reference_image_id": "BJa4kxc4X"
        }
    ],
    "width": 1600,
    "height": 1199
}

    api -> 1 perro -> crear el perro buscado
    en la base datos 

get -> Visualizar la información de los perros.

get -> Filtrarlos.

get -> Ordernarlos.
    -> Base de la base datos

post -> Crear nuevos perros.
    -> Base de la base datos

###
        
        "nombre": "Affenpinscher",
        "altura": 30,
        "peso": 20,
        "anios": "10 - 12 years",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "origin": "Germany, France",
        "reference_image_id": "BJa4kxc4X",
        "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        