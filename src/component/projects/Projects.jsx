import React, { Component } from "react";
import Header from "../../templates/header/header";
import axios from "axios";
import If from "./IfListCard";

import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";

import "../../css/Projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.handleClickOrder = this.handleClickOrder.bind(this);
    this.handleListOrGrid = this.handleListOrGrid.bind(this);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      projects: [],
      viewCardOrList: "true",
      search: "",
      typeOrder: "",
      ascdesc: true,
      btnAscDesc: "btn-order-asc",
      selectGrid: "btn-grid-selected",
      selectList: "btn-list-normal"
    };
  }

  componentDidMount() {
    const url = "http://staging-enterprise/saraapi/api/Project/GetProjects";
    let token = window.localStorage.getItem("token");

    const config = axios.create({
      withCredentials: true,
      headers: {
        "Content-Type": "x-www-form-urlencoded",
        dataType: "json",
        Authorization: `Bearer ${token}`
      }
    });

    config.get(url)
      .then(res => {
        this.setState({ projects: res.data.projects });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  sortProjects(type, order) {
    let vet = [];

    if (type) {
      switch (order) {
        case "name":
          vet = this.state.projects.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
          this.setState({ projects: vet });
          break;
        case "startDate":
          vet = this.state.projects.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
          this.setState({ projects: vet });
          break;
        case "endDate":
          vet = this.state.projects.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
          this.setState({ projects: vet });
          break;
        default:
          vet = this.state.projects.sort((a, b) => {return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;});
          this.setState({ projects: vet });
          break;
      }
    } else {
      switch (order) {
        case "name":
          vet = this.state.projects.sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()));
          this.setState({ projects: vet });
          break;
        case "startDate":
          vet = this.state.projects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
          this.setState({ projects: vet });
          break;
        case "endDate":
          vet = this.state.projects.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
          this.setState({ projects: vet });
          break;
        default:
          vet = this.state.projects.sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;});
          this.setState({ projects: vet });
          break;
      }
    }
  }

  handleChangeOrder = e => {
    let order = e;
    let type = this.state.ascdesc;
    this.setState({ typeOrder: order },() => this.sortProjects(type, order));
  };

  handleClickOrder = () => {
    let type = this.state.ascdesc;
    let order = this.state.typeOrder;

    let ascDesc = "";
    (type) ? (ascDesc = "btn-order-desc"): (ascDesc = "btn-order-asc");

    this.setState(
      {
        btnAscDesc: ascDesc,
        ascdesc: !type
      },
      () => this.sortProjects(this.state.ascdesc, order)
    );
  };

  handleListOrGrid = cl => {
    if (cl === "true") {
      this.setState({
        selectGrid: "btn-grid-selected",
        selectList: "btn-list-normal"
      });
    } else {
      this.setState({
        selectGrid: "btn-grid-normal",
        selectList: "btn-list-selected"
      });
    }
    this.setState({ viewCardOrList: cl });
  };

  render() {
    const normalizedSearch = this.state.search.toLowerCase();

    const filteredProjects = this.state.projects.filter(project => {
      return (
        project.name.toLowerCase().indexOf(normalizedSearch) >= 0 ||
        project.account.toLowerCase().indexOf(normalizedSearch) >= 0 ||
        project.costCenter.toLowerCase().indexOf(normalizedSearch) >= 0 ||
        project.executiveManager.toLowerCase().indexOf(normalizedSearch) >= 0
      );
    });

    let projectsList = filteredProjects.map(project => {
      return (
        <div key={project.id} className="">
          <ProjectList
            projectLetters={project.projectLetters}
            name={project.name}
            account={project.account}
            executiveManager={project.executiveManager}
            costCenter={project.costCenter}
            managerThumb={project.managerThumb}
            projectManager={project.projectManager}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        </div>
      );
    });

    let projectsCard = filteredProjects.map(project => {
      return (
        <div
          key={project.id}
          className="col-lg-3 col-md-4 col-sm-6 mb-4 ">
          <div className="" key={project.costCenterId}>
            <ProjectCard
              projectLetters={project.projectLetters}
              name={project.name}
              account={project.account}
              executiveManager={project.executiveManager}
              costCenter={project.costCenter}
              managerThumb={project.managerThumb}
              projectManager={project.projectManager}
              startDate={project.startDate}
              endDate={project.endDate}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
          <Header typeStyle="header-border"  titulo="Projetos"  hideFields=""  fields="add"
            filtro="Contas" ordenar="Ordenar por"
            handleGrid={() => this.handleListOrGrid("true")}
            handleList={() => this.handleListOrGrid("false")}
            clickOrder={() => this.handleClickOrder()}
            changeOrder={e => this.handleChangeOrder(e.target.value)}
            onSearch={this.handleSearch}
            btnSelectedGrid={this.state.selectGrid}
            btnSelectedList={this.state.selectList}
            btnAscDesc={this.state.btnAscDesc}
          />
          <br />
          <If test={this.state.viewCardOrList}>
            <div className="row">{projectsCard} </div>
          </If>
          <If test2={this.state.viewCardOrList}>
            <div>
              <div className="row row-list-header">
                <div className="col-1">
                  <div>{Projects.projectLetters}</div>
                </div>
                <div className="col-2">
                  <div className="row-list-header properties-project truncate">
                    NOME
                  </div>
                </div>
                <div className="col-1">
                  <div className="row-list-header properties-project truncate">
                    CONTA
                  </div>
                </div>
                <div className="col-2">
                  <div className="row-list-header properties-project truncate">
                    GERENTE EXECUTIVO
                  </div>
                </div>
                <div className="col-1">
                  <div className="row-list-header properties-project truncate">
                    CENTRO DE CUSTO
                  </div>
                </div>
                <div className="col-1">
                  <div className="row-list-header properties-project truncate">
                    GERENTE
                  </div>
                </div>
                <div className="col-2">
                  <div className="row-list-header properties-project truncate">
                    INÍCIO
                  </div>
                </div>
                <div className="col-2">
                  <div className="row-list-header properties-project truncate">
                    FIM
                  </div>
                </div>
              </div>
              {projectsList}
            </div>
          </If>
      </div>
    );
  }
}

