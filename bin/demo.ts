#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoStack } from '../lib/demo-stack';

const app = new cdk.App();

// Stack Deployment for both coast for HA
new DemoStack(app, 'DemoStackWest',
    {
        env: { region: "us-west-1"},
        encryptBucket: true
    });

new DemoStack(app, 'DemoStackEast', 
    {
        env: {region: "us-east-1"},
        encryptBucket: true
    });
new DemoStack(app, 'DemoStackEastBackup', 
    {
        env: {region: "us-east-1"},
        encryptBucket: true
    });

app.synth();