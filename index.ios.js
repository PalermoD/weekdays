//import some code we need like uh React!
//Get the react native libiary 
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

//files we right need explicit routes when requiring them
var DayItem = require('./src/day-item');

//define a constant



// Create a react componet
var Weekdays = React.createClass({
	//pass an object to this method
	// set of instructions that define our component and stucture 
	// every react componet must have a render function/method 
  // jsx
    render: function(){
    	return <View style={styles.container}>
        {this.days()}
      </View>
    },
    days: function(){
    var daysItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
          <DayItem day={day} daysUntill={i} />
        )
    }
      return daysItems         
    }
});

// Style the react componet 
var styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center', // moves stuff height wise
    alignItems: 'center' // moves stuff width wise
  }

});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
	return Weekdays
});