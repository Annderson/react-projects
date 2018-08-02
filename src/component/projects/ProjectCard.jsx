import React from 'react'
import Moment from 'moment'


export default props => (
    <div className="row rectangle">
        <div className="col-3">
                          
            <div className="row">
                    <img className="image" data-toggle="tooltip" data-placement="top" alt={props.projectManager} src={"data:image/png;base64," +  props.managerThumb} />
            </div>
            <div className="row hold-initials">
                    <div className="initials">{props.projectLetters}</div>
             </div>
        </div>
        <div className="col-9">
                <div className="name truncate" data-toggle="tooltip" data-placement="top" title={props.name} >{props.name}</div>
                <div className="account truncate" data-toggle="tooltip" data-placement="top" title={props.account}>Conta: {props.account}</div>
                <div className="cost-center truncate" data-toggle="tooltip" data-placement="top" title={props.costCenter}>CC: {props.costCenter}</div>
                <div className="executive-manager truncate" data-toggle="tooltip" data-placement="top" title={props.executiveManager}>{props.executiveManager}</div>
                <div className="border-executive-manager"></div>
                <div className="row">
                    <div className="col-6 start-end start-border">INÍCIO</div>
                    <div className="col-6 start-end end">FIM</div>
                </div>
                <div className="row">
                    <div className="col-6 date-start-end start-border truncate" data-toggle="tooltip" data-placement="top" title={Moment(props.startDate).format('DD/MM/YYYY')} >{Moment(props.startDate).format('DD/MM/YYYY')}</div>
                    <div className="col-6 date-start-end end truncate" data-toggle="tooltip" data-placement="top" title={Moment(props.endDate).format('DD/MM/YYYY')} >{Moment(props.endDate).format('DD/MM/YYYY')}</div>
                </div>
         </div>
   </div>
)