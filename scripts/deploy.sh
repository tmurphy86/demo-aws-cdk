#! /bin/bash

set -e
set -u
set -o pipefail

# Running CDK Project

# Install CDK 
npm install -g aws-cdk@1.87.1 

# Install Dependencies
npm install
npm run build

# Deploy
cdk deploy --all --require-approval never
