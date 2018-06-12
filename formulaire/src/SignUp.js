import React, { Component } from 'react'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            verifPassword: "",
            nom: "",
            prenom: ""

        };
        this.handleMail = this.handleMail.bind(this)
        this.handleMDP = this.handleMDP.bind(this)
        this.handleVMDP = this.handleVMDP.bind(this)
        this.handleNom = this.handleNom.bind(this)
        this.handlePrenom = this.handlePrenom.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleMail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleMDP(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleVMDP(e) {
        this.setState({
            verifPassword: e.target.value
        })
    }

    handleNom(e) {
        this.setState({
            nom: e.target.value
        })
    }
    handlePrenom(e) {
        this.setState({
            prenom: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }




    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h1>{JSON.stringify(this.state)}</h1>
                <label htmlFor="email" >Email</label>
                <input onChange={this.handleMail} type="email" placeholder="Votre email" id="email" required />
                <label >Mot de passe</label>
                <input onChange={this.handleMDP} type="password" placeholder="Mot de passe" id="mdp" required />
                <label >Vérification du Mot de passe</label>
                <input onChange={this.handleVMDP} type="password" placeholder="Mot de passe" id="vmdp" required />
                <label>Nom</label>
                <input onChange={this.handleNom} type="text" placeholder="Mot de passe" id="nom" required />
                <label>Prénom</label>
                <input onChange={this.handlePrenom} type="text" placeholder="Mot de passe" id="prenom" required />
                <input type="submit" value="Soumettre" />
            </form >
        );
    }
}

export default SignUp;