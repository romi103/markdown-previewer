var React = require('react');

var Preview = React.createClass({

    propTypes: {
        text: React.PropTypes.string
    },

    getDefaultProps: function () {
        return ({text: `Heading`})
    },

    render: function () {
        var text = this.props.text;

        function returnHTML () {
            return { __html: text };
        }
        
        return (
            <div className="preview" dangerouslySetInnerHTML={returnHTML()} />
        );
    }
});

module.exports = Preview;