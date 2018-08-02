import React from 'react'
import If from '../if'
//import MultiSelect from './multiselect/MultiSelect'

import '../../css/hedears.css'


export default props => (
    <div className={'row mr-3 header '+props.typeStyle}>

        <If test={!props.titulo}>
            <div className="col-lg-3">
            <div className="title2 row">
                <div className="col-lg-3">
                    <button className="btn-back img-back"></button>
                </div>
                <div className="col-lg-9 header-info-projects">
                    <h5>Line Flow Tool</h5>
                    <h6>CC000123</h6>
                    <h6><b>S2</b></h6>
                    <h6><b>Anselmo Junior</b></h6>
                </div>        
            </div>
            </div>
        </If>

        <If test={props.titulo}>
            <div className="title1 col-lg-2 col-md-2 col-sm-2">
                <h1>{props.titulo}</h1>
            </div>
        </If> 

       <If test={props.titulo}>
           <div className={"col-lg-1 option-visualization"+props.hideFields}>
               <button className={props.btnSelectedGrid} onClick={props.handleGrid}></button>
               <button className={props.btnSelectedList} onClick={props.handleList}></button>
            </div>
        </If> 
       

       <div className={"col-lg-4 col-md-4 col-sm-4  options-search"+props.hideFields}>
            <div className="form-group select-search">
               <label className="">{props.filtro}</label><br/>
               <select >
                   <option>Todas</option>
               </select>
            </div>

            <div className="form-group select-search type-order">
               <label>{props.ordenar}</label><br/>
               <select onChange={props.changeOrder} className="">
                   <option disabled selected>Selecione...</option>
                   <option value="name">Nome</option>
                   <option value="startDate">Data de Inicio</option>
                   <option value="endDate">Data Final</option>
               </select>
            </div>
            <If test={props.titulo}>
                <div className="form-group btn-type-order">
                   <button className={props.btnAscDesc} onClick={props.clickOrder}></button>
                </div>
            </If>
       </div>

       <If test={!props.titulo}>
            <div className={"col-lg-1 option-visualization"+props.hideFields}>
               <button className="btn-list-normal" onClick={props.handleList}></button>
            </div>
       </If>

       <div className={"col-lg-3 text-search"+props.hideFields}>
               <label>Pesquisar</label><br/>
               <button className="hold-search">
                    <input type="text" className="field-search" onChange={props.onSearch}/>
                    <div className="search-img"/>
               </button>
       </div>
       <If test={props.titulo}>
            <div className="col-lg-2 div-btn-add">
                <button  className={"btn-"+props.fields}></button>
            </div>
        </If>
       
    </div>
)