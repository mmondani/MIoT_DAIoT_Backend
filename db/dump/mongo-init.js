db.createUser(
    {
        user: "iotuser",
        pwd: "iot123",
        roles: [
            {
                role: "readWrite",
                db: "iot"
            }
        ]
    }
);

db.createCollection("iotAccion");
db.createCollection("iotAtr");
db.createCollection("iotDato");
db.createCollection("iotDisp");
db.createCollection("iotEmpresa");
db.createCollection("iotUser");

// Se agrega el usuario admin a la fuerza. El password se obtuvo encriptando admin123 en la web https://bcrypt-generator.com/
db.iotUser.insertOne({name: "admin", email:"admin@admin.com", password: "$2a$10$iyaA/ZYLqWyvqWhQUo45eusRWhfP24t5v9JdEMnvnHABI77juFMaq", rol: "admin"});