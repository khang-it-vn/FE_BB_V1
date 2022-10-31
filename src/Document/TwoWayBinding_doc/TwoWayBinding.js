import React, { Component } from 'react';
import  {CKEditor} from 'ckeditor4-react';

class TwoWayBinding extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: ""
        };

        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this );
    }

    onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData()
        } );
        console.log(this.state.data);
    }

    handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );
    }

    render() {
        return (
            <div>
                <CKEditor
                    data={this.state.data}
                    onChange={this.onEditorChange} 
                />                    
            </div>
        );
    }
}


export default TwoWayBinding;