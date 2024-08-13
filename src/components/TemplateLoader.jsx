import React from 'react'
import Template8 from '../resumetemplates/template8'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';


const TemplateLoader = () => {




    const handleDownload =()=>{
        const cvElement = document.getElementById('template-to-pdf');

        html2canvas(cvElement).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF(
                {
                    orientation:'portrait',
                    unit:'pt',
                    format:'a4',
                }
            );

            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData,0,0,imgWidth,imgHeight);
            pdf.save('testresume.pdf');
        })
    }

    const handleDownload2 = () => {
        const cvElement = document.getElementById('template-to-pdf');

        const opt = {
            // margin:       0,
            filename:     'resumetest2.pdf',
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },

        };

        html2pdf().from(cvElement).set(opt).save();
    };


    

  return (
    <div>
        <div id="template-to-pdf">
            <Template8/>
        </div>
        <button
        onClick={handleDownload}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            Download resume
        </button>
        <button
        onClick={handleDownload2}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            Download resume2
        </button>
    </div>
  )
}

export default TemplateLoader