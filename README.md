<img src="https://user-images.githubusercontent.com/72277593/114740576-faa72a00-9d17-11eb-9cc6-b6548c550c6f.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="220" height="100" />

![GitHub repo size](https://img.shields.io/github/repo-size/gretahayes19/altus-empire)
![GitHub Contributors](https://img.shields.io/github/contributors/gretahayes19/altus-empire)
![GitHub Issues](https://img.shields.io/github/issues/gretahayes19/altus-empire)
![GitHub Forks](https://img.shields.io/github/forks/gretahayes19/altus-empire?style=social)
![GitHub Stars](https://img.shields.io/github/stars/gretahayes19/altus-empire?style=social)


Altus Empire's live link https://altusempire.herokuapp.com/#/


## Architecture and Technology

The MERN stack was utilized to create `altus-empire`. These include MongoDB Atlas as NoSQL database, Express.js as a framework for Node.js, and React/Redux for state management. Also, Google Maps API allows an embedded interactive map, and Amazon Web Services S3 allows for dispensary image storage and display.


## Main features

Altus Empire includes an interactive search bar for users to query the dispensary database. This is done by setting a local state within a `SearchBar` class and setting functions to update this state accordingly.
When you set the state with `this.setState()` it creates another render of the component. This caused the dispensaries to be fetched repeatedly. This issue then caused an extra re-render on the map. To solve this issue, debounce is utilized to solve the issue of repeated re-rendering and prevent instant state change.

```
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            focus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.storeKeyWord = debounce(this.props.storeKeyWord, 200)
    }

    update(e) {
        this.setState({ query: e.target.value }, this.handleSubmit);
    }

    handleFocus() {
        this.setState({ focus: true })
    }

    handleBlur() {
        this.setState({ focus: false })
    }

    handleSubmit(e) {
        if (this.state.query === "") {
            this.props.fetchDispensaries();
        } else this.props.fetchSearchByNameDispensary(this.state.query)
    }

    render() {

        const { results } = this.props

        return (
                <div className="search-bar" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <form onSubmit={this.handleSubmit} className="search-input">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Find a dispensary near you" onChange={this.update} />
                        <button className="map-search-button" onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
        )
    }
}
```

On line 85, we ensured that users would not be able to register with the same e-mail. This would ensure users to not be able to create more than one account per e-mail. A status 400 on line 88 would be returned, otherwise, the user would be created if all the credentials were entered correctly. ![Bcrypt](https://www.npmjs.com/package/bcrypt) is used for the authentication process.
```
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    dob: req.body.dob,
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, username: user.username };

                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch(err => res.send(err));
                    })
                })
            }
        })
})
```

### Installing `altus-empire`

To install `altus-empire`, follow these steps for Linux and macOS:
```
# Clone repository:

git clone https://github.com/gretahayes19/altus-empire.git

# Run the following command in both the root directory and frontend directory:

npm install 
```


### Contributing to `altus-empire`
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to `altus-empire`, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin altus-empire/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


### Contributors

Thanks to the following people who have contributed to this project:

* [@yangc95](https://github.com/yangc95) 📖🐛
* [@hankc97](https://github.com/hankc97) 📖🐛
* [@kevinxmao](https://github.com/kevinxmao) 📖🐛
