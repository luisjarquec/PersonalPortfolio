var pdfWindow = null;
var pdfURL = 'cv.pdf'

function openPDF(){
    if(pdfWindow && !pdfWindow.closed){
        pdfWindow.location.href = pdfURL;
        pdfWindow.focus();
    }
    else{
        pdfWindow = window.open(pdfURL, '_blank');
        if(pdfWindow){
            pdfWindow.focus();
        }
        else{
            alert('Please enable pop-ups in your browser');
        }
    }
}