import React, {Component} from 'react'
import Multi from 'react-bootstrap-multiselect'

import Select from 'react-select';
import 'react-select/dist/react-select.min.css'


import './test.css'

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'three' },
  { value: 'four', label: 'four' }
]

export default props => (
  <div>
          <br/><br/>

          <div className="combo">
            <button value="" className="btn-select" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <label>Todas</label> <span className="fa fa-caret-down"></span>
            </button>
            <ul className="collapse options list-unstyled" id="collapseExample">
                <li> 
                  <label for="checkbox" value="tres" ><input type="checkbox"/> Todas</label>
                </li>
                <li>
                  <input type="checkbox"/> Anim pariatur
                </li>
                <li>
                  <input type="checkbox"/> Anim pariatur
                </li>
                <li>
                  <input type="checkbox"/> Anim pariaturt
                </li>
            </ul>
          </div>

  </div>
)
/*
<Select name="form-field-name"
                          value={selectedOption}
                          onChange={this.handleChange}
                          multi={true}
                          options={[{ value: 'one', label: 'One' },
                                    { value: 'two', label: 'Two' },
                                    { value: 'three', label: 'three' },
                                    { value: 'four', label: 'four' },]} />
          <br/><br/>

          <Multi includeSelectAllOption
                data={options} multiple />

*/