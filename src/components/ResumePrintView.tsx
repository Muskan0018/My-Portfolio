import React from 'react';
import { ResumePreviewContent } from './ResumeModal';

export const ResumePrintView: React.FC = () => {
  return (
    <div className="hidden print:block print:bg-white print:text-black p-8 max-w-[210mm] mx-auto bg-white text-black">
      <ResumePreviewContent />
    </div>
  );
};
