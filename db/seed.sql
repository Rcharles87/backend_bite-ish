\c bite_ish;

INSERT INTO users (first_name, last_name, user_name, password, phone_num) VALUES
('test', 'test', 'besttester', '123456789', '7183201245'),
('Rae', 'Charles', 'rcharles', '1234567890', '6469540083');

INSERT INTO carts (user_id, is_active) VALUES
(1, false),
(1, true),
(2, false),
(2, false),
(2, true);