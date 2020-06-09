var OutputContent = (function () {
    function OutputContent() {
    }
    OutputContent.getAttributeTypeMap = function () {
        return OutputContent.attributeTypeMap;
    };
    OutputContent.discriminator = undefined;
    OutputContent.attributeTypeMap = [
        {
            "name": "outputBarcode",
            "baseName": "OutputBarcode",
            "type": "OutputBarcode"
        },
        {
            "name": "outputFormat",
            "baseName": "OutputFormat",
            "type": "OutputFormatType"
        },
        {
            "name": "outputText",
            "baseName": "OutputText",
            "type": "Array<OutputText>"
        },
        {
            "name": "outputXHTML",
            "baseName": "OutputXHTML",
            "type": "AnyType"
        },
        {
            "name": "predefinedContent",
            "baseName": "PredefinedContent",
            "type": "PredefinedContent"
        }
    ];
    return OutputContent;
}());
export { OutputContent };
//# sourceMappingURL=outputContent.js.map