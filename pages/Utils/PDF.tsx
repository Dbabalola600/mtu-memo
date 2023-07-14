import React from 'react';

type RenderBase64PDFProps = {
  base64String: string|any;
};

export function RenderBase64PDF({ base64String }: RenderBase64PDFProps): JSX.Element | null {
  if (!base64String) {
    return null;
  }

  const dataUrl = `data:application/pdf;base64,${base64String}`;

  return (
    <embed src={dataUrl} type="application/pdf" width="100%" height="600px" />
  );
}

type PdfProps = {
  base64String: string |any;
};

export function Pdf({ base64String }: PdfProps): JSX.Element {
  return (
    <div>
      <h1>Render PDF</h1>
      <RenderBase64PDF base64String={base64String} />
    </div>
  );
}
