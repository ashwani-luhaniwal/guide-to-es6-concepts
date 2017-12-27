/**
 * The benefit of decoupling the view from a specific data access strategy is that
 * you can easily change the way you access data without changing anything else in
 * your application. For example, you could use a mock data service for quick 
 * prototyping or for unit testing, and REST-based service for production.
 * Here, we create a mock data service implements the exact same API as REST-based
 * data service we created in employee-service.js
 */

let employees = [
    {
        "id": 1,
        "firstName": "Amy",
        "lastName": "Taylor",
        "phone": "617-567-3254",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
        "id": 2,
        "firstName": "Anup",
        "lastName": "Gupta",
        "phone": "617-564-1258",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    },
    {
        "id": 3,
        "firstName": "Michael",
        "lastName": "Jones",
        "phone": "617-564-9657",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        "id": 4,
        "firstName": "James",
        "lastName": "Kennedy",
        "phone": "617-564-8855",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        "id": 5,
        "firstName": "Jennifer",
        "lastName": "Wu",
        "phone": "617-564-1144",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        "id": 6,
        "firstName": "Caroline",
        "lastName": "Kingsley",
        "phone": "617-564-8855",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        "id": 7,
        "firstName": "Jonathan",
        "lastName": "Bradley",
        "phone": "617-564-9831",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        "id": 8,
        "firstName": "Kenneth",
        "lastName": "Sato",
        "phone": "617-564-4682",
        "picture": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
    }
];

// findAll() returns in-memory array as opposed to making REST call for data.
export let findAll = () => new Promise(resolve => resolve(employees));