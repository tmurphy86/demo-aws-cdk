# demo-aws-cdk
AWS Demo deployment using the AWS CDK and AWS Pipelines

## AWS Pipelines with CDK Typescript

A serverless CI/CD platform leveraging native AWS services provisioned using the AWS Cloud Development Kit (CDK). As per the AWS Well Architected Framework, this project assumes the use of multiple AWS accounts for secure isolation of environments.

<center>

```mermaid
graph TD
    A[Simple CICD Pipelines fas:fa-code] -->|fas:fa-terminal git push| B[git repo fas:fa-code-branch]
    B -->|git webhooks| C{fab:fa-aws AWS Pipeline}
    C -->|Start|D[fab:fa-aws AWS CodeBuild fas:fa-tools]
    D -->|Sends Build File|E[Docker]
    E -->F[AWS KMS fas:fa-key]-->E
    E -->G[S3 Artifacts fab:fa-bitbucket] -->E
    E -->|Return Results|D
    D -->|Done|C
    C -->|Start| O[fab:fa-aws AWS CodeDeploy fas:fa-parachute-box] -->|far:fa-check-circle  fas:fa-ban | M[fab:fa-aws Dev Account   ]
    O -->|far:fa-check-circle  fas:fa-ban | N[fab:fa-aws Staging Account]
    O -->|far:fa-check-circle  fas:fa-ban | P[fab:fa-aws Production Account]
    O --> |Done| C
```
</center>

`Flowchart -` https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid


## Defining your environment & projects

Add a project to the project-config.json file in the root of the Pipeline project & push to S3.
Add your build, test, and deploy scripts in the root of the project repo
Deploy Project by committing to the main branch (or feature branch as configured)
### AWS CDK

Invoke the CDK `cdk init app --language typescript`

Create buckets
### AWS services

- AWS CodeCommit (or any source control provider supported by CodePipeline)
- AWS CodePipeline
- AWS CodeBuild
- AWS Lambda
- AWS S3
- AWS SNS
- AWS CloudWatch
- AWS Systems Manager: Parameter Store
- AWS CloudFormation
