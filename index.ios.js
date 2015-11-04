//import some code we need like uh React!
//Get the react native libiary 
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;


// Create a react componet
var Weekdays = React.createClass({
	//pass an object to this method
	// set of instructions that define our component and stucture 
	// every react componet must have a render function/method 
    // jsx
    render: function(){
    	return <View style={styles.container}>
               <Text>
               Here are the Days of the Week
               </Text>
    	       </View>
    }
});

// Style the react componet 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
	return Weekdays
});