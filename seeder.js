var seeder = require('mongoose-seed')
const db = require('./config/keys').mongoURI;

seeder.connect(db, function() {
    seeder.loadModels([
        'models/Dispensary.js',
        'models/Rating.js'
    ])

    seeder.clearModels(['dispensary'], function() {
        seeder.populateModels(dispensaryData, function() {
            seeder.disconnect()
        })
    })

    seeder.clearModels(['rating'], function() {
        seeder.populateModels(ratingData, function() {
            seeder.disconnect()
        })
    })
})

const dispensaryData = [

    {
        'model' : 'dispensary',
        'documents' : [
            {
                _id: '60633b3910b96e2370668783',
                dispensaryName: 'Sunny Side Shop',
                description: 'Sunnyside is a new kind of medical cannabis shop offering adults 21+ a friendly place to explore high-quality marijuana products to improve everyday wellness.',
                latitude: 40.71535,
                longitude: -73.95827,
                phone: 9177931107,
                address: '178 N 4th St Brooklyn, NY 11211',
                website: 'https://www.sunnyside.shop/',
                avgRating: 4.5
            },
            {
                _id: '60633b3910b96e2370668785',
                dispensaryName: 'Col Care',
                description: 'With a focus on clean cultivation, superior quality, and positive patient outcomes, we offer brands and products that meet high standards of potency, purity, and predictability.',
                latitude: 40.69278,
                longitude: -73.99122,
                phone: 2122710925,
                address: '44 Court St Brooklyn, NY 11201',
                website: 'https://col-care.com/',
                avgRating: 3.8
            },
            {
                _id: '60633b3910b96e2370668784',
                dispensaryName: 'Col Care',
                description: 'With a focus on clean cultivation, superior quality, and positive patient outcomes, we offer brands and products that meet high standards of potency, purity, and predictability.',
                latitude: 40.73279,
                longitude: -73.98674,
                phone: 6464537178,
                address: '212 E 14th St New York, NY 10003',
                website: 'https://col-care.com/',
                avgRating: 3.0
            },
            {
                _id: '60633b3910b96e2370668786',
                dispensaryName: 'BEstores',
                description: 'Be. Brooklyn is your community resource for medical cannabis, CBD and education. We have pharmacists on-site whenever we are open to work through each patients symptoms and treatment plans. We offer discounts for first-time patients, Veterans and those receiving financial assistance through state programs. You must have a valid medical cannabis card to purchase cannabis products, but anyone can come talk to our staff to ask questions about cannabis.',
                latitude: 40.68133,
                longitude: -73.97597,
                phone: 2122573145,
                address: '202 Flatbush Ave Brooklyn, NY 11217',
                website: 'https://bestores.com/',
                avgRating: 5.0
            },
        ]
    }
]

const ratingData = [
    {
        'model': 'rating',
        'documents': [
            {
                user: "60632aeb42e8d0a9a732a82f",
                dispensary: '60633b3910b96e2370668783',
                rating: 5.0,
                review: 'Best experience ever'
            },
            {
                user: "60632aeb42e8d0a9a732a82f",
                dispensary: '60632c5920615babc8f28fec',
                rating: 4.0,
                review: 'Customer service could be better, but their products are top of the line'
            },
            {
                user: "60632b8bb758e0aa6e49ff5d",
                dispensary: '60633b3910b96e2370668785',
                rating: 4.0,
                review: 'A good friend recommended this place'
            },
            {
                user: "60632ca1feabbeac3cbd6a3c",
                dispensary: '60633b3910b96e2370668785',
                rating: 4.0,
                review: 'Wide range of product selection'
            },
            {
                user: "60632ca1feabbeac3cbd6a3c",
                dispensary: '60633b3910b96e2370668784',
                rating: 3.0,
                review: 'It was closed when I went, a little disappointed'
            },
            {
                user: "60632b8bb758e0aa6e49ff5d",
                dispensary: '60633b3910b96e2370668786',
                rating: 5.0,
                review: 'One of the best dispensaries in town'
            },
            
        ]
    }
]