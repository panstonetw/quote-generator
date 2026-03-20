import React from 'react';
import { FileUpload, Float, Icon, Text, useFileUploadContext } from "@chakra-ui/react";
import { Upload, X } from "lucide-react";

const FileUploadList = () => {
    const fileUpload = useFileUploadContext();
    const files = fileUpload.acceptedFiles;
    if (files.length === 0) {
        return null;
    }

    return (
        <FileUpload.ItemGroup>
            {files.map((file) => (
                <FileUpload.Item w="auto" boxSize="20" p="2" file={file} key={file.name}>
                    <FileUpload.ItemPreviewImage />
                    <Float placement="top-end">
                        <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                            <X />
                        </FileUpload.ItemDeleteTrigger>
                    </Float>
                </FileUpload.Item>
            ))}
        </FileUpload.ItemGroup>
    )
}

export const CustomFileUpload = ({ text, supportType, onChange, ...props }) => {
    return (
        <FileUpload.Root alignItems="stretch" {...props} onFileChange={details => onChange(details.acceptedFiles)}>
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone>
                <Icon size="md" color="fg.muted">
                    <Upload />
                </Icon>
                <FileUpload.DropzoneContent>
                    <Text color="fg.muted">{text}</Text>
                    <Text color="fg.muted">{supportType}</Text>
                </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUploadList />
        </FileUpload.Root>
    );
};