var React = require('react');
var Preview = require("Preview");
var Textarea = require("Textarea");
var marked = require('marked');

var Main = React.createClass({

    getInitialState: function () {
        return {
            text: ""
        }
    },

    handleNewText: function(newText) {
        var markedText = marked(newText);
        this.setState({ text: markedText});
    },


    render: function() {
        return (
            <div className="container">
                <h1 id="app-title">Markdown Previewer</h1>
                <Textarea onNewText={this.handleNewText}/>
                <Preview text={this.state.text}/>
            </div>
        );
    }
});

module.exports = Main;