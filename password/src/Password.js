import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mdp: "",
            faible: true
        };
        this.password = this.password.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit() {
        console.log("coucou");
        if (this.state.faible === true) {
            alert("Votre mot de passe est trop faible ")
        }
    }
    password(e) {
        let faible = new RegExp(/^[a-z0-9]{1,5}$/, 'g');
        if (faible.test(e.target.value) === true) {
            this.setState({
                mdp: e.target.value, faible: true
            })
        } else {
            this.setState({
                mdp: e.target.value, faible: false
            })

        }

    }


    render() {

        let faible = new RegExp(/^[a-z0-9]{1,5}$/, 'g');
        let moyen = new RegExp(/^[a-zA-Z0-9]{7,20}$/, 'g');
        let fort = new RegExp(/^[a-z0-9\W]{7,20}$/, 'gi');

        let messFaible = "";
        let messMoyen = "";
        let messFort = "";

        if (faible.test(this.state.mdp) === true) {
            messFaible = "Votre mot de passe est faible"
        } else if (moyen.test(this.state.mdp) === true) {
            messMoyen = "Votre mot de passe est moyen"
        } else if (fort.test(this.state.mdp) === true) {
            messFort = "Votre mot de passe est fort"
        }

        else {
            messFort = "";
        }

        return (
            <div>
                <label htmlFor="userPassword">Mot de passe </label>
                <input id="userPassword" type="password" autocomplete="current-password" onChange={this.password} />
                <button type="submit" onClick={() => this.handleSubmit()}>Envoyer</button>
                {messFaible !== "" ? <div className="alert alert-warning">{messFaible}</div> : null}
                {messMoyen !== "" ? <div className="alert alert-warning">{messMoyen}</div> : null}
                {messFort !== "" ? <div className="alert alert-warning">{messFort}</div> : null}
            </div>


        );
    }
}

export default Password;