import React from 'react';

export default function Country (props) {

    return(
        <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              
              <span class="card-title">Card Title</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>{props.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
};