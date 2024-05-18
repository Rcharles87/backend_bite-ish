DROP DATABASE IF EXISTS bite_ish;
CREATE DATABASE bite_ish;

\c bite_ish;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    user_name TEXT NOT NULL,
    password TEXT NOT NULL,
    phone_num TEXT NOT NULL
);