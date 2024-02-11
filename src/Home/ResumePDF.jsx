import React from 'react';
import {Document, Page} from 'react-pdf';
import pdf from '../assets/resume.pdf';
import './ResumePDF.scss';

function ResumePDF() {
    return (
        <div className='resume-div'>
            <Document file={pdf} className='resume-pdf'>
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
    );
};

export default ResumePDF;
