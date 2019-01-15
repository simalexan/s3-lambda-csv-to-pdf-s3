
# S3 Bucket -> Lambda Convert CSV to PDF -> S3 Bucket

## Description

This is a serverless component that takes uploaded CSV files from one S3 Bucket, converts them to PDF documents and uploads to another S3 Bucket. It contains:

- an Input S3 Bucket that accepts files.

- a Lambda that takes the CSV file from the Input S3 bucket, converts it to a PDF one and uploads it to the Output S3 Bucket

- an Output S3 Bucket that receives files.

## Deployment Parameters

This component has one CloudFormation deployment parameter:

- `ConversionTimeout`, an optional parameter, represents the timeout of the Conversion Lambda function. By default its 60 seconds.

- `InputBucketName`, an optional parameter, represents the name of the Input CSV Bucket. By default its "s3-lambda-csv-input-to-pdf-s3-bucket".

- `OutputBucketName`, an optional parameter, represents the name of the Output PDF Bucket. By default its "s3-lambda-pdf-output-from-csv-s3-bucket".

- `CSVSeparator`, an optional parameter, represents the CSV data separator. By default its a single comma ",".

- `HasHeaders`, an optional parameter, represents a check whether to incorporate headers . By default its "true".

## Latest Release - 1.0.0

- Initial Release

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests