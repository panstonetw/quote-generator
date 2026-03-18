import React from 'react';
import { FileUpload, Icon, Text } from "@chakra-ui/react";
import { Upload } from "lucide-react";

export const CustomFileUpload = ({ text, supportType, ...props }) => {
    return (
        <FileUpload.Root alignItems="stretch" {...props}>
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
            <FileUpload.List />
        </FileUpload.Root>
    );
};