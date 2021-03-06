import React, { Component } from "react";
import { MyContext } from "../context/myContext";
import { Panel } from "../components/panel";
import { Module } from "../components/image";

export default class StudentHome extends Component {
	static contextType = MyContext;

	constructor(props) {
		super(props);

		this.state = {
			modules: [],
			toggle: false,
		};
	}

	componentDidMount() {
		/*
         * Make an API call to update the module dropdown
         
         axios.get(`url_to_rest_api`)
            .then(res => {
             const modules = res.data;
             this.setState({ modules: modules });
        })
        */

		/*
		 * Dummy data for now
		 */
		const modules = ["ICT2101", "ICT2102", "ICT2103"];

		this.setState({
			modules: modules,
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<>
				<Panel>
					<div className="fb fb-row fb-wrap fb-center fb-se">
						<label className="display-1 text-white text-center fb-fw">My Modules</label>
						<div className="fb fb-row fb-se">
							<Module src="/img/mysql.jpg" label="ICT2103" href="view/module/1" onClick={this.props.onModuleSelect} id="1" />
							<Module src="/img/mysql.jpg" label="ICT2103" href="view/module/1" onClick={this.props.onModuleSelect} id="1" />
							<Module src="/img/mysql.jpg" label="ICT2103" href="view/module/1" onClick={this.props.onModuleSelect} id="1" />
						</div>
					</div>
				</Panel>
			</>
		);
	}
}
