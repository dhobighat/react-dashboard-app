#!/bin/bash
echo "Deploying to the $S3_BUCKET bucket"

# Install the AWS CLI so we can publish to S3
pip install awscli --upgrade --user

# Sync our build folder with our S3 bucket
# --acl public-read says deploy the files with public read access
# --delete says to delete files in the bucket that aren't present in the build folder
#   this ensures that old assets built with webpack with hashed names get deleted
#   when a new build of the app is made and the assets get new hash names
aws s3 sync public/ "s3://$S3_BUCKET" --acl public-read --delete
