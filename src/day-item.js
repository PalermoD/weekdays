// Import some code we need 
var React = require('react-native');
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;


// Create our componet 
var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}>
		  {this.props.day}
		</Text>
	}
});

// Style our component
var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
    }
});

// Make availble elsewhere
module.exports = DayItem;