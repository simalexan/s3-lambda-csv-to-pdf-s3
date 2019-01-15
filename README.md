
# S3 Bucket -> Lambda Convert Markdown to HTML -> S3 Bucket

## Description

This is a serverless component that takes uploaded Markdown file from one S3 Bucket, converts them to an HTML document and uploads to another S3 Bucket. It contains:

- an Input S3 Bucket that accepts files.

- a Lambda that takes the Markdown file from the Input S3 bucket, converts it to a HTML one and uploads it to the Output S3 Bucket

- an Output S3 Bucket that receives files.

## Deployment Parameters

This component has one CloudFormation deployment parameter:

- `ConversionTimeout`, an optional parameter, represents the timeout of the Conversion Lambda function. By default its 60 seconds.

- `InputBucketName`, an optional parameter, represents the name of the Input Markdown Bucket. By default its "s3-lambda-markdown-input-to-html-s3-bucket".

- `OutputBucketName`, an optional parameter, represents the name of the Output HTML Bucket. By default its "s3-lambda-html-output-from-markdown-s3-bucket".

## Latest Release - 1.1.0

- Added Input and Output bucket names as CloudFormation Parameters

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests