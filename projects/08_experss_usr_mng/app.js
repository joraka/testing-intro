const express = require("express");

const port = 3011;
const app = express();

// http://localhost:3011
app.use(express.json());

const db = { max_id: 0, users: [] };

const sayHello = (req, res) => res.status(200).send("Hello world!");
app.get("/v1/hello", sayHello);

// http://localhost:3011/v1/users
app.post("/v1/users", (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "username, email, password fields are mandatory." });
        }

        const user = {
            id: db.max_id + 1,
            username: username.trim(),
            email,
            password
        };

        // username validation: unique
        // username validation: min 3, max 35
        // email validation: unique
        // email validation: keep email format
        // password validation: length 8 and more, only letters and numbers

        db.max_id = user.id;
        db.users.push(user);

        res.status(201).json({
            message: "User created successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/v1/users", (req, res) => {
    res.status(200).json(db.users);
});

app.get("/v1/users/:id", (req, res) => {
    const { id } = req.params;

    const index = db.users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(db.users[index]);
});

// put method with validations:
    // email validation: unique
    // email validation: keep email format
    // password validation: length 8 and more, only letters and numbers

// patch method with validations:
    // email validation: unique
    // email validation: keep email format
    // password validation: length 8 and more, only letters and numbers

// delete method with validations:
    // user id validation

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    // localhost ip address is 127.0.0.1
});

