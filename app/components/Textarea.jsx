var React = require('react');

var Textarea = React.createClass({

    onTextareaChange: function () {
        var newText = this.refs.textarea.value;
        this.props.onNewText(newText);
    },
    componentDidMount: function () {
        this.onTextareaChange();
    },

    render: function() {
        var defaultText = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

        return (
            <div className="textarea">
                <textarea ref="textarea" defaultValue={defaultText} onChange={this.onTextareaChange}></textarea>
            </div>
        );
    }
});

module.exports = Textarea;