# Write output of websocket to s3 files splitting by minute

```
docker run --name stream \
-e SOURCE=ws://stream.meetup.com/2/rsvps \
-e S3_BUCKET=s3://wt-rahul-test/live/ \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-d shukla2009/ws-s3-sync 

```