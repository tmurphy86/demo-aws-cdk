import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

interface DemoStackProps extends cdk.StackProps {
  encryptBucket?: boolean;
}

export class DemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: DemoStackProps) {
    super(scope, id, props);

    if (props && props.encryptBucket) {
      new s3.Bucket(this, "MyDemoBucket", {
        encryption: s3.BucketEncryption.KMS_MANAGED,
        removalPolicy: cdk.RemovalPolicy.DESTROY
      });
    } else {
      new s3.Bucket(this, "MyDemoBucket", {
        removalPolicy: cdk.RemovalPolicy.DESTROY});
    }
  }
}

