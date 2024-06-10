'use client'

import { jsPDF } from "jspdf";
import { Button } from './Button';
import html2canvas from 'html2canvas';
import { Product, ServiceType } from "../lib/definitions";
import * as htmlToImage from 'html-to-image';

export function DownloadButton() {


    async function printDocument() {
        let domElement = document.getElementById('productRoot');
        // @ts-ignore
        htmlToImage.toPng(domElement)
            .then(function (dataUrl) {
                console.log(dataUrl);
                const pdf = new jsPDF();
                pdf.addImage(dataUrl, 'PNG', 0, 0, domElement?.clientWidth!/4, domElement?.clientHeight!/4);
                pdf.save("download.pdf");
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    return <Button className='w-40' onClick={printDocument}>Download as PDF</Button>
}