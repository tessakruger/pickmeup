var NewUser = React.createClass({

  getInitialState: function() {
    return {

    }
  },



  render: function(){
    return (
      <form action="/index" method="POST">
        <div>
          <label for="first_name">First name:</label>
          <input type="text" id="first_name" placeholder="First name" />
        </div>
        <div>
          <label for="last_name">First name:</label>
          <input type="text" id="last_name" placeholder="Last name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Email" />
        </div>
        <div>
          <label for="password">Choose a password:</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div>
          <label for="password-confirmation">Confirm your password:</label>
          <input type="password" id="password-confirmation" placeholder="Confirm your password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }


})
