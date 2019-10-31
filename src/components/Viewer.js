import React, { PureComponent } from "react";
import Pages from './Pages';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

export default class Viewer extends PureComponent {
  render() {
    return (
      <div className="container">
        <PDFViewer>
          <Pages metadata={this.props.metadata} blocks={this.props.blocks} />
        </PDFViewer>
      </div>
    )
  }
}