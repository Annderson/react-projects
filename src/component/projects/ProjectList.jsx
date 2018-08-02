import React from 'react'
import Moment from 'moment'

export default props => (
    <div className="row row-list-view">
        <div className="col-1 ">
             <div className="initials-list-view border-list-view">{props.projectLetters}</div>
         </div>
        <div className="col-2 border-list-view  properties-project" >
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={props.name}>{props.name}</div>
        </div>
        <div className="col-1 border-list-view properties-project" >
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={props.account}>{props.account}</div>
        </div>
        <div className="col-2 border-list-view properties-project">
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={props.executiveManager}>{props.executiveManager}</div>
        </div>
        <div className="col-1 border-list-view properties-project">
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={props.costCenter}>{props.costCenter}</div>
        </div>
        <div className="col-1 border-list-view properties-project">
            <img className="image" data-toggle="tooltip" data-placement="top" alt={props.projectManager} src={"data:image/png;base64," +  props.managerThumb} />
        </div>
        <div className="col-2 border-list-view properties-project text-center"  >
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={Moment(props.startDate).format('DD/MM/YYYY')}>{Moment(props.startDate).format('DD/MM/YYYY')}</div>
        </div>
        <div className="col-2  border-list-view properties-project text-center">
            <div className="truncate" data-toggle="tooltip" data-placement="top" title={Moment(props.endDate).format('DD/MM/YYYY')}>{Moment(props.endDate).format('DD/MM/YYYY')}</div>
        </div>
    </div>
)