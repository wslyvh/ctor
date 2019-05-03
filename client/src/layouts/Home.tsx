import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import "../assets/styles/default.scss";
import Sidebar from "../components/layoutComponents/Sidebar";
import TopNavbar from "../components/layoutComponents/TopNavbar";

class Home extends Component<RouteComponentProps> {
	public render() {
		return (
			<>
				<TopNavbar />

				<div className="container-fluid">
					<div className="row">
						<Sidebar />

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
