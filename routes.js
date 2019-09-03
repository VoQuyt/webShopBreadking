module.exports = function(app) {  
    app.route('/')
        .get(function (req, res) {
            res.render("index")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/index')
        .get(function (req, res) {
            res.render("index")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/blog')
        .get(function (req, res) {
            res.render("blog")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/contact')
        .get(function (req, res) {
            res.render("contact")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/about')
        .get(function (req, res) {
            res.render("about")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/food_menu')
        .get(function (req, res) {
            res.render("food_menu")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/single-blog')
        .get(function (req, res) {
            res.render("single-blog")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });

    app.route('/elements')
        .get(function (req, res) {
            res.render("elements")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });
    
    app.route('/chefs')
        .get(function (req, res) {
            res.render("chefs")
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });
        
}