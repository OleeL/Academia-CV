import { useEffect, useState } from "react";
import { handlePrintBlob } from "./pdf";

const PDFPreview = ({
  onClose,
  setLoading,
}: {
  setLoading: (value: boolean) => void;
  onClose: () => void;
}) => {
  const [blobUrl, setBlobUrl] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setBlobUrl(await handlePrintBlob());
      setLoading(false);
    })();
  }, [setLoading]);

  if (!blobUrl) return <></>;

  return (
    <div className="fixed inset-0 bg-gray-600/80 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: "90%" }}>
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-bold">PDF Preview</h2>
          <button onClick={onClose} className="bg-gray-300 p-2 rounded">
            Close
          </button>
        </div>
        <iframe
          src={blobUrl}
          title="PDF Preview"
          width="100%"
          height="700"
        ></iframe>
        <div className="flex justify-end mt-2">
          <a
            href={blobUrl}
            download="document.pdf"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;
