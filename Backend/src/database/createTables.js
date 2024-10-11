const sqlite3 = require('sqlite3').verbose();
const dbPath = 'src/database/UASDB.db';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('no connect', err.message);
    } else {
        console.log('connected to DB');
    }
});

const createEngineTable = () => {
    const queryEngines = `CREATE TABLE IF NOT EXISTS Engines (
	Id	INTEGER NOT NULL UNIQUE,
	Name TEXT NOT NULL,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    Watt INTEGER,
    Volt INTEGER,
    Amper INTEGER,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryAutopilots = `CREATE TABLE IF NOT EXISTS Autopilots (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const querySpeedControllers = `CREATE TABLE IF NOT EXISTS SpeedControllers (
	Id	INTEGER NOT NULL UNIQUE,
	Name TEXT NOT NULL,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    Watt INTEGER,
    Volt INTEGER,
    Amper INTEGER,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryGNSSModules = `CREATE TABLE IF NOT EXISTS GNSSModules (
	Id	INTEGER NOT NULL UNIQUE,
	Name TEXT NOT NULL,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryRadioModules = `CREATE TABLE IF NOT EXISTS RadioModules (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryPitots = `CREATE TABLE IF NOT EXISTS Pitots (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryNotebooks = `CREATE TABLE IF NOT EXISTS Notebooks (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;

    const queryPedistals = `CREATE TABLE IF NOT EXISTS Pedistals (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	SerialNumber TEXT NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY("Id" AUTOINCREMENT)
    );
`;
    const queryUAVs = `CREATE TABLE IF NOT EXISTS UAVs (
	Id	INTEGER NOT NULL UNIQUE,
	Description	TEXT NOT NULL,
	UAVNumber INTEGER NOT NULL,
    Engine INTEGER NOT NULL UNIQUE,
	Autopilot INTEGER NOT NULL UNIQUE,
    RadioModule INTEGER NOT NULL UNIQUE,
    GNSSModule INTEGER NOT NULL UNIQUE,
    SpeedController INTEGER NOT NULL UNIQUE,
    OnWarehouse INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY("Id" AUTOINCREMENT),
    FOREIGN KEY("Autopilot") REFERENCES Autopilots(Id),
    FOREIGN KEY("RadioModule") REFERENCES RadioModules(Id),
    FOREIGN KEY("GNSSModule") REFERENCES GNSSModules(Id),
    FOREIGN KEY("SpeedController") REFERENCES SpeedControllers(Id),
    FOREIGN KEY("Engine") REFERENCES Engines(Id)
    );
`;

    const queryArray = [queryEngines,
        queryAutopilots,
        querySpeedControllers,
        queryGNSSModules,
        queryRadioModules,
        queryPitots,
        queryNotebooks,
        queryPedistals,
        queryUAVs
    ];

    queryArray.forEach(runQuery);
};

const runQuery = (query) => {
    db.serialize(() => {
        db.run(query, (err) => {
            if (err) {
                console.error('error:', err.message);
            } else {
                console.log("table created");
            }
        })
    })
};

const createTables = () => {
    createEngineTable();
};

module.exports = {
    createTables
};