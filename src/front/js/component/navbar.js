import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import hsImageUrl from "../../img/healthy-space.png";




export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg text-light bg-info bg-opacity-25">
			<div className="container-fluid text-light">
				<Link className="navbar-brand text-info fs-3" to="/"><img src="https://media.discordapp.net/attachments/1199168346034278450/1215533803439919134/nicko.png?ex=65fd1912&is=65eaa412&hm=b5a6b705571022585ffac83c304f0e6b9455643520ea95d386cddd380b8ddc59&=&format=webp&quality=lossless&width=70&height=70"/></Link>
				{
					!!store.user ? (
						<>

							<button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon bg-dark"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav ms-auto">
									<Link to="/busquedareceta" className="nav-link text-dark fs-3 btn btn-outline-success mx-1">Busqueda de recetas</Link>
									<Link to="/calculoplanalimenticio" className="nav-dark text-dark fs-3 btn btn-outline-success mx-1">Calculo Plan alimenticio</Link>
									<Link to="/gastocalorico" className="nav-link text-dark fs-3 btn btn-outline-success mx-1">Calculo Gasto Calorico</Link>
									<Link to="/me" className="nav-link text-dark fs-3 btn btn-outline-success mx-1">Mi cuenta</Link>
									<p className="nav-link text-dark fs-5">{store.user.name}</p>
									<button className="nav-link bg-secondary text-light rounded-3" onClick={actions.logout}>Logout</button>


								</div>
							</div>


						</>
					) : (
						<>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon bg-dark"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div class="navbar-nav ms-auto">
									<Link to="/login" className="nav-link text-dark fs-3 btn btn-outline-success mx-1">Login</Link>
									<Link to="/register" className="nav-link text-dark fs-3 btn btn-outline-success">Register</Link>

								</div>
							</div>
						</>
					)
				}
			</div>
		</nav>
	);
};
