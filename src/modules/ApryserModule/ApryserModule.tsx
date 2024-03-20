"use client";

import { Button } from "@nextui-org/react";
import WebViewer from "@pdftron/webviewer";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./apryser.module.css";

const api_Key =
    "demo:1710681536042:7f35457d0300000000af0fc23717fd3c3adcfabc1ffcbff08dbd9b9428";

export function ApryserModule() {
    const [sending, setSending] = useState<boolean>(false);
    const viewer = useRef();
    const instanceRef = useRef();
    const filePath = "application.pdf";

    const blobToBase64 = (blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((resolve) => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
    };

    const sendPDF = async () => {
        setSending(true);
        console.log(instanceRef.current);

        const documentViewer = instanceRef.current.Core.getDocumentViewers()[0];
        const { annotationManager } = instanceRef.current.Core;

        const doc = documentViewer.getDocument();

        const xfdfString = await annotationManager.exportAnnotations();
        const dataPdf = await doc.getFileData({
            // saves the document with annotations in it
            xfdfString,
        });

        const arr = new Uint8Array(dataPdf);
        const blob = new Blob([arr], { type: "application/pdf" });
        const base = await blobToBase64(blob);

        // const url = URL.createObjectURL(blob);
        // window.open(url);

        const response = await axios.post("/api/sendpdf", { base });
        console.log("🚀 ~ sendPDF ~ response:", response);

        setSending(false);
    };

    useEffect(() => {
        WebViewer(
            {
                path: "/webviewer/lib",
                licenseKey: api_Key, // sign up to get a key at https://dev.apryse.com
                initialDoc: filePath,
                enableOfficeEditing: false,
                disabledElements: [
                    "toolbarGroup-Select",
                    "toolbarGroup-Insert",
                    "toolbarGroup-Edit",
                    "toolbarGroup-View",
                    "toolbarGroup-Shapes",
                    "toolbarGroup-Forms",
                    "toolbarGroup-Annotate",
                    "toolbarGroup-FillAndSign",
                    "toolbarGroup-Comments",
                ],
            },
            viewer.current,
        )
            .then((instance) => {
                const { docViewer } = instance;
                instanceRef.current = instance;

                // you can now call WebViewer APIs here...
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="PdfViewer">
            <div className="absolute bottom-5 right-5 py-5">
                <Button
                    variant="shadow"
                    color="primary"
                    onClick={sendPDF}
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send Pdf in Email"}
                </Button>
            </div>
            <div
                // className="webviewer"
                className={styles.pdfViewerWrapper}
                ref={viewer}
            ></div>
        </div>
    );
}