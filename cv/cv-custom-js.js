document.getElementById('download-pdf').addEventListener('click', () => {
    document.getElementById('collapsible-when-pdf').classList.add('visually-hidden');
    html2pdf().from(document.body).set({
        filename: 'Giorgio Giotto - CV.pdf',
        jsPDF: { 
          format: 'a4',
        },
        image: { 
          type: 'jpeg', 
          quality: 0.98 
        },
        html2canvas: { 
          scale: 2, 
          logging: true, 
          dpi: 192, 
          letterRendering: true 
        },
      }).save('Giorgio-Giotto-CV.pdf');
    setTimeout(function() {
        document.getElementById('collapsible-when-pdf').classList.remove('visually-hidden');
    }, 1000)
});
