import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-success text-light">
			<div className="container-fluid text-light">
				<a className="navbar-brand text-light fs-3" href="#">Healthy Space</a>
				{
					!!store.user ? (
						<>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav ms-auto">
									<Link to="/busquedareceta" className="nav-link text-info fs-5">Busqueda de recetas</Link>
									<Link to="/calculoplanalimenticio" className="nav-link text-info fs-5">Calculo Plan alimenticio</Link>
									<Link to="/gastocalorico" className="nav-link text-info fs-5">Calculo Gasto Calorico</Link>
									<p className="nav-link text-info fs-5">{store.user.name}</p>
									<button className="nav-link bg-secondary text-light rounded-3" onClick={actions.logout}>Logout</button>


								</div>
							</div>


						</>
					) : (
						<>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav ms-auto">
									<Link to="/login" className="nav-link text-info fs-5">Login</Link>
									<Link to="/register" className="nav-link text-info fs-5">Register</Link>

								</div>
							</div>
						</>
					)
				}
			</div>
		</nav>
	);
};
