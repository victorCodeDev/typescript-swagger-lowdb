export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Clientes API",
            version: "1.0.0",
            description: "Simple API de express"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis:["./src/routes/*.ts"]
}