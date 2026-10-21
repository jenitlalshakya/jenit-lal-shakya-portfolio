"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { CVDocument } from "@/components/cv/CVDocument";
import { cvData, cvFileName } from "@/data/cvData";

type CVDownloadLinkProps = {
  className?: string;
};

const CVDownloadLink = ({ className }: CVDownloadLinkProps) => (
  <PDFDownloadLink
    document={<CVDocument />}
    fileName={cvFileName}
    aria-label={`Download ${cvData.name} curriculum vitae as PDF`}
    className={className}
  >
    {({ loading, error }) => {
      if (error) {
        return "Could not generate PDF";
      }
      if (loading) {
        return "Preparing PDF…";
      }
      return (
        <>
          Download CV (PDF)
          <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden />
        </>
      );
    }}
  </PDFDownloadLink>
);

export default CVDownloadLink;
