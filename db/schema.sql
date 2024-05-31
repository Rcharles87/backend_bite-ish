DROP DATABASE IF EXISTS bite_ish;
CREATE DATABASE bite_ish;

\c bite_ish;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    user_name TEXT NOT NULL,
    password TEXT NOT NULL,
    phone_num TEXT NOT NULL
);

DROP TABLE IF EXISTS carts;

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    is_active BOOLEAN,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);