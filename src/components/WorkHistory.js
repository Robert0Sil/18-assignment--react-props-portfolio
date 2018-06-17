import React, { Component } from 'react'

class WorkHistory extends Component {

_genWrkHistJsx(){

  const workHistArr = this.props.wHist.map(function(wHitsStr, index){
    // console.log(wHitsStr);
    return  (
      <div className="job" key={index}>

        <div className="job__years">
          <h6 className="job__end">{wHitsStr.years.end}</h6>
          <h6 className="job__start">{wHitsStr.years.start}</h6>

          <h5 className="job__title">{wHitsStr.title}</h5>
          <h5 className="job__company">{wHitsStr.company}</h5>
          <p className="job__description">{wHitsStr.description}</p>
        </div>
    )
  })
    return workHistoryArr
      // console.log(wrkHistArr);
}

  render () {
    // console.log(this.props.wHist);

    return(
      <section>
        <h4>Work Experience</h4>
        <div className="job-timeline">
          {this._genWrkHistJsx()}
        </div>
      </section>

    );
  }
}

export default WorkHistory;
