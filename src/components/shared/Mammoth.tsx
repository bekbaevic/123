'use client'
import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

export default function Mammoth() {
    const [documentContent, setDocumentContent] = useState('asd');

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch('@/assets/docs/Положение.docx');
                const arrayBuffer = await response.arrayBuffer();
                const result = await mammoth.extractRawText({ arrayBuffer });
                setDocumentContent(result.value);
            } catch (error) {
                console.error('Error fetching the document:', error);
            }
        };

        fetchDocument();
    }, []);

    return (
        <div>
            <h1>Document Content:</h1>
            <div>{documentContent}</div>
        </div>
    );
}


