// import and export documents in: DOC, DOCX, PDF, RTF, DOT, DOTX, ODT, OTT, HTML, MHTML, XML, TXT.
// The export-only formats are: PS, XPS, OpenXPS, PNG, JPEG, BMP, SVG, TIFF, EMF, PCL, EPUB.
const fs = require("fs");
const path = require("path");
const { importAndExport, exportOnly } = require("./constant");
const {
	WordsApi,
	ConvertDocumentRequest,
} = require("asposewordscloud");
// const { createReadStream, writeFileSync } = require("fs");

const { client_id, client_secret, base_url } = require("./key.json");
const { log } = require("console");

const wordsApi = new WordsApi(client_id, client_secret, base_url);

const convert = {
	file: async (input, output, fileName) => {
		console.log(input , output);
		const outputName = "results." + output;
        // log(outputName)
		const requestDocument = fs.createReadStream(fileName);
		const convertRequest = new ConvertDocumentRequest({
			document: requestDocument,
			format: output,
		});
		const outputPath = path.join(__dirname, outputName);
        // log(outputPath , convertRequest)
		await wordsApi.convertDocument(convertRequest).then((res) => {
			// tslint:disable-next-line:no-console
			if (res.response.statusCode == 200) {
				fs.writeFileSync(outputPath, res.body);

				console.log("success convert");
			} else {
				log("error", res.response.statusMessage);
			}
		});
	},
	// wordToTxt : async() =>{},
	// wordToPng : async() =>{},
	// wordToJpeg : async() =>{},
	// wordToSvg : async() =>{},
	// wordToTiff : async() =>{},
	// wordToPs : async() =>{},

	// pdfToWord : async() =>{},
	// pdfToPng : async() =>{},
	// pdfToJpeg : async() =>{},
	// pdfToSvg : async() =>{},
	// pdfToSvg : async() =>{},
};

module.exports = convert;
