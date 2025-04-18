import pdf from '../../assets/cv/curriculo.pdf';

const link = document.createElement('a');
link.href = pdf;
link.download = 'curriculo.pdf'; 
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

export const download = (url: string, nomeArquivo: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    link.click();
  }
  