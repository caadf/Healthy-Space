import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Healty Space</a>
				{
					!!store.user ? (
						<>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav me-auto">
									<Link to="/perfil" className="nav-link">Perfil</Link>
									<span className='nav-link'>{store?.user?.name || 'Anonimous'}</span>
									<button className="nav-link" onClick={actions.logout}>Logout</button>


								</div>
							</div>


						</>
					) : (
						<>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav">
									<Link to="/login" className="nav-link">Login</Link>
									<Link to="/register" className="nav-link">Register</Link>

								</div>
							</div>
						</>
					)
				}
			</div>
		</nav>
	);
};
