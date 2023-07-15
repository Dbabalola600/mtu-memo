import React from 'react';

type RenderBase64PDFProps = {
    base64String: string | any;
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
    base64String: string | any;
    title: string | any;
    role: string | any;
    department: string | any;
    college: string | any;
    date: string | any;
    sender: string | any;
};

export default function Pdf({ base64String, title, role, department, college, date,sender }: PdfProps): JSX.Element {
    return (
        <div>

            <div
                className='text-black font-bold text-left mb-5 text-2xl'
            >
                {title}



                {department === "None" && role !== "None" ? (
                    <div>
                        <div>
                            <div>
                                To:  {role}
                            </div>
                        </div>
                    </div>
                ) : role === "None" && department !== "None" ? (
                    <div>
                        <div>
                            To: Deparment of {department}


                        </div>


                    </div>
                ) : (
                    <div>
                        To: {college}
                    </div>
                )}


                <div>
                    From:{sender}
                </div>

                <div>
                    Date: {date}
                </div>


            </div>


            <RenderBase64PDF base64String={base64String} />
        </div>
    );
}
