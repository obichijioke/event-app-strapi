/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";
import { X } from "lucide-react";

export interface DropZoneProps {
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrag?: () => void;
  onDragIn?: () => void;
  onDragOut?: () => void;
  onDrop?: () => void;
  onFilesDrop?: (files: File[]) => void;
}
interface NewFile extends File {
  preview: string;
}

interface FileUploaderProps {
  setFiles: (files: File[]) => void;
}

const FileUploader = ({ setFiles }: FileUploaderProps) => {
  const [files, set_files] = useState<NewFile[]>([]);

  useEffect(() => {
    if (files.length > 0) {
      setFiles(files);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const removeFile = (name: string) => {
    set_files((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const handleFileUpload = (acceptedFiles: FileWithPath[]) => {
    set_files((previousFiles) => [
      // If allowing multiple files
      ...previousFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ),
    ]);
  };
  return (
    <div className="w-full">
      <Dropzone onDrop={handleFileUpload}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="grid grid-cols-5 gap-2">
        {files.map((file) => (
          <div className="w-full relative" key={file.name}>
            <X
              className="h-5 w-5 absolute top-1 right-1 p-1 bg-white rounded-full cursor-pointer"
              onClick={() => removeFile(file.name)}
            />
            <img
              src={file.preview}
              alt={file.name}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
