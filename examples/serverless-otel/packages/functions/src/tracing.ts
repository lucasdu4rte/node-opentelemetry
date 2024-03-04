import { BaselimeSDK, BetterHttpInstrumentation, withOpenTelemetry } from '../../../../../src/index'
import { AwsInstrumentation } from '@opentelemetry/instrumentation-aws-sdk';

new BaselimeSDK({
    baselimeKey: process.env.BASELIME_KEY, collectorUrl: 'https://otel.baselime.cc/v1', serverless: false, instrumentations: [
      new AwsInstrumentation({
        suppressInternalInstrumentation: true,
      }),
      new BetterHttpInstrumentation({ 
        captureBody: true,
        captureHeaders: true,
      })
    ]
  }).start();

export {
    withOpenTelemetry
}