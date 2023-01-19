import React, { Component } from 'react'



export default class Profile extends Component {

constructor(props){
    super(props);
    this.state={
        count:0,
        memory:null

    };
}
inc=()=>{this.setState({count : this.state.count + 1 });}


componentDidMount(){
    this.setState({ memory: setInterval(() => {
        this.inc();
      }, 1000) });
}

componentWillUnmount(){
    clearInterval(this.state.memory)
}

  render() {
    return (
      <div>
        <div>
        <h1>Player Name : Carlos Henrique Casimiro</h1>
    
        </div>
        <div>
            <h2>Casimiro</h2>
            <img src='https://static.onzemondial.com/8/2023/01/photo_article/816098/325262/1200-L-manchester-united-le-carton-jaune-trs-embtant-de-casemiro.jpg' alt=''></img>
        </div>
        <div>
            <button>Salute</button>
            <h4>This photo is taken at the age of 29yo</h4>
            <h3>Player Profession : Professional Footballer</h3>
            <p>Casemiro, le milieu de terrain brésilien de Manchester United, a reçu hier soir un carton jaune particulièrement lourd de conséquences... En effet, l'ancienne star du Real Madrid va louper le choc contre Arsenal suite à ce jaune.</p>
        </div>

         

        <h4>Counter : {this.state.count}</h4>
      </div>
    );
  }
}
