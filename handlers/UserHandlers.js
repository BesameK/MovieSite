const database = require("../mock/database.js");

exports.allUsersHandler = (req, res) => {
    res.json({
        status: "success",
        data: database.users,
    });
};

exports.newUserHandler = (req, res) => {
    /* JSON მაგალათი postman-ისთვის:
      {
          "id": 3,
          "username": "Gio",
          "password": "1212",
          "age": 21
  
      }
  */
    let exists = false;
    for (let user of database.users) {
        if (req.body.username === user.username) {
            exists = true;
            res.json({
                status: "error",
                message: "user with this username already exists",
            });
            return;
        }
    }
    if (
        req.body != null &&
        req.body.username != null &&
        req.body.password != null &&
        req.body.age != null &&
        !exists
    ) {
        const newUser = {
            id: database.users[database.users.length - 1].id + 1,
            username: req.body.username,
            password: req.body.password,
            age: req.body.age,
        };
        database.users.push(newUser);
        res.json({
            status: "success",
            message: "added successfully",
        });
    } else {
        res.json({
            status: "error",
            message: "happend something wrong",
        });
    }
};

exports.userLoginHandler = (req, res) => {
    // მაგალითი JSON postman-ისთვის
    // {
    //     "username": "Temo",
    //     "password": "1234"
    // }
    for (let user of database.users) {
        if (
            req.body.username === user.username &&
            req.body.password === user.password
        ) {
            res.json({
                status: "success",
                data: user,
            });
            return;
        }
    }
    res.json({
        status: "error",
        message: "cant find user with that username (password)",
    });
};

exports.oneUserHandler = (req, res) => {
    for (let elems of database.users) {
        if (elems.id === Number(req.params.id)) {
            res.json({
                status: "success",
                data: elems,
            });
            return;
        }
    }
    res.json({
        status: "error",
        message: "cant find user",
    });
};

exports.deleteUserHandler = (req, res) => {
    let find = false;
    for (let i = 0; i < database.users.length; i++) {
        if (database.users[i].id === Number(req.params.id)) {
            database.users.splice(i, 1);
            find = true;
        }
    }

    res.end(find ? "successfully removed" : "cant find in database");
};

exports.patchUserHandler = (req, res) => {
    let index = 0;
    for (let elems of database.users) {
        if (elems.id === Number(req.params.id)) {
            elems = {
                ...elems,
                ...req.body,
            };
            database.users[index] = elems;
            res.json({
                status: "success",
                message: "patch successed",
            });
            return;
        }

        index++;
    }
    res.json({
        status: "error",
        message: "cant find user for patch",
    });
};

exports.putUserHandler = (req, res) => {
    let index = 0;
    for (let elems of database.users) {
        if (elems.id === Number(req.params.id)) {
            database.users[index] = req.body;
            res.json({
                status: "success",
                message: "put successed",
            });
            return;
        }

        index++;
    }
    res.json({
        status: "error",
        message: "cant find user for put",
    });
};
