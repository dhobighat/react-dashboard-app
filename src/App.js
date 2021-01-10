import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      dashboardStatus: "Getting current Status",
      productStatus: "Getting current Status"
    }
  } 


  componentDidMount() {
    axios.get('http://aws-dev-alb-1190596654.us-east-1.elb.amazonaws.com:8900/dashboard/getMessage')
      .then(response => {
        this.setState({'dashboardStatus': response.data});
      })
      .catch(error => {
        this.setState({'dashboardStatus': error});
      });

      axios.get('http://aws-dev-alb-1190596654.us-east-1.elb.amazonaws.com:8901/product/getMessage')
         .then(response => {
           this.setState({'productStatus': response.data});
         })
         .catch(error => {
           this.setState({'productStatus': error});
         });
    }

  render() {
    return
    <div>
        <h1>Response from Dashboard Service : {this.state.dashboardStatus} </h1>
        <h1>Response from Product Service :{this.state.productStatus} </h1>
    </div>;
  }
}

export default App;
