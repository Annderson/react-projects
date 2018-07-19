import React, {Component} from 'react'
import Multi from 'react-bootstrap-multiselect'

import './test.css'

const options = [
    { value: 'chocolate' },
    { value: 'strawberry'},
    { value: 'vanilla'}
  ]


export default () => (
  <div>
    <Multi includeSelectAllOption
           data={options} multiple
           />
    <div className="combo">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           Selecione <span className="fa fa-caret-down"></span>
        </button>
       <ul className="collapse options list-unstyled" id="collapseExample">
          <li> 
            <label><input type="checkbox"/> Anim pariaturt</label>
          </li>
          <li>
          <label><input type="checkbox"/> Anim pariatur</label>
          </li>
          <li>
          <label><input type="checkbox"/> Anim pariatur</label>
          </li>
          <li>
          <label><input type="checkbox"/> Anim pariaturt</label>
          </li>
       </ul>
    </div>
  </div>
)
