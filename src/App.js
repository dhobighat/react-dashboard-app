import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      dashboard-status: "Getting current Status"
      product-status: "Getting current Status"
    }
  } 


  componentDidMount() {
    axios.get('http://aws-dev-alb-1190596654.us-east-1.elb.amazonaws.com:8900/dashboard/getMessage')
      .then(response => {
        this.setState({'dashboard-status': response.data});
      })
      .catch(error => {
        this.setState({'dashboard-status': error});
      });

      axios.get('http://aws-dev-alb-1190596654.us-east-1.elb.amazonaws.com:8901/product/getMessage')
         .then(response => {
           this.setState({'product-status': response.data});
         })
         .catch(error => {
           this.setState({'product-status': error});
         });
    }

  render() {
    return <h1>Response from Dashboard Service : {this.state.dashboard-status} </h1>;
    return <h1>Response from Product Service :{this.state.product-status} </h1>;
  }
}

export default App;
