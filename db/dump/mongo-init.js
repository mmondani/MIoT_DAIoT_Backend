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