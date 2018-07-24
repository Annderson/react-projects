import React from 'react'

//import MultiSelect from 'react-bootstrap-multiselect'

import If from '../if'
//import MultiSelect from './multiselect'

import search from '../../assets/img/ic-search.svg'
import back  from '../../assets/img/ic_back.svg'

import '../../css/hedears.css'


export default props => (
    <div className={'row header-'+props.typeStyle}>

        <If test={!props.titulo}>
            <div className="title2 row">
                <div className="col-lg-3">
                    <button className="btn-back">
                        <img srcSet={back} className="img-back"/>
                    </button>
                </div>
                <div className="col-lg-9">
                    <h5><strong>Line Flow Tool</strong></h5>
                    <h5>CC000123</h5>
                    <h6>S2</h6>
                </div>        
            </div>
        </If>

        <If test={props.titulo}>
            <div className="title1">
                <h1>{props.titulo}</h1>
            </div>
        </If> 

       <If test={props.titulo}>
           <div className={"option-visualization"+props.hideFields}>
               <button className="btn-grid"></button>
               <button className="btn-list"></button>
            </div>
        </If> 
       

       <div className={"options-search"+props.hideFields}>
            <div className="form-group">
               <label>Contas</label><br/>
               <select>
                   <option>Selecione</option>
                   <option>Selecione</option>
                   <option>Selecione</option>
                   <option>Selecione</option>
               </select>
            </div>

            <div className="form-group">
               <label>Ordenar por</label><br/>
               <select>
                   <option>Selecione</option>
                   <option>Selecione</option>
                   <option>Selecione</option>
                   <option>Selecione</option>
               </select>
            </div>
            <If test={props.titulo}>
                <div className="form-group">
                   <button className={"btn-order"}></button>
                </div>
            </If>
       </div>

       <div className={"text-search"+props.hideFields}>
            <div className="form-group">
               <label>Search</label><br/>
               <button className="hold-search">
                    <input type="text" className="field-search"/>
                    <img src={search} className="search-img"/>
               </button>
          </div>
       </div>

       <button  className={"btn-"+props.fields}></button>
       
    </div>
)

const options1 = [
    { value: 'chocolate' },
    { value: 'strawberry'},
    { value: 'vanilla'}
]