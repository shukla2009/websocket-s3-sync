# Write output of websocket to s3 files spliting by minute

```
docker run --name ws-s3-sync \
-e SOURCE=ws://stream.meetup.com/2/rsvps
-e S3_BUCKET=s3://wt-rahul-test/live/
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
-d shukla2009/node-aws 

```