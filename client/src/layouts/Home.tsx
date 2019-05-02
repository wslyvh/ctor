import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import "../assets/styles/default.scss";

class Home extends Component<RouteComponentProps> {
	public render() {
		return (
			<>
				<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
					<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
						Ctor
					</a>
					<ul className="navbar-nav px-3">
						<li className="nav-item text-nowrap">
							<a className="nav-link" href="#">
								Sign out
							</a>
						</li>
					</ul>
				</nav>

				<div className="container-fluid">
					<div className="row">
						<nav className="col-md-2 d-none d-md-block bg-light sidebar">
							<div className="sidebar-sticky">
								<ul className="nav flex-column">
									<li className="nav-item">
										<a className="nav-link active" href="#">
											<span data-feather="home" />
											Dashboard <span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<span data-feather="file" />
											My Contracts
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<span data-feather="shopping-cart" />
											Verify
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<span data-feather="users" />
											Deploy
										</a>
									</li>
								</ul>
							</div>
						</nav>

						<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
								<h1 className="h2">Dashboard</h1>
							</div>

							<h2>Section title</h2>
							<div className="table-responsive">
								<table className="table table-striped table-sm">
									<thead>
										<tr>
											<th>#</th>
											<th>Header</th>
											<th>Header</th>
											<th>Header</th>
											<th>Header</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1,001</td>
											<td>Lorem</td>
											<td>ipsum</td>
											<td>dolor</td>
											<td>sit</td>
										</tr>
										<tr>
											<td>1,002</td>
											<td>amet</td>
											<td>consectetur</td>
											<td>adipiscing</td>
											<td>elit</td>
										</tr>
										<tr>
											<td>1,003</td>
											<td>Integer</td>
											<td>nec</td>
											<td>odio</td>
											<td>Praesent</td>
										</tr>
									</tbody>
								</table>
							</div>
						</main>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
