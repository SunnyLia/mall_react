import React from 'react';

class Cart extends React.Component{
    goBackPage = () => {
        this.props.history.goBack()
        
      }
  
    render (){
        
        return <button onClick={this.goBackPage}>"find111"</button>
    }
    
}
export default  Cart;
