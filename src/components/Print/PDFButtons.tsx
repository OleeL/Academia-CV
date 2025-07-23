import { IconDownload, IconEye, IconLoader } from "@tabler/icons-react";
import { handlePrint } from "./pdf";
import PDFPreview from "./PDFPreview";
import { useState } from "react";

const PDFButtons = ({ documentName }: { documentName: string }) => {
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="fixed bottom-5 left-5 flex flex-row gap-2">
        <button
          onClick={() => handlePrint(documentName)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <IconDownload className="pointer-events-none" />
        </button>
        <button
          onClick={() => setPreview(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {!loading ? (
            <IconEye className="pointer-events-none" />
          ) : (
            <IconLoader className="animate-spin" />
          )}
        </button>
      </div>
      {preview && (
        <PDFPreview setLoading={setLoading} onClose={() => setPreview(false)} />
      )}
    </>
  );
};
export default PDFButtons;
