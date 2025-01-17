import * as React from "react";
import axios from "axios";
import "../css/Fieldlogin.css";

export default class Fieldlogin extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		if (localStorage.getItem('user_token') != null) {
			window.location = '/'
		}
	}

	handleSubmit(e) {
		e.preventDefault()

		let username = this.state.username
		let password = this.state.password

		axios.post('http://localhost:8000/api/auth/login', {
			email: username,
			password: password
		}, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "*/*"
			}
		}).then((res) => {


			if(res.data.status !== 'success'){
				return
			}


			let token = res.data.token

			localStorage.setItem('user_token', token)



			if (token) {
				window.location = '/'
			}


		}).catch((err) => {
			console.error(err)
		});
	}

	handleChange(e) {
		e.preventDefault()

		let targetName = e.target.name
		let value = e.target.value

		if (targetName === 'login') {
			this.setState({
				username: value
			})
		}

		if (targetName === 'password') {
			this.setState({
				password: value
			})
		}
	}

	render() {
		return (
			<div className="connexion">
				<div className="fieldlogin">
					<form onSubmit={this.handleSubmit} className="connexion-form">
						<div className="id">
							<label for="login">Identifiant</label>
							<input
								type="email"
								id="login"
								name="login"
								placeholder="Enter your mail adress"
								onChange={this.handleChange}
							/>
							<div className="remember">
								<input type="checkbox" id="check-login" name="login" />
								<label id="check-login-label">
									Se souvenir de moi
								</label>
							</div>
						</div>

						<div className="password">
							<label for="password">Mot de passe</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter your Password"
								onChange={this.handleChange}
							/>
							<label id="password-label" for="password">
								Mot de passe oublier?
							</label>
						</div>
						<div className="submit">
							<button id="submit">Connexion</button>
							<a href="/">Créer un nouveau compte</a>
						</div>
					</form>
				</div>

			</div>
		);
	}
}
