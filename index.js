
const fs = require('fs');
const path = require('path');
const { WordsApi, UploadFileRequest, SaveAsRequest, PdfSaveOptionsData, DownloadFileRequest, DeleteFileRequest ,ConvertDocumentRequest} = require('asposewordscloud');
const { createReadStream, writeFileSync } = require('fs');
const { log } = require('console');
const { importAndExport, exportOnly } = require('./constant')
const convert = require('./convert')



convert.file(importAndExport.docx, importAndExport.pdf , 'example.docx')

// log( client_id, client_secret )

// import and export documents in: DOC, DOCX, PDF, RTF, DOT, DOTX, ODT, OTT, HTML, MHTML, XML, TXT.
// The export-only formats are: PS, XPS, OpenXPS, PNG, JPEG, BMP, SVG, TIFF, EMF, PCL, EPUB.

// const fileName = "results.pdf"
// const outputName = "res.png"

// const requestDocument = fs.createReadStream(fileName);
// const convertRequest = new ConvertDocumentRequest({
//     document: requestDocument,
//     format: "png"
// });

// const outputPath = path.join(__dirname, outputName)


// wordsApi.convertDocument(convertRequest)
// .then((res) => {
//     // tslint:disable-next-line:no-console
//     if (res.response.statusCode == 200) {
//         writeFileSync(outputPath, res.body);

//         console.log("success convert");
//     }
//     else{
//         log("error", res.response.statusMessage)
//     }

// });

// const deleteCloudFile = async(filepath) => {
//     const deleteRequest = new DeleteFileRequest({
//         path : filepath
//     })

//     wordsApi.deleteFile(deleteRequest)
//     .then((res) => {
//        if (res.statusCode == 200) {
//         log("flush successfully from cloud")
//        }
//     })
//     .catch((err) => {
//         log("error +_+ :",err)
//     })
// }

// async function convertDocxToPdf(localPath, outputFilePath) {
//     try {
//         const outputPath = "destination.pdf"
//         const uploadName = "uploaded.docx"
//         // Unggah file ke Cloud Storage Aspose
//         const uploadRequest = new UploadFileRequest({
//             path: uploadName,
//             fileContent: createReadStream(localPath)
//         });

//         await wordsApi.uploadFile(uploadRequest);

//         // Simpan file sebagai PDF di cloud
//         const saveAsRequest = new SaveAsRequest({
//             name: uploadName,
//             saveOptionsData: new PdfSaveOptionsData({
//                 fileName: outputPath
//             })
//         });

//         await wordsApi.saveAs(saveAsRequest);

//         // Unduh file PDF yang dikonversi
//         const downloadRequest = new DownloadFileRequest({
//             path: outputPath
//         });

//         const downloadResult = await wordsApi.downloadFile(downloadRequest);

//         // Simpan file PDF ke sistem lokal
//         writeFileSync(outputFilePath, downloadResult.body);

        
//         console.log('File converted and saved successfully!');

//         deleteCloudFile(outputPath);
//         deleteCloudFile(uploadName);

//     } catch (err) {
//         console.error('Error during conversion:', err);
//     }
// }

// const localPath = 'D:/PROJECT_GABUT/aspose/doc1.docx';
// const outputFilePath = 'D:/PROJECT_GABUT/aspose/results.pdf';


// convertDocxToPdf(localPath, outputFilePath);