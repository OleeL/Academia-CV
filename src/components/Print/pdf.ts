import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import documentSettings from "../../documentSettings";

const generatePdf = async () => {
  const input = document.getElementById("printableArea");
  if (!input) {
    throw new Error("printableArea was not set up correctly by developer");
  }

  const pdfWidth = 595.28; // A4 width in points
  const pdfHeight = 841.89; // A4 height in points
  const scaleFactor = 2; // Increase for better quality

  const canvas = await html2canvas(input, {
    scale: scaleFactor,
    scrollX: 0,
    scrollY: 0,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");
  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  const pdf = new jsPDF({
    orientation: documentSettings.orientation,
    unit: documentSettings.unit,
    format: documentSettings.format,
  });

  let heightLeft = imgHeight;
  let position = 0;
  console.log(heightLeft);

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  return pdf;
};

export const handlePrint = async (documentName: string) => {
  const pdf = await generatePdf();
  pdf.save(documentName);
};

export const handlePrintBlob = async () => {
  const pdf = await generatePdf();
  const pdfBlob = pdf.output("blob");
  return URL.createObjectURL(pdfBlob);
};
