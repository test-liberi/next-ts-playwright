import sql from "sqlite3";

const sqlite3 = sql.verbose();

const db = new sqlite3.Database(
    "./medicals.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
     
      if (err) {
        return console.error(err.message);
      } else {
        console.log("Connected to the SQLite database.");
      }
    }
  );

  db.serialize(() => {
    // create table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS drugs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name_en TEXT,
            name_fr TEXT,
            Type VARCHAR,
            Category VARCHAR,
            "Max Allowed Qty" VARCHAR,
            Unit VARCHAR,
            Added DATE,
            Description TEXT
          )`,
      (err) => {
        // Error handling for table creation
        if (err) {
          return console.error(err.message);
        }
        console.log("Created drugs table");


        // Close the database connection
        db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Closed the database connection.");
        });
      }
    );
  });